"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useThemeLanguage } from "../../ThemeLanguageContext";
import { questions } from "../../utils/questions";
import type { Question } from "../../types/types";

type AnswerMap = Record<string, string | number | undefined>;
type ScoreRecord = { total: number; max: number };

export default function ResultPage() {
  const { theme, language } = useThemeLanguage();
  const [answers, setAnswers] = useState<AnswerMap | null>(null);
  const [bfRaw, setBfRaw] = useState<Record<string, number>>({});
  const [bfCal, setBfCal] = useState<Record<string, number>>({});
  const [riasecPct, setRiasecPct] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  const BF_INTERP: Record<string, { en: { high: string; low: string }, mn: { high: string; low: string } }> = {
    openness: { en: { high: "You are open to new ideas, creative, and curious.", low: "You prefer concrete facts and established routines." },
                mn: { high: "Та шинэ санаа, бүтээлч сэтгэлгээ, шинэлэг зүйлд сонирхол ихтэй.", low: "Та бодит баримт, тогтсон арга барилд илүү таатай." } },
    conscientiousness: { en: { high: "You are organized, reliable, and responsible.", low: "You can be flexible and spontaneous." },
                         mn: { high: "Та зохион байгуулалттай, найдвартай.", low: "Та илүү уян хатан, санаачлагатай байж болно." } },
    extraversion: { en: { high: "You gain energy from social interaction.", low: "You prefer calm and quiet environments." },
                     mn: { high: "Та бусадтай харилцах үед эрч хүч авдаг.", low: "Та нам гүм орчинд төвлөрөх дуртай." } },
    agreeableness: { en: { high: "You are friendly and cooperative.", low: "You are straightforward and assertive." },
                     mn: { high: "Та найрсаг, бусдын хэрэгцээнд анхааралтай.", low: "Та шулуун шударга, шийдвэл хатуу байх талтай." } },
    neuroticism: { en: { high: "You may be sensitive to stress or emotional fluctuations.", low: "You are emotionally stable and resilient." },
                   mn: { high: "Та стресс, сэтгэл хөдлөлд өртөмтгий байж магадгүй.", low: "Та сэтгэлзүйн хувьд тогтвортой, дарамттай үед тайван байж чадна." } },
  };

  const RIASEC_JOBS: Record<string, { en: string[]; mn: string[] }> = {
    realistic: { en: ["Engineer/Technician", "Technical Specialist"], mn: ["Инженер/Техникч", "Техник/Системийн ажилтан"] },
    investigative: { en: ["Data Analyst", "Software Developer", "Researcher"], mn: ["Мэдээлэл шинжээч", "Програм хөгжүүлэгч", "Судлаач"] },
    artistic: { en: ["Graphic Designer", "Writer/Author", "UX/UI Designer"], mn: ["График дизайнер", "Зохиолч", "UX/UI дизайнер"] },
    social: { en: ["Teacher/Trainer", "Counselor", "HR Specialist"], mn: ["Багш", "Зөвлөх", "HR мэргэжилтэн"] },
    enterprising: { en: ["Sales Manager", "Entrepreneur", "Marketing Manager"], mn: ["Борлуулалтын менежер", "Энтрепренёр", "Маркетингийн менежер"] },
    conventional: { en: ["Accountant", "Operations Analyst", "Office Manager"], mn: ["Нягтлан бодогч", "Томоохон админ", "Үйл ажиллагааны шинжээч"] },
  };

  // Helper functions: z-score percentile + blending
  function erf(x: number) {
    const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
    const sign = x >= 0 ? 1 : -1;
    const absx = Math.abs(x);
    const t = 1 / (1 + p * absx);
    return sign * (1 - (((((a5*t + a4)*t + a3)*t + a2)*t + a1)*t*Math.exp(-absx*absx)));
  }
  const normalCdf = (z: number) => 0.5 * (1 + erf(z/Math.SQRT2));
  const blendPercent = (raw: number, zPct: number, alpha = 0.6) => Math.round(alpha*raw + (1-alpha)*zPct);

  useEffect(() => {
    setLoading(true);
    try {
      const raw = localStorage.getItem("traitry-answers");
      const prog = localStorage.getItem("traitry-progress");
      let parsed: AnswerMap | null = null;
      if (raw) parsed = JSON.parse(raw);
      else if (prog) { const p = JSON.parse(prog); if (p?.answers) parsed = p.answers; }
      setAnswers(parsed && Object.keys(parsed).length ? parsed : null);
    } catch { setAnswers(null); } finally { setLoading(false); }
  }, []);

  useEffect(() => {
    if (loading || !answers) return;

    const bf: Record<string, ScoreRecord> = { openness: { total:0,max:0 }, conscientiousness:{total:0,max:0}, extraversion:{total:0,max:0}, agreeableness:{total:0,max:0}, neuroticism:{total:0,max:0} };
    const r: Record<string, ScoreRecord> = { realistic:{total:0,max:0}, investigative:{total:0,max:0}, artistic:{total:0,max:0}, social:{total:0,max:0}, enterprising:{total:0,max:0}, conventional:{total:0,max:0} };

    questions.forEach((q: Question)=>{
      const raw = answers[q.id]; if(raw==null) return;
      const scale = q.scale??5;
      let val = Number(raw);
      if(isNaN(val)&&q.type==="single"&&q.options&&typeof raw==="string"){ const idx = q.options.indexOf(raw); if(idx>=0) val = idx+1; else return;}
      if((q as any).reverse) val = (scale+1)-val;
      const weight = (q as any).weight??1;
      const contrib = val*weight; const maxContrib = scale*weight;
      const traitRaw = ((q as any).trait??"").toString().trim().toLowerCase();
      if(!traitRaw) return;
      if(bf[traitRaw]){ bf[traitRaw].total+=contrib; bf[traitRaw].max+=maxContrib; }
      else if(r[traitRaw]) { r[traitRaw].total+=contrib; r[traitRaw].max+=maxContrib; }
    });

    const bfRawPct: Record<string, number> = {}; Object.keys(bf).forEach(k=>bfRawPct[k]=bf[k].max>0?Math.round((bf[k].total/bf[k].max)*100):0);
    const rPct: Record<string, number> = {}; Object.keys(r).forEach(k=>rPct[k]=r[k].max>0?Math.round((r[k].total/r[k].max)*100):0);

    const vals = Object.values(bfRawPct); const mean = vals.reduce((s,v)=>s+v,0)/vals.length;
    const std = Math.sqrt(vals.reduce((s,v)=>s+(v-mean)**2,0)/vals.length)||1;
    const bfZPct: Record<string, number> = {}; Object.keys(bfRawPct).forEach(k=>bfZPct[k]=Math.round(normalCdf((bfRawPct[k]-mean)/std)*100));
    const bfCalPct: Record<string, number> = {}; Object.keys(bfRawPct).forEach(k=>bfCalPct[k]=blendPercent(bfRawPct[k],bfZPct[k]));

    setBfRaw(bfRawPct);
    setBfCal(bfCalPct);
    setRiasecPct(rPct);
  }, [answers, loading]);

  const recommendCareers = (bf: Record<string, number>, r: Record<string, number>) => {
    const recs: string[] = [];
    const add = (items: string[]) => items.forEach(it=>{if(!recs.includes(it)) recs.push(it)});
    if((r.investigative??0)>=55&&(bf.openness??0)>=50)add(language==="en"?["Software Developer","Data Analyst"]:["Програм хөгжүүлэгч","Мэдээлэл шинжээч"]);
    if((r.artistic??0)>=55&&(bf.openness??0)>=55)add(language==="en"?["Graphic Designer","UX/UI Designer"]:["График дизайнер","UX/UI дизайнер"]);
    if((r.social??0)>=55&&(bf.extraversion??0)>=50)add(language==="en"?["Teacher","HR Specialist"]:["Багш","HR мэргэжилтэн"]);
    if((r.enterprising??0)>=55&&(bf.extraversion??0)>=50)add(language==="en"?["Sales Manager","Entrepreneur"]:["Борлуулалтын менежер","Энтрепренёр"]);
    if((r.conventional??0)>=55&&(bf.conscientiousness??0)>=55)add(language==="en"?["Accountant","Admin"]:["Нягтлан бодогч","Админ"]);
    if((r.realistic??0)>=55&&(bf.openness??0)<55)add(language==="en"?["Engineer/Technician"]:["Инженер/Техникч"]);
    if(recs.length===0){
      const topR=Object.entries(r).sort((a,b)=>b[1]-a[1]).slice(0,2).map(x=>x[0]);
      topR.includes("investigative")&&add(language==="en"?["Data Analyst"]:["Мэдээлэл шинжээч"]);
      topR.includes("artistic")&&add(language==="en"?["Graphic Designer"]:["График дизайнер"]);
      topR.includes("social")&&add(language==="en"?["Teacher"]:["Багш"]);
      topR.includes("enterprising")&&add(language==="en"?["Sales"]:["Борлуулалт"]);
      topR.includes("conventional")&&add(language==="en"?["Admin"]:["Админ"]);
      topR.includes("realistic")&&add(language==="en"?["Engineer/Technician"]:["Инженер/Техникч"]);
    }
    return recs.slice(0,8);
  };

  const SvgBar = ({percent}:{percent:number})=>{
    const w = Math.max(0,Math.min(100,percent));
    return <div className="w-full flex items-center gap-3">
      <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="flex-1 h-3">
        <rect x={0} y={0} width={100} height={10} rx={4} fill={theme==="dark"?"#2d2d2d":"#e6e6e6"} />
        <rect x={0} y={0} width={w} height={10} rx={4} fill={theme==="dark"?"#9b7cff":"#6d28d9"} />
      </svg>
      <div className="w-12 text-right text-sm font-medium">{w}%</div>
    </div>
  }

  if(loading) return <div className={`min-h-screen flex items-center justify-center ${theme==="dark"?"bg-black text-white":"bg-white text-black"}`}>{language==="en"?"Loading results…":"Үр дүнг ачааллаж байна…"}</div>;
  if(!answers) return <div className={`min-h-screen px-6 py-24 ${theme==="dark"?"bg-black text-white":"bg-white text-black"}`}>
    <h1 className="text-2xl font-bold mb-4 text-center">{language==="en"?"No answers found.":"Хариулт олдсонгүй"}</h1>
    <div className="flex justify-center gap-4">
      <Link href="/test" className="px-4 py-2 rounded-md border border-purple-500 font-semibold">{language==="en"?"Take Test":"Тест өгөх"}</Link>
    </div>
  </div>;

  const careerRecs = recommendCareers(bfCal, riasecPct);

  return (
    <div className={`min-h-screen px-6 py-12 ${theme==="dark"?"bg-black text-white":"bg-white text-black"}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl pt-12 font-bold mb-6 text-center">{language==="en"?"Your Traitry Results":"Таны Traitry Үр дүн"}</h1>

        {/* Big Five */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{language==="en"?"Big Five (OCEAN)":"Big Five (OCEAN)"}</h2>
          <div className="grid grid-cols-1 gap-4">
            {["openness","conscientiousness","extraversion","agreeableness","neuroticism"].map(t=>{
              const raw = bfRaw[t]??0; const cal = bfCal[t]??0;
              const text = cal>=55?BF_INTERP[t][language==="en"?"en":"mn"].high:BF_INTERP[t][language==="en"?"en":"mn"].low;
              return <div key={t} className={`p-4 rounded-lg border ${theme==="dark"?"bg-gray-900 border-gray-700":"bg-white border-gray-200"}`}>
                <div className="flex justify-between mb-2 font-medium capitalize">{t} (Raw/Cal) <span>{raw}% / {cal}%</span></div>
                <SvgBar percent={cal} />
                <div className="mt-2 text-sm">{text}</div>
              </div>
            })}
          </div>
        </section>

        {/* RIASEC */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{language==="en"?"RIASEC (Holland)":"RIASEC (Holland)"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["realistic","investigative","artistic","social","enterprising","conventional"].map(t=>{
              const val = riasecPct[t]??0;
              const jobs = RIASEC_JOBS[t][language==="en"?"en":"mn"];
              return <div key={t} className={`p-4 rounded-lg border ${theme==="dark"?"bg-gray-900 border-gray-700":"bg-white border-gray-200"}`}>
                <div className="flex justify-between mb-2 font-medium capitalize">{t} <span>{val}%</span></div>
                <SvgBar percent={val} />
                <div className="mt-2 text-sm">{language==="en"?"Example jobs:":"Жишээ ажил:"} {jobs.join(", ")}</div>
              </div>
            })}
          </div>
        </section>

        {/* Career suggestions */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{language==="en"?"Top career suggestions":"Топ мэргэжлийн санал"}</h2>
          <ul className="list-disc list-inside space-y-1">{careerRecs.map(c=><li key={c}>{c}</li>)}</ul>
        </section>

        <div className="flex gap-3 justify-center">
          <Link href="/test" className="px-4 py-2 rounded-md border border-purple-500 font-semibold">{language==="en"?"Retake Test":"Тест дахин өгөх"}</Link>
          <button className="px-4 py-2 rounded-md border border-gray-400"
            onClick={()=>{
              localStorage.removeItem("traitry-answers");
              localStorage.removeItem("traitry-progress");
              setAnswers(null); setBfRaw({}); setBfCal({}); setRiasecPct({});
              window.location.reload();
            }}>{language==="en"?"Clear & Restart":"Цэвэрлэх ба дахин эхлэх"}</button>
        </div>
      </div>
    </div>
  )
}

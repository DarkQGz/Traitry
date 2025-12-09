"use client";

import { useThemeLanguage } from "../../ThemeLanguageContext";

export default function AboutPage() {
  const { theme, language } = useThemeLanguage();

  const pageBgClass = theme === "dark" ? "bg-black text-white" : "bg-white text-black";

  const texts = {
    en: {
      title: "About Traitry",
      paragraphs: [
        "Traitry is a platform designed to help anyone understand themselves better. Knowing your personality, mental traits, and natural tendencies is one of the most important steps in making informed life decisions. While everyone can benefit from understanding themselves, high school students in particular often face stress and uncertainty about career choices, education paths, and personal development.",
        "The name 'Traitry' comes from combining 'Trait' and 'Tree'. Just like a tree grows over time, your traits and skills can grow as well. Traitry allows you to explore your unique strengths, weaknesses, and behavioral patterns, helping you understand yourself deeply and make better life choices.",
        "Life can be challenging at any age. Many people struggle with decisions about careers, education, or personal goals. High school students, in particular, face the pressure of exams, parental expectations, and societal norms. Traitry provides guidance to help navigate these choices, offering clarity, confidence, and a sense of direction.",
        "Through Traitry, you can see which careers, jobs, and industries align with your personality type. Using advanced AI algorithms, Traitry analyzes your responses to provide highly accurate insights. This includes career suggestions, internships, and projects that match your natural abilities and personal growth goals.",
        "Traitry emphasizes mental health and self-awareness. Understanding yourself not only reduces stress but also helps you make choices aligned with your strengths and values. It's about discovering what motivates you, how you work best, and how to align your life with your skills and interests.",
        "Traitry also provides 'Entrance General Exam' guidance for students. Based on personality and career interests, it suggests which exam subjects or streams are most suitable. For example, a student interested in engineering might focus on mathematics and physics, while someone aiming for medicine would benefit from biology and chemistry. This ensures smarter, more effective decisions about which EYSH subjects to take.",
        "The platform is not limited to high school students. Anyone curious about their personality, career options, or life path can gain insight. Adults looking to change careers, explore new opportunities, or understand themselves better can also benefit from Traitry.",
        "Traitry guides users on study strategies, hobbies, and activities to strengthen skills, confidence, and career readiness. It helps balance academic, professional, and personal development, supporting growth for all ages.",
        "Ultimately, Traitry is a comprehensive guidance system, not just a personality test. It prioritizes quality over speed, providing deep analysis and actionable recommendations. Whether you are a student, professional, or lifelong learner, Traitry helps you understand yourself and make informed, confident decisions.",
        "Like a tree that needs care, sunlight, and water to grow, your personality and abilities need awareness, effort, and guidance. Traitry provides the tools and insights to help you grow into your best self, find meaningful work, and live a fulfilling life."
      ]
    },
    mn: {
      title: "Traitry-ийн тухай",
      paragraphs: [
        "Traitry нь хүн бүрт өөрийгөө илүү сайн ойлгоход туслах зорилготой платформ юм. Өөрийн зан чанар, оюун ухаан, байгалийн чиг хандлагыг мэдэх нь амьдралд зөв шийдвэр гаргах хамгийн чухал алхамуудын нэг юм. Хэн ч өөрийгөө ойлгохоос ашиг хүртэж болно, гэхдээ ахлах сургуулийн сурагчид карьерын сонголт, боловсролын зам, хувийн хөгжилтэй холбоотой стресс, эргэлзэлд ихээр өртдөг.",
        "'Traitry' гэдэг нэр нь 'Trait' ба 'Tree'-г хослуулсан нэр юм. Мод шиг таны зан чанар, чадвар цаг хугацааны туршид өсч хөгждөг. Traitry нь таны өвөрмөц хүч, сул тал, зан төлөвийг судлах боломжийг олгож, өөрийгөө гүнзгий ойлгоход тусалдаг.",
        "Амьдрал нь аливаа насанд сорилттой байдаг. Олон хүн карьер, боловсрол, эсвэл хувийн зорилтуудтай холбоотой шийдвэр гаргахад асуудалтай тулгардаг. Ахлах сургуулийн сурагчид ялангуяа шалгалт, эцэг эхийн болон нийгмийн дарамттай тулгардаг. Traitry нь эдгээр сонголтод зөвлөгөө өгч, тодорхой байдал, итгэл, чиглэл олгодог.",
        "Traitry нь таны зан чанарт нийцсэн карьер, ажил, салбарыг харуулдаг. Нарийвчилсан AI алгоритм ашиглаж, өндөр үнэн зөвтэй зөвлөгөөг гаргана. Үүнд карьерын санал, дадлага, төслүүд багтана, таны байгалийн чадвартай нийцсэн.",
        "Traitry нь сэтгэл зүй болон өөрийгөө мэдэх чадварт төвлөрдөг. Өөрийгөө ойлгосноор стресс багасаж, чадвар, үнэ цэнтэй зүйлд нийцсэн шийдвэр гаргах боломжтой болно. Энэ нь юу таныг урамшуулдаг, хэрхэн ажилладаг, хэрхэн амьдралаа чадвар, сонирхолд нийцүүлэхийг ойлгоход тусалдаг.",
        "Traitry мөн 'Элсэлтийн Ерөнхий Шалгалт'-ийн зөвлөгөө өгдөг. Өөрийн зан чанар, карьерын зорилгод үндэслэн аль шалгалтын хичээл, чиглэл хамгийн тохиромжтойг санал болгодог. Жишээ нь, инженерийн чиглэлд сонирхолтой сурагч нь математик, физик дээр анхаарвал илүү үр дүнтэй, харин анагаахын мэргэжилд сонирхолтой сурагч нь биологи, хими дээр анхаарвал үр дүнтэй.",
        "Энэхүү платформ нь зөвхөн ахлах сургуулийн сурагчдад зориулагдсан биш. Өөрийгөө мэдэх, карьерын сонголт, амьдралын замналд сонирхолтой хүн бүр ашиг хүртэж болно. Насанд хүрэгчид карьераа өөрчлөх, шинэ боломж судлах, өөрийгөө илүү сайн ойлгохыг хүсвэл мөн ашиглах боломжтой.",
        "Traitry нь сурах арга барил, хобби, үйл ажиллагаанд зөвлөгөө өгч чадвар, итгэл, карьерын бэлтгэлээ сайжруулахад тусалдаг. Энэ нь академик, мэргэжлийн, хувийн хөгжилд тэнцвэр олгоход дэмжлэг үзүүлдэг.",
        "Эцэст нь, Traitry нь зөвхөн тест биш; энэ нь гүнзгий анализ болон зөвлөмжийн систем юм. Чанарт төвлөрч, амьдрал, карьерын төлөвлөгөөнд хэрэгжүүлэх боломжтой зөвлөгөө өгдөг. Сурагч, мэргэжилтэн, эсвэл өөрийгөө хөгжүүлэх хүсэлтэй хэн бүхэнд тусална.",
        "Мод ус, нарны гэрэл, арчилгаа хэрэгтэй мэт таны зан чанар, чадвар ч мэдлэг, хүчин чармайлт, зөвлөгөө шаарддаг. Traitry нь таныг хамгийн сайн хувилбар болоход, утга учиртай амьдрал, карьер бүтээхэд хэрэгтэй хэрэгсэл, зөвлөгөөг өгдөг."
      ]
    }
  };

  const t = texts[language];

  return (
    <div className={`${pageBgClass} min-h-screen flex flex-col items-center justify-start pt-32 px-6`}>
      <div className="max-w-4xl w-full p-10 flex flex-col gap-6 rounded-xl border border-purple-500">
        <h1 className="text-4xl font-bold">{t.title}</h1>
        {t.paragraphs.map((para, index) => (
          <p key={index} className="text-md md:text-lg">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

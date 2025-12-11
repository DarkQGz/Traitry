import { Question } from "../types/types";

export const questions: Question[] = [
  // --- Big5: Openness (1–8) ---
  { id: "q1", text: { en: "I enjoy learning new things.", mn: "Би шинэ зүйл сурах дуртай." }, model: "Big5", trait: "Openness", type: "scale", scale: 5 },
  { id: "q2", text: { en: "I like trying new hobbies.", mn: "Би шинэ сонирхолтой зүйлсийг турших дуртай." }, model: "Big5", trait: "Openness", type: "scale", scale: 5 },
  { id: "q3", text: { en: "I enjoy thinking about abstract ideas.", mn: "Би онолын санаа бодлыг эргэцүүлэх дуртай." }, model: "Big5", trait: "Openness", type: "scale", scale: 5 },
  { id: "q4", text: { en: "I am curious about many different things.", mn: "Би олон өөр зүйлд сонирхолтой." }, model: "Big5", trait: "Openness", type: "scale", scale: 5 },
  { id: "q5", text: { en: "I enjoy exploring different cultures.", mn: "Би янз бүрийн соёл судлах дуртай." }, model: "Big5", trait: "Openness", type: "scale", scale: 5 },
  { id: "q6", text: { en: "I like to try new foods.", mn: "Би шинэ хоол турших дуртай." }, model: "Big5", trait: "Openness", type: "scale", scale: 5 },
  { id: "q7", text: { en: "I enjoy artistic activities.", mn: "Би урлагийн үйл ажиллагаанд дуртай." }, model: "Big5", trait: "Openness", type: "scale", scale: 5 },
  { id: "q8", text: { en: "I like to read about philosophy or science.", mn: "Би философи болон шинжлэх ухаан судлах дуртай." }, model: "Big5", trait: "Openness", type: "scale", scale: 5 },

  // --- Big5: Conscientiousness (9–16) ---
  { id: "q9", text: { en: "I always complete tasks on time.", mn: "Би ажлаа цаг хугацаанд нь дуусгадаг." }, model: "Big5", trait: "Conscientiousness", type: "scale", scale: 5 },
  { id: "q10", text: { en: "I plan ahead before starting projects.", mn: "Би төсөл эхлэхээс өмнө төлөвлөгөө гаргадаг." }, model: "Big5", trait: "Conscientiousness", type: "scale", scale: 5 },
  { id: "q11", text: { en: "I pay attention to details.", mn: "Би нарийн зүйлд анхаардаг." }, model: "Big5", trait: "Conscientiousness", type: "scale", scale: 5 },
  { id: "q12", text: { en: "I like to keep things organized.", mn: "Би бүх зүйлийг эмх цэгцтэй байлгах дуртай." }, model: "Big5", trait: "Conscientiousness", type: "scale", scale: 5 },
  { id: "q13", text: { en: "I keep my promises.", mn: "Би амласан зүйлээ биелүүлдэг." }, model: "Big5", trait: "Conscientiousness", type: "scale", scale: 5 },
  { id: "q14", text: { en: "I set goals and work hard to achieve them.", mn: "Би зорилго тавьж, түүндээ хүрэхийн тулд хичээдэг." }, model: "Big5", trait: "Conscientiousness", type: "scale", scale: 5 },
  { id: "q15", text: { en: "I avoid procrastination.", mn: "Би хойшлуулах явдлаас зайлсхийдэг." }, model: "Big5", trait: "Conscientiousness", type: "scale", scale: 5 },
  { id: "q16", text: { en: "I am thorough in my work.", mn: "Би ажлаа нягт нямбай хийдэг." }, model: "Big5", trait: "Conscientiousness", type: "scale", scale: 5 },

  // --- Big5: Extraversion (17–24) ---
  { id: "q17", text: { en: "I enjoy being around other people.", mn: "Би бусад хүмүүстэй хамт байх дуртай." }, model: "Big5", trait: "Extraversion", type: "scale", scale: 5 },
  { id: "q18", text: { en: "I often speak up in group discussions.", mn: "Би бүлгийн хэлэлцүүлэгт ихэвчлэн үгээ хэлдэг." }, model: "Big5", trait: "Extraversion", type: "scale", scale: 5 },
  { id: "q19", text: { en: "I feel energized when socializing.", mn: "Би бусадтай харилцахдаа эрч хүч авдаг." }, model: "Big5", trait: "Extraversion", type: "scale", scale: 5 },
  { id: "q20", text: { en: "I like to meet new people.", mn: "Би шинэ хүмүүстэй танилцах дуртай." }, model: "Big5", trait: "Extraversion", type: "scale", scale: 5 },
  { id: "q21", text: { en: "I enjoy parties and social gatherings.", mn: "Би үдэшлэг, нийгмийн арга хэмжээнд дуртай." }, model: "Big5", trait: "Extraversion", type: "scale", scale: 5 },
  { id: "q22", text: { en: "I feel comfortable meeting strangers.", mn: "Би танихгүй хүмүүстэй уулзахад тав тухтай байдаг." }, model: "Big5", trait: "Extraversion", type: "scale", scale: 5 },
  { id: "q23", text: { en: "I like being the center of attention.", mn: "Би анхаарал татах төвд байх дуртай." }, model: "Big5", trait: "Extraversion", type: "scale", scale: 5 },
  { id: "q24", text: { en: "I enjoy speaking in public.", mn: "Би олон нийтийн өмнө ярилцах дуртай." }, model: "Big5", trait: "Extraversion", type: "scale", scale: 5 },

  // --- Big5: Agreeableness (25–32) ---
  { id: "q25", text: { en: "I try to help others when I can.", mn: "Би боломжтой бол бусдад туслахыг хичээдэг." }, model: "Big5", trait: "Agreeableness", type: "scale", scale: 5 },
  { id: "q26", text: { en: "I am sensitive to the needs of others.", mn: "Би бусдын хэрэгцээнд мэдрэмжтэй." }, model: "Big5", trait: "Agreeableness", type: "scale", scale: 5 },
  { id: "q27", text: { en: "I forgive others easily.", mn: "Би бусдыг амархан уучилдаг." }, model: "Big5", trait: "Agreeableness", type: "scale", scale: 5 },
  { id: "q28", text: { en: "I avoid arguments whenever possible.", mn: "Би маргаанаас аль болох зайлсхийдэг." }, model: "Big5", trait: "Agreeableness", type: "scale", scale: 5 },
  { id: "q29", text: { en: "I enjoy helping people even when inconvenient.", mn: "Би бусдыг туслах дуртай, хүндрэл гарсан ч." }, model: "Big5", trait: "Agreeableness", type: "scale", scale: 5 },
  { id: "q30", text: { en: "I trust people easily.", mn: "Би хүмүүсийг амархан итгэдэг." }, model: "Big5", trait: "Agreeableness", type: "scale", scale: 5 },
  { id: "q31", text: { en: "I avoid hurting other people's feelings.", mn: "Би бусдын сэтгэлд хор учруулахгүй байхыг хичээдэг." }, model: "Big5", trait: "Agreeableness", type: "scale", scale: 5 },
  { id: "q32", text: { en: "I am kind and considerate.", mn: "Би сайхан сэтгэлтэй, бодлоготой." }, model: "Big5", trait: "Agreeableness", type: "scale", scale: 5 },

  // --- Big5: Neuroticism (33–40) ---
  { id: "q33", text: { en: "I often feel anxious or stressed.", mn: "Би ихэвчлэн сэтгэл түгшиж, стресстдэг." }, model: "Big5", trait: "Neuroticism", type: "scale", scale: 5 },
  { id: "q34", text: { en: "I get upset easily when things go wrong.", mn: "Зүйлс буруугаар эргэхэд би амархан уурладаг." }, model: "Big5", trait: "Neuroticism", type: "scale", scale: 5 },
  { id: "q35", text: { en: "I worry about things too much.", mn: "Би зүйлсийн талаар илүү их санаа зовдог." }, model: "Big5", trait: "Neuroticism", type: "scale", scale: 5 },
  { id: "q36", text: { en: "I find it hard to relax.", mn: "Би амрахад хэцүү байдаг." }, model: "Big5", trait: "Neuroticism", type: "scale", scale: 5 },
  { id: "q37", text: { en: "I feel emotionally unstable at times.", mn: "Би заримдаа сэтгэл хөдлөлөөр тогтворгүй байдаг." }, model: "Big5", trait: "Neuroticism", type: "scale", scale: 5 },
  { id: "q38", text: { en: "I feel anxious when I don't plan ahead.", mn: "Би урьдчилан төлөвлөхгүй бол санаа зовдог." }, model: "Big5", trait: "Neuroticism", type: "scale", scale: 5 },
  { id: "q39", text: { en: "I get frustrated easily.", mn: "Би амархан уурладаг." }, model: "Big5", trait: "Neuroticism", type: "scale", scale: 5 },
  { id: "q40", text: { en: "I worry about future problems.", mn: "Би ирээдүйн асуудалд санаа зовдог." }, model: "Big5", trait: "Neuroticism", type: "scale", scale: 5 },

  // --- DISC: Dominance (41–44) ---
{ id: "q41", text: { en: "I like taking charge of situations.", mn: "Би нөхцөл байдлыг удирдах дуртай." }, model: "DISC", trait: "Dominance", type: "scale", scale: 5 },
{ id: "q42", text: { en: "I enjoy challenges and competition.", mn: "Би сорилт болон өрсөлдөөнд дуртай." }, model: "DISC", trait: "Dominance", type: "scale", scale: 5 },
{ id: "q43", text: { en: "I make quick decisions.", mn: "Би хурдан шийдвэр гаргадаг." }, model: "DISC", trait: "Dominance", type: "scale", scale: 5 },
{ id: "q44", text: { en: "I am comfortable taking risks.", mn: "Би эрсдэл хүлээхэд тав тухтай." }, model: "DISC", trait: "Dominance", type: "scale", scale: 5 },

// --- DISC: Influence (45–48) ---
{ id: "q45", text: { en: "I enjoy persuading others to my ideas.", mn: "Би өөрийн санааг бусдад ойлгуулах дуртай." }, model: "DISC", trait: "Influence", type: "scale", scale: 5 },
{ id: "q46", text: { en: "I like being sociable.", mn: "Би нийгмийн харилцаанд дуртай." }, model: "DISC", trait: "Influence", type: "scale", scale: 5 },
{ id: "q47", text: { en: "I enjoy motivating others.", mn: "Би бусдыг урамшуулах дуртай." }, model: "DISC", trait: "Influence", type: "scale", scale: 5 },
{ id: "q48", text: { en: "I like being persuasive.", mn: "Би итгүүлэх чадвартай байх дуртай." }, model: "DISC", trait: "Influence", type: "scale", scale: 5 },

// --- DISC: Steadiness (49–52) ---
{ id: "q49", text: { en: "I prefer stable and predictable routines.", mn: "Би тогтвортой, урьдчилан таамаглах боломжтой ажлыг илүүд үздэг." }, model: "DISC", trait: "Steadiness", type: "scale", scale: 5 },
{ id: "q50", text: { en: "I enjoy supporting others patiently.", mn: "Би бусдыг тэвчээртэйгээр дэмжих дуртай." }, model: "DISC", trait: "Steadiness", type: "scale", scale: 5 },
{ id: "q51", text: { en: "I prefer calm environments.", mn: "Би тайван орчинг илүүд үздэг." }, model: "DISC", trait: "Steadiness", type: "scale", scale: 5 },
{ id: "q52", text: { en: "I enjoy helping colleagues patiently.", mn: "Би хамтран ажиллагсаддаа тэвчээртэйгээр туслах дуртай." }, model: "DISC", trait: "Steadiness", type: "scale", scale: 5 },

// --- DISC: Compliance (53–56) ---
{ id: "q53", text: { en: "I follow rules carefully.", mn: "Би дүрмийг нарийн дагаж мөрддөг." }, model: "DISC", trait: "Compliance", type: "scale", scale: 5 },
{ id: "q54", text: { en: "I prefer working within structured guidelines.", mn: "Би зохион байгуулалттай удирдамжийн дагуу ажиллахыг илүүд үздэг." }, model: "DISC", trait: "Compliance", type: "scale", scale: 5 },
{ id: "q55", text: { en: "I follow instructions carefully.", mn: "Би зааврыг нарийн дагаж мөрддөг." }, model: "DISC", trait: "Compliance", type: "scale", scale: 5 },
{ id: "q56", text: { en: "I prefer tasks with clear rules.", mn: "Би тодорхой дүрэмтэй ажлыг илүүд үздэг." }, model: "DISC", trait: "Compliance", type: "scale", scale: 5 },

// --- MBTI: Introversion vs Extraversion (57–60) ---
{ id: "q57", text: { en: "I prefer quiet environments to focus.", mn: "Би төвлөрөхийн тулд тайван орчныг илүүд үздэг." }, model: "MBTI", trait: "Introversion/Extraversion", type: "scale", scale: 5 },
{ id: "q58", text: { en: "I enjoy being the center of attention.", mn: "Би анхаарал татах төвд байх дуртай." }, model: "MBTI", trait: "Introversion/Extraversion", type: "scale", scale: 5 },
{ id: "q59", text: { en: "I enjoy reflection and solitude.", mn: "Би эргэцүүлэлт, ганцаараа байх дуртай." }, model: "MBTI", trait: "Introversion/Extraversion", type: "scale", scale: 5 },
{ id: "q60", text: { en: "I feel energized in social events.", mn: "Би нийгмийн арга хэмжээний үеэр эрч хүч авдаг." }, model: "MBTI", trait: "Introversion/Extraversion", type: "scale", scale: 5 },

// --- MBTI: Sensing vs Intuition (61–64) ---
{ id: "q61", text: { en: "I focus on concrete facts rather than abstract ideas.", mn: "Би онолын санаанаас илүү бодит баримтад анхаардаг." }, model: "MBTI", trait: "Sensing/Intuition", type: "scale", scale: 5 },
{ id: "q62", text: { en: "I rely on intuition more than facts.", mn: "Би баримтаас илүү интуицид найдаж ажилладаг." }, model: "MBTI", trait: "Sensing/Intuition", type: "scale", scale: 5 },
{ id: "q63", text: { en: "I notice details others may miss.", mn: "Би бусад хүмүүс анзаардаггүй нарийн зүйлсийг анзаардаг." }, model: "MBTI", trait: "Sensing/Intuition", type: "scale", scale: 5 },
{ id: "q64", text: { en: "I rely on patterns and possibilities.", mn: "Би загвар болон боломжууд дээр тулгуурладаг." }, model: "MBTI", trait: "Sensing/Intuition", type: "scale", scale: 5 },

// --- MBTI: Thinking vs Feeling (65–68) ---
{ id: "q65", text: { en: "I make decisions based on logic.", mn: "Би шийдвэрийг логикт үндэслэн гаргадаг." }, model: "MBTI", trait: "Thinking/Feeling", type: "scale", scale: 5 },
{ id: "q66", text: { en: "I consider people's feelings when deciding.", mn: "Шийдвэр гаргахдаа би хүмүүсийн сэтгэл санааг харгалздаг." }, model: "MBTI", trait: "Thinking/Feeling", type: "scale", scale: 5 },
{ id: "q67", text: { en: "I analyze problems logically.", mn: "Би асуудлыг логикоор шинжлэн боддог." }, model: "MBTI", trait: "Thinking/Feeling", type: "scale", scale: 5 },
{ id: "q68", text: { en: "I value harmony in relationships.", mn: "Би харилцаанд эв нэгдлийг чухалчилдаг." }, model: "MBTI", trait: "Thinking/Feeling", type: "scale", scale: 5 },

// --- MBTI: Judging vs Perceiving (69–72) ---
{ id: "q69", text: { en: "I like to plan everything in advance.", mn: "Би бүх зүйлийг урьдчилан төлөвлөх дуртай." }, model: "MBTI", trait: "Judging/Perceiving", type: "scale", scale: 5 },
{ id: "q70", text: { en: "I like to stay flexible and spontaneous.", mn: "Би уян хатан, санаандгүй байдлыг илүүд үздэг." }, model: "MBTI", trait: "Judging/Perceiving", type: "scale", scale: 5 },
{ id: "q71", text: { en: "I prefer structured schedules.", mn: "Би зохион байгуулалттай цагийн хуваарийг илүүд үздэг." }, model: "MBTI", trait: "Judging/Perceiving", type: "scale", scale: 5 },
{ id: "q72", text: { en: "I enjoy flexibility in plans.", mn: "Би төлөвлөгөөнд уян хатан байдлыг дуртай." }, model: "MBTI", trait: "Judging/Perceiving", type: "scale", scale: 5 },

// --- Adaptive example questions (73–80) ---
{ id: "q73", text: { en: "I feel anxious when I don't plan ahead.", mn: "Би урьдчилан төлөвлөхгүй бол санаа зовдог." }, model: "Big5", trait: "Conscientiousness", type: "scale", scale: 5, dependsOn: { q10: { max: 2 } } },
{ id: "q74", text: { en: "I like leading groups of people.", mn: "Би бүлэг хүмүүсийг удирдах дуртай." }, model: "DISC", trait: "Dominance", type: "scale", scale: 5, dependsOn: { q17: { min: 4 } } },
{ id: "q75", text: { en: "I enjoy learning about psychology.", mn: "Би сэтгэл судлал сурах дуртай." }, model: "Big5", trait: "Openness", type: "scale", scale: 5 },
{ id: "q76", text: { en: "I like solving complex problems.", mn: "Би төвөгтэй асуудлыг шийдэх дуртай." }, model: "MBTI", trait: "Thinking/Feeling", type: "scale", scale: 5 },
{ id: "q77", text: { en: "I get stressed when routines change.", mn: "Би үйл ажиллагааны хуваарь өөрчлөгдөхөд стрессддэг." }, model: "Big5", trait: "Neuroticism", type: "scale", scale: 5, dependsOn: { q49: { max: 2 } } },
{ id: "q78", text: { en: "I enjoy leading teams to success.", mn: "Би багийг амжилтад хүргэх дуртай." }, model: "DISC", trait: "Dominance", type: "scale", scale: 5, dependsOn: { q41: { min: 4 } } },
{ id: "q79", text: { en: "I am interested in human behavior.", mn: "Би хүний зан үйлд сонирхолтой." }, model: "Big5", trait: "Openness", type: "scale", scale: 5 },
{ id: "q80", text: { en: "I like complex problem solving.", mn: "Би төвөгтэй асуудлыг шийдэх дуртай." }, model: "MBTI", trait: "Thinking/Feeling", type: "scale", scale: 5 },

// --- Part 3: Questions 81–120 ---

// Big5 - Openness
{ id: "q81", text: { en: "I enjoy imaginative play or creative hobbies.", mn: "Би төсөөлөлт тоглоом, бүтээлч хобби дуртай." }, model: "Big5", trait: "Openness", type: "scale", scale: 5 },
{ id: "q82", text: { en: "I like to learn about new ideas.", mn: "Би шинэ санаа сурч мэдэх дуртай." }, model: "Big5", trait: "Openness", type: "scale", scale: 5 },

// Big5 - Conscientiousness
{ id: "q83", text: { en: "I plan my work carefully.", mn: "Би ажлаа нарийн төлөвлөдөг." }, model: "Big5", trait: "Conscientiousness", type: "scale", scale: 5 },
{ id: "q84", text: { en: "I follow through with commitments.", mn: "Би амласан зүйлээ дуусгадаг." }, model: "Big5", trait: "Conscientiousness", type: "scale", scale: 5 },

// Big5 - Extraversion
{ id: "q85", text: { en: "I enjoy energetic social activities.", mn: "Би эрч хүчтэй нийгмийн үйл ажиллагаанд дуртай." }, model: "Big5", trait: "Extraversion", type: "scale", scale: 5 },
{ id: "q86", text: { en: "I speak up in group discussions.", mn: "Би бүлгийн хэлэлцүүлэгт санал хэлдэг." }, model: "Big5", trait: "Extraversion", type: "scale", scale: 5 },

// Big5 - Agreeableness
{ id: "q87", text: { en: "I am trusting of others.", mn: "Би бусдад итгэдэг." }, model: "Big5", trait: "Agreeableness", type: "scale", scale: 5 },
{ id: "q88", text: { en: "I cooperate well with others.", mn: "Би бусадтай сайн хамтарч ажилладаг." }, model: "Big5", trait: "Agreeableness", type: "scale", scale: 5 },

// Big5 - Neuroticism
{ id: "q89", text: { en: "I feel anxious in new situations.", mn: "Шинэ нөхцөл байдалд би сэтгэл түгшдэг." }, model: "Big5", trait: "Neuroticism", type: "scale", scale: 5 },
{ id: "q90", text: { en: "I get upset easily.", mn: "Би амархан уурладаг." }, model: "Big5", trait: "Neuroticism", type: "scale", scale: 5 },

// DISC - Dominance
{ id: "q91", text: { en: "I prefer to lead rather than follow.", mn: "Би дагах бус удирдах дуртай." }, model: "DISC", trait: "Dominance", type: "scale", scale: 5 },
{ id: "q92", text: { en: "I take initiative in challenging situations.", mn: "Би сорилттой нөхцөлд санаачлагатай ажилладаг." }, model: "DISC", trait: "Dominance", type: "scale", scale: 5 },

// DISC - Influence
{ id: "q93", text: { en: "I enjoy inspiring others.", mn: "Би бусдыг урамшуулах дуртай." }, model: "DISC", trait: "Influence", type: "scale", scale: 5 },
{ id: "q94", text: { en: "I like being persuasive.", mn: "Би итгүүлэх чадвартай байх дуртай." }, model: "DISC", trait: "Influence", type: "scale", scale: 5 },

// DISC - Steadiness
{ id: "q95", text: { en: "I maintain calm even in pressure.", mn: "Би дарамттай үед ч тайван байдаг." }, model: "DISC", trait: "Steadiness", type: "scale", scale: 5 },
{ id: "q96", text: { en: "I am patient with others.", mn: "Би бусдад тэвчээртэй." }, model: "DISC", trait: "Steadiness", type: "scale", scale: 5 },

// DISC - Compliance
{ id: "q97", text: { en: "I pay attention to details.", mn: "Би нарийн зүйлсийг анхаарч ажигладаг." }, model: "DISC", trait: "Compliance", type: "scale", scale: 5 },
{ id: "q98", text: { en: "I follow rules and regulations closely.", mn: "Би дүрэм журамд нарийн баримталдаг." }, model: "DISC", trait: "Compliance", type: "scale", scale: 5 },

// MBTI - Introversion vs Extraversion
{ id: "q99", text: { en: "I prefer quiet environments to recharge.", mn: "Би эрч хүчээ сэргээхийн тулд нам гүм орчинг илүүд үздэг." }, model: "MBTI", trait: "Introversion/Extraversion", type: "scale", scale: 5 },
{ id: "q100", text: { en: "I enjoy engaging with large groups.", mn: "Би олон хүний бүлэгтэй харилцах дуртай." }, model: "MBTI", trait: "Introversion/Extraversion", type: "scale", scale: 5 },

// MBTI - Sensing vs Intuition
{ id: "q101", text: { en: "I prefer concrete facts over theories.", mn: "Би онолын оронд бодит баримтыг илүүд үздэг." }, model: "MBTI", trait: "Sensing/Intuition", type: "scale", scale: 5 },
{ id: "q102", text: { en: "I rely on patterns and possibilities.", mn: "Би загвар болон боломжууд дээр тулгуурладаг." }, model: "MBTI", trait: "Sensing/Intuition", type: "scale", scale: 5 },

// MBTI - Thinking vs Feeling
{ id: "q103", text: { en: "I make decisions logically.", mn: "Би шийдвэрээ логикоор гаргадаг." }, model: "MBTI", trait: "Thinking/Feeling", type: "scale", scale: 5 },
{ id: "q104", text: { en: "I consider feelings of others in decisions.", mn: "Би шийдвэр гаргахдаа бусдын мэдрэмжийг тооцдог." }, model: "MBTI", trait: "Thinking/Feeling", type: "scale", scale: 5 },

// MBTI - Judging vs Perceiving
{ id: "q105", text: { en: "I like having a schedule.", mn: "Би цагийн хуваарилалттай байх дуртай." }, model: "MBTI", trait: "Judging/Perceiving", type: "scale", scale: 5 },
{ id: "q106", text: { en: "I adapt easily to changing plans.", mn: "Би төлөвлөгөөний өөрчлөлтөд амархан дасан зохицдог." }, model: "MBTI", trait: "Judging/Perceiving", type: "scale", scale: 5 },

// Adaptive & scenario-based questions
{ id: "q107", text: { en: "I change my approach if something isn’t working.", mn: "Хэрэв зүйлс ажиллахгүй бол би арга барилаа өөрчилдөг." }, model: "Big5", trait: "Conscientiousness", type: "scale", scale: 5, dependsOn: { q83: { min: 4 } } },
{ id: "q108", text: { en: "I enjoy mentoring others.", mn: "Би бусдыг зааж чиглүүлэх дуртай." }, model: "DISC", trait: "Influence", type: "scale", scale: 5, dependsOn: { q93: { min: 4 } } },
{ id: "q109", text: { en: "I seek out opportunities to learn.", mn: "Би сурах боломж хайдаг." }, model: "Big5", trait: "Openness", type: "scale", scale: 5 },
{ id: "q110", text: { en: "I thrive in structured settings.", mn: "Би зохион байгуулалттай орчинд сайн ажилладаг." }, model: "MBTI", trait: "Judging/Perceiving", type: "scale", scale: 5 },
{ id: "q111", text: { en: "I like taking on challenging tasks.", mn: "Би сорилттой ажилд дуртай." }, model: "Big5", trait: "Openness", type: "scale", scale: 5 },
{ id: "q112", text: { en: "I enjoy being part of decision-making.", mn: "Би шийдвэр гаргах үйл явцад оролцох дуртай." }, model: "DISC", trait: "Dominance", type: "scale", scale: 5 },
{ id: "q113", text: { en: "I like abstract thinking.", mn: "Би хийсвэр сэтгэлгээ хийх дуртай." }, model: "Big5", trait: "Openness", type: "scale", scale: 5 },
{ id: "q114", text: { en: "I enjoy helping others succeed.", mn: "Би бусдыг амжилтад хүргэхэд туслах дуртай." }, model: "DISC", trait: "Steadiness", type: "scale", scale: 5 },
{ id: "q115", text: { en: "I rely on facts more than intuition.", mn: "Би интуицээс илүү баримт дээр тулгуурладаг." }, model: "MBTI", trait: "Sensing/Intuition", type: "scale", scale: 5 },
{ id: "q116", text: { en: "I feel energized after socializing.", mn: "Би нийгмийн харилцаанаас эрч хүч авдаг." }, model: "MBTI", trait: "Introversion/Extraversion", type: "scale", scale: 5 },
{ id: "q117", text: { en: "I avoid conflicts if possible.", mn: "Хэрэв боломжтой бол би зөрчил үүсгэхгүй." }, model: "Big5", trait: "Agreeableness", type: "scale", scale: 5 },
{ id: "q118", text: { en: "I like to plan ahead.", mn: "Би урьдчилан төлөвлөх дуртай." }, model: "Big5", trait: "Conscientiousness", type: "scale", scale: 5 },
{ id: "q119", text: { en: "I enjoy being challenged intellectually.", mn: "Би оюун ухааны сорилтод дуртай." }, model: "Big5", trait: "Openness", type: "scale", scale: 5 },
{ id: "q120", text: { en: "I adapt my behavior based on feedback.", mn: "Би санал хүсэлт дээр тулгуурлан зан үйлээ өөрчилдөг." }, model: "DISC", trait: "Compliance", type: "scale", scale: 5 },

{ id: "q121", text: { en: "I enjoy reading about unfamiliar topics.", mn: "Би мэддэггүй сэдвээр унших дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },
  { id: "q122", text: { en: "I like experimenting with new ideas.", mn: "Би шинэ санаануудыг турших дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },
  { id: "q123", text: { en: "I enjoy visiting museums or galleries.", mn: "Би музей, үзэсгэлэн үзэх дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },
  { id: "q124", text: { en: "I am interested in abstract concepts.", mn: "Би хийсвэр ойлголт сонирхдог." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },

  // Big5 - Conscientiousness
  { id: "q125", text: { en: "I keep track of my responsibilities.", mn: "Би өөрийн үүрэг хариуцлагыг хянадаг." }, model: "Big5", type: "scale", scale: 5, trait: "Conscientiousness" },
  { id: "q126", text: { en: "I prefer planning over improvisation.", mn: "Би төлөвлөхийг санаандгүй байхаас илүүд үздэг." }, model: "Big5", type: "scale", scale: 5, trait: "Conscientiousness" },
  { id: "q127", text: { en: "I pay attention to deadlines.", mn: "Би хугацаанд анхаардаг." }, model: "Big5", type: "scale", scale: 5, trait: "Conscientiousness" },
  { id: "q128", text: { en: "I make lists to stay organized.", mn: "Би эмх цэгцтэй байхдаа жагсаалт гаргадаг." }, model: "Big5", type: "scale", scale: 5, trait: "Conscientiousness" },

  // Big5 - Extraversion
  { id: "q129", text: { en: "I enjoy interacting with energetic people.", mn: "Би эрч хүчтэй хүмүүстэй харилцах дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Extraversion" },
  { id: "q130", text: { en: "I like to initiate conversations.", mn: "Би яриаг эхлүүлэх дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Extraversion" },
  { id: "q131", text: { en: "I feel comfortable in social gatherings.", mn: "Би нийгмийн арга хэмжээнд тав тухтай байдаг." }, model: "Big5", type: "scale", scale: 5, trait: "Extraversion" },
  { id: "q132", text: { en: "I enjoy being active and energetic.", mn: "Би идэвхтэй, эрч хүчтэй байх дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Extraversion" },

  // Big5 - Agreeableness
  { id: "q133", text: { en: "I try to see the good in people.", mn: "Би хүмүүсийн сайн талыг харахыг хичээдэг." }, model: "Big5", type: "scale", scale: 5, trait: "Agreeableness" },
  { id: "q134", text: { en: "I am cooperative in team activities.", mn: "Би багийн үйл ажиллагаанд хамтран ажилладаг." }, model: "Big5", type: "scale", scale: 5, trait: "Agreeableness" },
  { id: "q135", text: { en: "I avoid hurting others intentionally.", mn: "Би бусдыг санаатайгаар гомдоохгүй." }, model: "Big5", type: "scale", scale: 5, trait: "Agreeableness" },
  { id: "q136", text: { en: "I enjoy helping others without expecting rewards.", mn: "Би бусдад туслах дуртай, шагнал горьддоггүй." }, model: "Big5", type: "scale", scale: 5, trait: "Agreeableness" },

  // Big5 - Neuroticism
  { id: "q137", text: { en: "I get nervous before important events.", mn: "Би чухал арга хэмжээний өмнө сандардаг." }, model: "Big5", type: "scale", scale: 5, trait: "Neuroticism" },
  { id: "q138", text: { en: "I feel emotions intensely.", mn: "Би сэтгэл хөдлөлөө хүчтэй мэдэрдэг." }, model: "Big5", type: "scale", scale: 5, trait: "Neuroticism" },
  { id: "q139", text: { en: "I worry about my past mistakes.", mn: "Би өнгөрсөн алдаандаа санаа зовдог." }, model: "Big5", type: "scale", scale: 5, trait: "Neuroticism" },
  { id: "q140", text: { en: "I am sensitive to stress.", mn: "Би стрессд мэдрэмтгий." }, model: "Big5", type: "scale", scale: 5, trait: "Neuroticism" },

  // DISC - Dominance
  { id: "q141", text: { en: "I take charge when necessary.", mn: "Би шаардлагатай үед удирддаг." }, model: "DISC", type: "scale", scale: 5, trait: "Dominance" },
  { id: "q142", text: { en: "I like challenging situations.", mn: "Би сорилттой нөхцөлд дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Dominance" },

  // DISC - Influence
  { id: "q143", text: { en: "I enjoy motivating people.", mn: "Би хүмүүсийг урамшуулах дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Influence" },
  { id: "q144", text: { en: "I like social recognition.", mn: "Би нийгмийн хүлээн зөвшөөрөлд дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Influence" },

  // DISC - Steadiness
  { id: "q145", text: { en: "I prefer consistency in my work.", mn: "Би ажлынхаа тогтмол байдалд дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Steadiness" },
  { id: "q146", text: { en: "I help colleagues calmly.", mn: "Би хамтран ажиллагсаддаа тайван тусалдаг." }, model: "DISC", type: "scale", scale: 5, trait: "Steadiness" },

  // DISC - Compliance
  { id: "q147", text: { en: "I follow detailed instructions.", mn: "Би нарийн зааврыг дагаж мөрддөг." }, model: "DISC", type: "scale", scale: 5, trait: "Compliance" },
  { id: "q148", text: { en: "I prefer structured tasks.", mn: "Би зохион байгуулалттай ажлыг илүүд үздэг." }, model: "DISC", type: "scale", scale: 5, trait: "Compliance" },

  // MBTI - Introversion vs Extraversion
  { id: "q149", text: { en: "I enjoy solitary activities.", mn: "Би ганцаарчилсан үйл ажиллагаанд дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Introversion vs Extraversion" },
  { id: "q150", text: { en: "I like participating in social events.", mn: "Би нийгмийн арга хэмжээнд оролцох дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Introversion vs Extraversion" },

  // MBTI - Sensing vs Intuition
  { id: "q151", text: { en: "I rely on facts in decision-making.", mn: "Би шийдвэр гаргахдаа баримтанд найдадаг." }, model: "MBTI", type: "scale", scale: 5, trait: "Sensing vs Intuition" },
  { id: "q152", text: { en: "I enjoy imagining possibilities.", mn: "Би боломжуудыг төсөөлөх дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Sensing vs Intuition" },

  // MBTI - Thinking vs Feeling
  { id: "q153", text: { en: "I prioritize logic over feelings.", mn: "Би мэдрэмжээс илүү логикт ач холбогдол өгдөг." }, model: "MBTI", type: "scale", scale: 5, trait: "Thinking vs Feeling" },
  { id: "q154", text: { en: "I consider others' emotions.", mn: "Би бусдын сэтгэл хөдлөлд анхаардаг." }, model: "MBTI", type: "scale", scale: 5, trait: "Thinking vs Feeling" },

  // MBTI - Judging vs Perceiving
  { id: "q155", text: { en: "I like to follow a plan.", mn: "Би төлөвлөгөөг дагах дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Judging vs Perceiving" },
  { id: "q156", text: { en: "I adapt plans when necessary.", mn: "Би шаардлагатай үед төлөвлөгөөг өөрчилдөг." }, model: "MBTI", type: "scale", scale: 5, trait: "Judging vs Perceiving" },

  // Adaptive examples
  { id: "q157", text: { en: "I seek challenges to improve myself.", mn: "Би өөрийгөө сайжруулахын тулд сорилт хайдаг." }, model: "Big5", type: "scale", scale: 5, trait: "Openness", dependsOn: { q111: { min: 4 } } },
  { id: "q158", text: { en: "I enjoy teaching others.", mn: "Би бусдад зааж зааварлах дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Influence", dependsOn: { q108: { min: 4 } } },
  { id: "q159", text: { en: "I like learning new skills.", mn: "Би шинэ ур чадвар сурах дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },
  { id: "q160", text: { en: "I like analyzing complex problems.", mn: "Би төвөгтэй асуудлыг шинжлэх дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Sensing vs Intuition" },
  // Big5 - Openness
  { id: "q161", text: { en: "I enjoy creative activities like painting or writing.", mn: "Би зураг зурах, бичих зэрэг бүтээлч үйл ажиллагаанд дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },
  { id: "q162", text: { en: "I like trying new foods and cuisines.", mn: "Би шинэ хоол, амттай зүйлсийг турших дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },
  { id: "q163", text: { en: "I enjoy thinking about abstract ideas.", mn: "Би хийсвэр санааг бодох дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },
  { id: "q164", text: { en: "I like exploring unfamiliar places.", mn: "Би танихгүй газруудыг судлах дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },

  // Big5 - Conscientiousness
  { id: "q165", text: { en: "I plan my day carefully.", mn: "Би өдрөө нарийн төлөвлөдөг." }, model: "Big5", type: "scale", scale: 5, trait: "Conscientiousness" },
  { id: "q166", text: { en: "I follow through on commitments.", mn: "Би амласан зүйлсээ биелүүлдэг." }, model: "Big5", type: "scale", scale: 5, trait: "Conscientiousness" },
  { id: "q167", text: { en: "I like to be punctual.", mn: "Би цагтаа ирэх дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Conscientiousness" },
  { id: "q168", text: { en: "I organize my work efficiently.", mn: "Би ажлаа үр бүтээлтэй зохион байгуулдаг." }, model: "Big5", type: "scale", scale: 5, trait: "Conscientiousness" },

  // Big5 - Extraversion
  { id: "q169", text: { en: "I enjoy meeting new people.", mn: "Би шинэ хүмүүстэй уулзах дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Extraversion" },
  { id: "q170", text: { en: "I feel energized in social settings.", mn: "Би нийгмийн орчинд эрч хүчтэй болдог." }, model: "Big5", type: "scale", scale: 5, trait: "Extraversion" },
  { id: "q171", text: { en: "I like being the center of attention.", mn: "Би анхаарал төвд байх дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Extraversion" },
  { id: "q172", text: { en: "I enjoy talking to strangers.", mn: "Би танихгүй хүмүүстэй ярилцах дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Extraversion" },

  // Big5 - Agreeableness
  { id: "q173", text: { en: "I sympathize with others’ feelings.", mn: "Би бусдын сэтгэлд өрөвдөлтэй ханддаг." }, model: "Big5", type: "scale", scale: 5, trait: "Agreeableness" },
  { id: "q174", text: { en: "I enjoy helping those in need.", mn: "Би тусламж хэрэгтэй хүмүүст туслах дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Agreeableness" },
  { id: "q175", text: { en: "I try to avoid conflict.", mn: "Би зөрчил маргаанаас зайлсхийдэг." }, model: "Big5", type: "scale", scale: 5, trait: "Agreeableness" },
  { id: "q176", text: { en: "I am patient with others.", mn: "Би бусдад тэвчээртэй ханддаг." }, model: "Big5", type: "scale", scale: 5, trait: "Agreeableness" },

  // Big5 - Neuroticism
  { id: "q177", text: { en: "I get stressed easily.", mn: "Би амархан стрессддэг." }, model: "Big5", type: "scale", scale: 5, trait: "Neuroticism" },
  { id: "q178", text: { en: "I worry about unexpected events.", mn: "Би урьдчилан таамаглах боломжгүй зүйлсийн талаар санаа зовдог." }, model: "Big5", type: "scale", scale: 5, trait: "Neuroticism" },
  { id: "q179", text: { en: "I often feel anxious.", mn: "Би ихэвчлэн түгшүүртэй байдаг." }, model: "Big5", type: "scale", scale: 5, trait: "Neuroticism" },
  { id: "q180", text: { en: "I get upset over small things.", mn: "Би жижиг зүйлсийн төлөө бухимддаг." }, model: "Big5", type: "scale", scale: 5, trait: "Neuroticism" },

  // DISC - Dominance
  { id: "q181", text: { en: "I like taking responsibility.", mn: "Би хариуцлага хүлээх дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Dominance" },
  { id: "q182", text: { en: "I am assertive in achieving goals.", mn: "Би зорилгодоо хүрэхэд өөртөө итгэлтэй байдаг." }, model: "DISC", type: "scale", scale: 5, trait: "Dominance" },

  // DISC - Influence
  { id: "q183", text: { en: "I enjoy persuading others.", mn: "Би бусдыг ятгах дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Influence" },
  { id: "q184", text: { en: "I like being enthusiastic.", mn: "Би урам зоригтой байх дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Influence" },

  // DISC - Steadiness
  { id: "q185", text: { en: "I prefer stable environments.", mn: "Би тогтвортой орчинд дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Steadiness" },
  { id: "q186", text: { en: "I support others consistently.", mn: "Би бусдыг тогтвортой дэмждэг." }, model: "DISC", type: "scale", scale: 5, trait: "Steadiness" },

  // DISC - Compliance
  { id: "q187", text: { en: "I follow rules carefully.", mn: "Би дүрэм журамд анхааралтай ханддаг." }, model: "DISC", type: "scale", scale: 5, trait: "Compliance" },
  { id: "q188", text: { en: "I prefer accurate and precise work.", mn: "Би нарийн, үнэн зөв ажилд дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Compliance" },

  // MBTI - Introversion vs Extraversion
  { id: "q189", text: { en: "I like reflecting on my thoughts.", mn: "Би өөрийн бодлоо эргэцүүлэн бодох дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Introversion vs Extraversion" },
  { id: "q190", text: { en: "I enjoy group activities.", mn: "Би бүлгийн үйл ажиллагаанд дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Introversion vs Extraversion" },

  // MBTI - Sensing vs Intuition
  { id: "q191", text: { en: "I notice details others might miss.", mn: "Би бусад хүмүүс анзаарахгүй жижиг зүйлсийг анзаардаг." }, model: "MBTI", type: "scale", scale: 5, trait: "Sensing vs Intuition" },
  { id: "q192", text: { en: "I trust my intuition.", mn: "Би өөрийн интуицэд найдадаг." }, model: "MBTI", type: "scale", scale: 5, trait: "Sensing vs Intuition" },

  // MBTI - Thinking vs Feeling
  { id: "q193", text: { en: "I make decisions based on logic.", mn: "Би шийдвэрийг логикоор гаргадаг." }, model: "MBTI", type: "scale", scale: 5, trait: "Thinking vs Feeling" },
  { id: "q194", text: { en: "I consider the impact on others.", mn: "Би бусдад үзүүлэх нөлөөг авч үздэг." }, model: "MBTI", type: "scale", scale: 5, trait: "Thinking vs Feeling" },

  // MBTI - Judging vs Perceiving
  { id: "q195", text: { en: "I prefer structured plans.", mn: "Би зохион байгуулалттай төлөвлөгөөг илүүд үздэг." }, model: "MBTI", type: "scale", scale: 5, trait: "Judging vs Perceiving" },
  { id: "q196", text: { en: "I adapt easily to changes.", mn: "Би өөрчлөлтөд амархан дасан зохицдог." }, model: "MBTI", type: "scale", scale: 5, trait: "Judging vs Perceiving" },

  // Adaptive / additional examples
  { id: "q197", text: { en: "I enjoy solving puzzles.", mn: "Би таавар, шийдэл олох дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },
  { id: "q198", text: { en: "I like leading projects.", mn: "Би төслүүдийг удирдах дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Dominance" },
  { id: "q199", text: { en: "I prefer working behind the scenes.", mn: "Би нууцлаг орчинд ажиллах дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Steadiness" },
  { id: "q200", text: { en: "I like analyzing data carefully.", mn: "Би мэдээллийг нарийн шинжлэх дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Sensing vs Intuition" },

  { id: "q201", text: { en: "I enjoy learning about different cultures.", mn: "Би өөр өөр соёлын талаар сурах дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },
  { id: "q202", text: { en: "I like exploring new ideas.", mn: "Би шинэ санааг судлах дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },
  { id: "q203", text: { en: "I am interested in art and music.", mn: "Би урлаг, хөгжимд сонирхолтой." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },
  { id: "q204", text: { en: "I enjoy imaginative stories.", mn: "Би төсөөллийн түүхэнд дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },

  // Big5 - Conscientiousness
  { id: "q205", text: { en: "I pay attention to details.", mn: "Би жижиг зүйлсэд анхаардаг." }, model: "Big5", type: "scale", scale: 5, trait: "Conscientiousness" },
  { id: "q206", text: { en: "I keep my promises.", mn: "Би амласан зүйлсээ биелүүлдэг." }, model: "Big5", type: "scale", scale: 5, trait: "Conscientiousness" },
  { id: "q207", text: { en: "I plan ahead for the future.", mn: "Би ирээдүйд төлөвлөдөг." }, model: "Big5", type: "scale", scale: 5, trait: "Conscientiousness" },
  { id: "q208", text: { en: "I am disciplined in my work.", mn: "Би ажилдаа сахилга баттай байдаг." }, model: "Big5", type: "scale", scale: 5, trait: "Conscientiousness" },

  // Big5 - Extraversion
  { id: "q209", text: { en: "I enjoy being in social gatherings.", mn: "Би нийгмийн цуглаанд дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Extraversion" },
  { id: "q210", text: { en: "I like meeting new people.", mn: "Би шинэ хүмүүстэй уулзах дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Extraversion" },
  { id: "q211", text: { en: "I am talkative.", mn: "Би яриа хөөрөөтэй." }, model: "Big5", type: "scale", scale: 5, trait: "Extraversion" },
  { id: "q212", text: { en: "I enjoy being active and energetic.", mn: "Би идэвхтэй, эрч хүчтэй байх дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Extraversion" },

  // Big5 - Agreeableness
  { id: "q213", text: { en: "I am considerate of others.", mn: "Би бусдыг боддог." }, model: "Big5", type: "scale", scale: 5, trait: "Agreeableness" },
  { id: "q214", text: { en: "I trust people easily.", mn: "Би хүмүүст амархан итгэдэг." }, model: "Big5", type: "scale", scale: 5, trait: "Agreeableness" },
  { id: "q215", text: { en: "I try to help others.", mn: "Би бусдад туслахыг хичээдэг." }, model: "Big5", type: "scale", scale: 5, trait: "Agreeableness" },
  { id: "q216", text: { en: "I am kind and warm-hearted.", mn: "Би сайхан сэтгэлтэй, дулаан." }, model: "Big5", type: "scale", scale: 5, trait: "Agreeableness" },

  // Big5 - Neuroticism
  { id: "q217", text: { en: "I feel nervous easily.", mn: "Би амархан сандардаг." }, model: "Big5", type: "scale", scale: 5, trait: "Neuroticism" },
  { id: "q218", text: { en: "I get upset easily.", mn: "Би амархан бухимддаг." }, model: "Big5", type: "scale", scale: 5, trait: "Neuroticism" },
  { id: "q219", text: { en: "I worry about things.", mn: "Би зүйлсийн талаар санаа зовдог." }, model: "Big5", type: "scale", scale: 5, trait: "Neuroticism" },
  { id: "q220", text: { en: "I often feel tense.", mn: "Би ихэвчлэн түгшүүртэй байдаг." }, model: "Big5", type: "scale", scale: 5, trait: "Neuroticism" },

  // DISC - Dominance
  { id: "q221", text: { en: "I take charge in situations.", mn: "Би нөхцөл байдалд удирдлага авч явдаг." }, model: "DISC", type: "scale", scale: 5, trait: "Dominance" },
  { id: "q222", text: { en: "I am decisive.", mn: "Би шийдвэр гаргах чадвартай." }, model: "DISC", type: "scale", scale: 5, trait: "Dominance" },

  // DISC - Influence
  { id: "q223", text: { en: "I enjoy motivating others.", mn: "Би бусдыг урамшуулах дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Influence" },
  { id: "q224", text: { en: "I am optimistic.", mn: "Би өөдрөг үзэлтэй." }, model: "DISC", type: "scale", scale: 5, trait: "Influence" },

  // DISC - Steadiness
  { id: "q225", text: { en: "I prefer consistency in life.", mn: "Би амьдралд тогтвортой байдлыг илүүд үздэг." }, model: "DISC", type: "scale", scale: 5, trait: "Steadiness" },
  { id: "q226", text: { en: "I am a good listener.", mn: "Би сайн сонсогч." }, model: "DISC", type: "scale", scale: 5, trait: "Steadiness" },

  // DISC - Compliance
  { id: "q227", text: { en: "I am careful about rules.", mn: "Би дүрэм журамд анхааралтай ханддаг." }, model: "DISC", type: "scale", scale: 5, trait: "Compliance" },
  { id: "q228", text: { en: "I like precision in work.", mn: "Би ажилдаа нарийн шалгадаг." }, model: "DISC", type: "scale", scale: 5, trait: "Compliance" },

  // MBTI - Introversion vs Extraversion
  { id: "q229", text: { en: "I enjoy solitude.", mn: "Би ганцаар байх дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Introversion vs Extraversion" },
  { id: "q230", text: { en: "I like attending parties.", mn: "Би үдэшлэгт явах дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Introversion vs Extraversion" },

  // MBTI - Sensing vs Intuition
  { id: "q231", text: { en: "I rely on facts.", mn: "Би баримтад найдадаг." }, model: "MBTI", type: "scale", scale: 5, trait: "Sensing vs Intuition" },
  { id: "q232", text: { en: "I enjoy imagining possibilities.", mn: "Би боломжуудыг төсөөлөх дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Sensing vs Intuition" },

  // MBTI - Thinking vs Feeling
  { id: "q233", text: { en: "I prioritize logic.", mn: "Би логикыг эрхэмлэдэг." }, model: "MBTI", type: "scale", scale: 5, trait: "Thinking vs Feeling" },
  { id: "q234", text: { en: "I prioritize emotions.", mn: "Би сэтгэл хөдлөлийг эрхэмлэдэг." }, model: "MBTI", type: "scale", scale: 5, trait: "Thinking vs Feeling" },

  // MBTI - Judging vs Perceiving
  { id: "q235", text: { en: "I like to plan in advance.", mn: "Би урьдчилан төлөвлөх дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Judging vs Perceiving" },
  { id: "q236", text: { en: "I adapt easily to new situations.", mn: "Би шинэ нөхцөл байдалд амархан дасан зохицдог." }, model: "MBTI", type: "scale", scale: 5, trait: "Judging vs Perceiving" },

  // Adaptive / additional examples
  { id: "q237", text: { en: "I enjoy creative problem solving.", mn: "Би бүтээлч шийдэл олох дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },
  { id: "q238", text: { en: "I like influencing group decisions.", mn: "Би бүлгийн шийдвэрт нөлөөлөх дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Influence" },
  { id: "q239", text: { en: "I prefer calm and steady environments.", mn: "Би тайван, тогтвортой орчинд дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Steadiness" },
  { id: "q240", text: { en: "I enjoy analyzing patterns.", mn: "Би загваруудыг шинжлэх дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Sensing vs Intuition" },
{ id: "q241", text: { en: "I like trying new foods.", mn: "Би шинэ хоол туршиж үзэх дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },
  { id: "q242", text: { en: "I enjoy creative hobbies.", mn: "Би бүтээлч сонирхолтой хобби дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },

  // Big5 - Conscientiousness
  { id: "q243", text: { en: "I finish tasks on time.", mn: "Би ажлыг цаг хугацаанд нь дуусгадаг." }, model: "Big5", type: "scale", scale: 5, trait: "Conscientiousness" },
  { id: "q244", text: { en: "I organize my workspace neatly.", mn: "Би ажлын орчноо эмх цэгцтэй байлгадаг." }, model: "Big5", type: "scale", scale: 5, trait: "Conscientiousness" },

  // Big5 - Extraversion
  { id: "q245", text: { en: "I feel energized around people.", mn: "Би хүмүүстэй байхдаа эрч хүчтэй болдог." }, model: "Big5", type: "scale", scale: 5, trait: "Extraversion" },
  { id: "q246", text: { en: "I enjoy being the center of attention.", mn: "Би анхаарлын төвд байх дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Extraversion" },

  // Big5 - Agreeableness
  { id: "q247", text: { en: "I am sympathetic to others' needs.", mn: "Би бусдын хэрэгцээнд өрөвдөж ханддаг." }, model: "Big5", type: "scale", scale: 5, trait: "Agreeableness" },
  { id: "q248", text: { en: "I avoid conflicts when possible.", mn: "Би боломжтой бол зөрчил үүсгэхгүй байхыг хичээдэг." }, model: "Big5", type: "scale", scale: 5, trait: "Agreeableness" },

  // Big5 - Neuroticism
  { id: "q249", text: { en: "I feel anxious in new situations.", mn: "Би шинэ нөхцөл байдалд түгшдэг." }, model: "Big5", type: "scale", scale: 5, trait: "Neuroticism" },
  { id: "q250", text: { en: "I am easily irritated.", mn: "Би амархан ууртай болдог." }, model: "Big5", type: "scale", scale: 5, trait: "Neuroticism" },

  // DISC - Dominance
  { id: "q251", text: { en: "I enjoy taking leadership roles.", mn: "Би удирдах үүрэг гүйцэтгэх дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Dominance" },
  { id: "q252", text: { en: "I am confident in making decisions.", mn: "Би шийдвэр гаргахад итгэлтэй." }, model: "DISC", type: "scale", scale: 5, trait: "Dominance" },

  // DISC - Influence
  { id: "q253", text: { en: "I am persuasive with others.", mn: "Би бусдыг ятгах чадвартай." }, model: "DISC", type: "scale", scale: 5, trait: "Influence" },
  { id: "q254", text: { en: "I enjoy inspiring people.", mn: "Би хүмүүсийг урамшуулах дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Influence" },

  // DISC - Steadiness
  { id: "q255", text: { en: "I am patient with others.", mn: "Би бусдад тэвчээртэй." }, model: "DISC", type: "scale", scale: 5, trait: "Steadiness" },
  { id: "q256", text: { en: "I am reliable and dependable.", mn: "Би найдвартай, итгэлтэй." }, model: "DISC", type: "scale", scale: 5, trait: "Steadiness" },

  // DISC - Compliance
  { id: "q257", text: { en: "I follow rules closely.", mn: "Би дүрэм журамд нарийн анхаардаг." }, model: "DISC", type: "scale", scale: 5, trait: "Compliance" },
  { id: "q258", text: { en: "I check my work for accuracy.", mn: "Би ажлаа нарийвчлан шалгадаг." }, model: "DISC", type: "scale", scale: 5, trait: "Compliance" },

  // MBTI - Introversion vs Extraversion
  { id: "q259", text: { en: "I prefer quiet activities.", mn: "Би нам гүм үйл ажиллагаанд дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Introversion vs Extraversion" },
  { id: "q260", text: { en: "I like socializing with many people.", mn: "Би олон хүмүүстэй нийгмээр харьцах дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Introversion vs Extraversion" },

  // MBTI - Sensing vs Intuition
  { id: "q261", text: { en: "I focus on present realities.", mn: "Би одоогийн бодит байдалд анхаардаг." }, model: "MBTI", type: "scale", scale: 5, trait: "Sensing vs Intuition" },
  { id: "q262", text: { en: "I enjoy envisioning future possibilities.", mn: "Би ирээдүйн боломжуудыг төсөөлөх дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Sensing vs Intuition" },

  // MBTI - Thinking vs Feeling
  { id: "q263", text: { en: "I make decisions logically.", mn: "Би шийдвэрээ логикоор гаргадаг." }, model: "MBTI", type: "scale", scale: 5, trait: "Thinking vs Feeling" },
  { id: "q264", text: { en: "I consider others' feelings when deciding.", mn: "Би шийдвэр гаргахдаа бусдын сэтгэл хөдлөлийг боддог." }, model: "MBTI", type: "scale", scale: 5, trait: "Thinking vs Feeling" },

  // MBTI - Judging vs Perceiving
  { id: "q265", text: { en: "I prefer structured plans.", mn: "Би бүтэцтэй төлөвлөгөөг илүүд үздэг." }, model: "MBTI", type: "scale", scale: 5, trait: "Judging vs Perceiving" },
  { id: "q266", text: { en: "I like flexible approaches.", mn: "Би уян хатан арга барилд дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Judging vs Perceiving" },

  // Adaptive / additional examples
  { id: "q267", text: { en: "I enjoy experimenting with ideas.", mn: "Би санааг туршиж үзэх дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },
  { id: "q268", text: { en: "I like influencing group outcomes.", mn: "Би бүлгийн үр дүнд нөлөөлөх дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Influence" },
  { id: "q269", text: { en: "I prefer calm and predictable situations.", mn: "Би тайван, урьдчилж таамаглах боломжтой нөхцөлд дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Steadiness" },
  { id: "q270", text: { en: "I enjoy analyzing details.", mn: "Би нарийн зүйлсийг шинжлэх дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Sensing vs Intuition" },
  { id: "q271", text: { en: "I like solving problems independently.", mn: "Би асуудлыг бие даан шийдэх дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Conscientiousness" },
  { id: "q272", text: { en: "I enjoy collaborating with others.", mn: "Би бусадтай хамтран ажиллах дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Agreeableness" },
  { id: "q273", text: { en: "I handle stress well.", mn: "Би стрессийг сайн зохицуулдаг." }, model: "Big5", type: "scale", scale: 5, trait: "Neuroticism" },
  { id: "q274", text: { en: "I am assertive when needed.", mn: "Би шаардлагатай үед өөртөө итгэлтэй байдаг." }, model: "DISC", type: "scale", scale: 5, trait: "Dominance" },
  { id: "q275", text: { en: "I enjoy motivating and encouraging others.", mn: "Би бусдыг урамшуулах, дэмжих дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Influence" },
  { id: "q276", text: { en: "I like steady routines.", mn: "Би тогтвортой үйл ажиллагааг дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Steadiness" },
  { id: "q277", text: { en: "I am precise in following rules.", mn: "Би дүрмийг нарийн баримталдаг." }, model: "DISC", type: "scale", scale: 5, trait: "Compliance" },
  { id: "q278", text: { en: "I enjoy reflecting on ideas.", mn: "Би санаагаа эргэцүүлэх дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },
  { id: "q279", text: { en: "I am sociable and outgoing.", mn: "Би нийгмийн харилцаанд идэвхтэй." }, model: "Big5", type: "scale", scale: 5, trait: "Extraversion" },
  { id: "q280", text: { en: "I empathize with people's feelings.", mn: "Би хүмүүсийн сэтгэл хөдлөлийг ойлгодог." }, model: "Big5", type: "scale", scale: 5, trait: "Agreeableness" },
{ id: "q281", text: { en: "I enjoy exploring new ideas.", mn: "Би шинэ санааг судлах дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },
  { id: "q282", text: { en: "I like trying different hobbies.", mn: "Би янз бүрийн хобби туршиж үзэх дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },

  // Big5 - Conscientiousness
  { id: "q283", text: { en: "I am thorough in my work.", mn: "Би ажлаа нарийн гүйцэтгэдэг." }, model: "Big5", type: "scale", scale: 5, trait: "Conscientiousness" },
  { id: "q284", text: { en: "I plan ahead for tasks.", mn: "Би ажлын төлөвлөгөөг урьдчилан гаргадаг." }, model: "Big5", type: "scale", scale: 5, trait: "Conscientiousness" },

  // Big5 - Extraversion
  { id: "q285", text: { en: "I enjoy social gatherings.", mn: "Би нийгмийн цуглаанд дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Extraversion" },
  { id: "q286", text: { en: "I like meeting new people.", mn: "Би шинэ хүмүүстэй уулзах дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Extraversion" },

  // Big5 - Agreeableness
  { id: "q287", text: { en: "I help others when I can.", mn: "Би боломжтой бол бусдыг тусалдаг." }, model: "Big5", type: "scale", scale: 5, trait: "Agreeableness" },
  { id: "q288", text: { en: "I trust people easily.", mn: "Би хүмүүсийг амархан итгэдэг." }, model: "Big5", type: "scale", scale: 5, trait: "Agreeableness" },

  // Big5 - Neuroticism
  { id: "q289", text: { en: "I worry about things.", mn: "Би зүйлсийн талаар санаа зовдог." }, model: "Big5", type: "scale", scale: 5, trait: "Neuroticism" },
  { id: "q290", text: { en: "I get stressed under pressure.", mn: "Би дарамтанд орсон үед стрессддэг." }, model: "Big5", type: "scale", scale: 5, trait: "Neuroticism" },

  // DISC - Dominance
  { id: "q291", text: { en: "I am assertive in discussions.", mn: "Би хэлэлцүүлэгт өөрийн байр сууриа баттай илэрхийлдэг." }, model: "DISC", type: "scale", scale: 5, trait: "Dominance" },
  { id: "q292", text: { en: "I like taking initiative.", mn: "Би санаачлага гаргах дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Dominance" },

  // DISC - Influence
  { id: "q293", text: { en: "I enjoy persuading others.", mn: "Би бусдыг ятгах дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Influence" },
  { id: "q294", text: { en: "I am outgoing in social situations.", mn: "Би нийгмийн нөхцөлд нээлттэй." }, model: "DISC", type: "scale", scale: 5, trait: "Influence" },

  // DISC - Steadiness
  { id: "q295", text: { en: "I like predictable routines.", mn: "Би урьдчилан таамаглах боломжтой үйл ажиллагаанд дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Steadiness" },
  { id: "q296", text: { en: "I am patient with changes.", mn: "Би өөрчлөлтөд тэвчээртэй." }, model: "DISC", type: "scale", scale: 5, trait: "Steadiness" },

  // DISC - Compliance
  { id: "q297", text: { en: "I pay attention to details.", mn: "Би нарийвчилсан зүйлд анхаардаг." }, model: "DISC", type: "scale", scale: 5, trait: "Compliance" },
  { id: "q298", text: { en: "I follow instructions carefully.", mn: "Би зааврыг нарийн дагадаг." }, model: "DISC", type: "scale", scale: 5, trait: "Compliance" },

  // MBTI - Introversion vs Extraversion
  { id: "q299", text: { en: "I enjoy spending time alone.", mn: "Би ганцаараа цагийг өнгөрөөх дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Introversion vs Extraversion" },
  { id: "q300", text: { en: "I like active social events.", mn: "Би идэвхтэй нийгмийн үйл ажиллагаанд дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Introversion vs Extraversion" },

  // MBTI - Sensing vs Intuition
  { id: "q301", text: { en: "I focus on facts rather than ideas.", mn: "Би санаанаас илүү баримтад анхаардаг." }, model: "MBTI", type: "scale", scale: 5, trait: "Sensing vs Intuition" },
  { id: "q302", text: { en: "I enjoy imagining possibilities.", mn: "Би боломжуудыг төсөөлөх дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Sensing vs Intuition" },

  // MBTI - Thinking vs Feeling
  { id: "q303", text: { en: "I make decisions with logic.", mn: "Би шийдвэрээ логикоор гаргадаг." }, model: "MBTI", type: "scale", scale: 5, trait: "Thinking vs Feeling" },
  { id: "q304", text: { en: "I consider emotions when deciding.", mn: "Би шийдвэр гаргахдаа сэтгэл хөдлөлийг харгалздаг." }, model: "MBTI", type: "scale", scale: 5, trait: "Thinking vs Feeling" },

  // MBTI - Judging vs Perceiving
  { id: "q305", text: { en: "I like having clear plans.", mn: "Би тодорхой төлөвлөгөөтэй байх дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Judging vs Perceiving" },
  { id: "q306", text: { en: "I prefer flexible approaches.", mn: "Би уян хатан арга барилд дуртай." }, model: "MBTI", type: "scale", scale: 5, trait: "Judging vs Perceiving" },

  // Adaptive / additional examples
  { id: "q307", text: { en: "I enjoy learning new skills.", mn: "Би шинэ ур чадвар сурах дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },
  { id: "q308", text: { en: "I like completing tasks thoroughly.", mn: "Би ажлыг бүрэн гүйцэтгэх дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Conscientiousness" },
  { id: "q309", text: { en: "I enjoy talking with groups.", mn: "Би бүлгийн хүмүүстэй ярилцах дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Extraversion" },
  { id: "q310", text: { en: "I am cooperative with others.", mn: "Би бусадтай хамтран ажиллах дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Agreeableness" },
  { id: "q311", text: { en: "I manage stress well.", mn: "Би стрессийг сайн зохицуулдаг." }, model: "Big5", type: "scale", scale: 5, trait: "Neuroticism" },
  { id: "q312", text: { en: "I take charge when needed.", mn: "Шаардлагатай үед би удирддаг." }, model: "DISC", type: "scale", scale: 5, trait: "Dominance" },
  { id: "q313", text: { en: "I motivate others easily.", mn: "Би бусдыг амархан урамшуулдаг." }, model: "DISC", type: "scale", scale: 5, trait: "Influence" },
  { id: "q314", text: { en: "I like stable and calm settings.", mn: "Би тогтвортой, тайван орчинд дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Steadiness" },
  { id: "q315", text: { en: "I am careful with rules.", mn: "Би дүрэм журамд анхаардаг." }, model: "DISC", type: "scale", scale: 5, trait: "Compliance" },
  { id: "q316", text: { en: "I enjoy thinking creatively.", mn: "Би бүтээлчээр бодох дуртай." }, model: "Big5", type: "scale", scale: 5, trait: "Openness" },
  { id: "q317", text: { en: "I am outgoing in groups.", mn: "Би бүлгийн дунд идэвхтэй." }, model: "Big5", type: "scale", scale: 5, trait: "Extraversion" },
  { id: "q318", text: { en: "I empathize with others.", mn: "Би бусдын сэтгэл хөдлөлийг ойлгодог." }, model: "Big5", type: "scale", scale: 5, trait: "Agreeableness" },
  { id: "q319", text: { en: "I handle pressure calmly.", mn: "Би дарамтанд тайван ханддаг." }, model: "Big5", type: "scale", scale: 5, trait: "Neuroticism" },
  { id: "q320", text: { en: "I like influencing decisions.", mn: "Би шийдвэрт нөлөөлөх дуртай." }, model: "DISC", type: "scale", scale: 5, trait: "Influence" },
];

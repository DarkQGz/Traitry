export interface Question {
  id: string;
  text: { en: string; mn: string };
  model: "Big5" | "DISC" | "MBTI";
  type: "scale" | "single";
  scale?: number; // 1-5
  options?: string[]; // for single choice
  dependsOn?: Record<
    string,
    { min?: number; max?: number; equals?: string | number }
  >; // adaptive
}

export const questionsPart1: Question[] = [
  // --- Part 1: Questions 1-40 ---
  
  // Big5 - Openness
  { id: "q1", text: { en: "I enjoy learning new things.", mn: "Би шинэ зүйл сурах дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q2", text: { en: "I like trying new hobbies.", mn: "Би шинэ сонирхолтой зүйлсийг турших дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q3", text: { en: "I enjoy thinking about abstract ideas.", mn: "Би онолын санаа бодлыг эргэцүүлэх дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q4", text: { en: "I am curious about many different things.", mn: "Би олон өөр зүйлд сонирхолтой." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Conscientiousness
  { id: "q5", text: { en: "I always complete tasks on time.", mn: "Би ажлаа цаг хугацаанд нь дуусгадаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q6", text: { en: "I plan ahead before starting projects.", mn: "Би төсөл эхлэхээс өмнө төлөвлөгөө гаргадаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q7", text: { en: "I pay attention to details.", mn: "Би нарийн зүйлд анхаардаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q8", text: { en: "I like to keep things organized.", mn: "Би бүх зүйлийг эмх цэгцтэй байлгах дуртай." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Extraversion
  { id: "q9", text: { en: "I enjoy being around other people.", mn: "Би бусад хүмүүстэй хамт байх дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q10", text: { en: "I often speak up in group discussions.", mn: "Би бүлгийн хэлэлцүүлэгт ихэвчлэн үгээ хэлдэг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q11", text: { en: "I feel energized when socializing.", mn: "Би бусадтай харилцахдаа эрч хүч авдаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q12", text: { en: "I like to meet new people.", mn: "Би шинэ хүмүүстэй танилцах дуртай." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Agreeableness
  { id: "q13", text: { en: "I try to help others when I can.", mn: "Би боломжтой бол бусдад туслахыг хичээдэг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q14", text: { en: "I trust people easily.", mn: "Би хүмүүсийг амархан итгэдэг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q15", text: { en: "I avoid arguments whenever possible.", mn: "Би маргаанаас аль болох зайлсхийдэг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q16", text: { en: "I am kind and considerate.", mn: "Би сайхан сэтгэлтэй, бодлоготой." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Neuroticism
  { id: "q17", text: { en: "I often feel anxious or stressed.", mn: "Би ихэвчлэн сэтгэл түгшиж, стресстдэг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q18", text: { en: "I get upset easily when things go wrong.", mn: "Зүйлс буруугаар эргэхэд би амархан уурладаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q19", text: { en: "I worry about things too much.", mn: "Би зүйлсийн талаар илүү их санаа зовдог." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q20", text: { en: "I find it hard to relax.", mn: "Би амрахад хэцүү байдаг." }, model: "Big5", type: "scale", scale: 5 },

  // DISC - Dominance
  { id: "q21", text: { en: "I like taking charge of situations.", mn: "Би нөхцөл байдлыг удирдах дуртай." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q22", text: { en: "I enjoy challenges and competition.", mn: "Би сорилт болон өрсөлдөөнд дуртай." }, model: "DISC", type: "scale", scale: 5 },
  
  // DISC - Influence
  { id: "q23", text: { en: "I enjoy persuading others to my ideas.", mn: "Би өөрийн санааг бусдад ойлгуулах дуртай." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q24", text: { en: "I like being sociable.", mn: "Би нийгмийн харилцаанд дуртай." }, model: "DISC", type: "scale", scale: 5 },

  // DISC - Steadiness
  { id: "q25", text: { en: "I prefer stable and predictable routines.", mn: "Би тогтвортой, урьдчилан таамаглах боломжтой ажлыг илүүд үздэг." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q26", text: { en: "I enjoy supporting others patiently.", mn: "Би бусдыг тэвчээртэйгээр дэмжих дуртай." }, model: "DISC", type: "scale", scale: 5 },

  // DISC - Compliance
  { id: "q27", text: { en: "I follow rules carefully.", mn: "Би дүрмийг нарийн дагаж мөрддөг." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q28", text: { en: "I prefer working within structured guidelines.", mn: "Би зохион байгуулалттай удирдамжийн дагуу ажиллахыг илүүд үздэг." }, model: "DISC", type: "scale", scale: 5 },

  // MBTI - Introversion vs Extraversion
  { id: "q29", text: { en: "I prefer quiet environments to focus.", mn: "Би төвлөрөхийн тулд тайван орчныг илүүд үздэг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q30", text: { en: "I enjoy being the center of attention.", mn: "Би анхаарал татах төвд байх дуртай." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Sensing vs Intuition
  { id: "q31", text: { en: "I focus on concrete facts rather than abstract ideas.", mn: "Би онолын санаанаас илүү бодит баримтад анхаардаг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q32", text: { en: "I rely on intuition more than facts.", mn: "Би баримтаас илүү интуицид найдаж ажилладаг." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Thinking vs Feeling
  { id: "q33", text: { en: "I make decisions based on logic.", mn: "Би шийдвэрийг логикт үндэслэн гаргадаг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q34", text: { en: "I consider people's feelings when deciding.", mn: "Шийдвэр гаргахдаа би хүмүүсийн сэтгэл санааг харгалздаг." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Judging vs Perceiving
  { id: "q35", text: { en: "I like to plan everything in advance.", mn: "Би бүх зүйлийг урьдчилан төлөвлөх дуртай." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q36", text: { en: "I like to stay flexible and spontaneous.", mn: "Би уян хатан, санаандгүй байдлыг илүүд үздэг." }, model: "MBTI", type: "scale", scale: 5 },

  // Adaptive examples
  { id: "q37", text: { en: "I feel anxious when I don't plan ahead.", mn: "Би урьдчилан төлөвлөхгүй бол санаа зовдог." }, model: "Big5", type: "scale", scale: 5, dependsOn: { q5: { max: 2 } } },
  { id: "q38", text: { en: "I like leading groups of people.", mn: "Би бүлэг хүмүүсийг удирдах дуртай." }, model: "DISC", type: "scale", scale: 5, dependsOn: { q9: { min: 4 } } },
  { id: "q39", text: { en: "I enjoy learning about psychology.", mn: "Би сэтгэл судлал сурах дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q40", text: { en: "I like solving complex problems.", mn: "Би төвөгтэй асуудлыг шийдэх дуртай." }, model: "MBTI", type: "scale", scale: 5 },
];
// Part 2: Questions 41-80
export const questionsPart2: Question[] = [
  // Big5 - Openness
  { id: "q41", text: { en: "I enjoy exploring different cultures.", mn: "Би янз бүрийн соёл судлах дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q42", text: { en: "I like to try new foods.", mn: "Би шинэ хоол турших дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q43", text: { en: "I enjoy artistic activities.", mn: "Би урлагийн үйл ажиллагаанд дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q44", text: { en: "I like to read about philosophy or science.", mn: "Би философи болон шинжлэх ухаан судлах дуртай." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Conscientiousness
  { id: "q45", text: { en: "I keep my promises.", mn: "Би амласан зүйлээ биелүүлдэг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q46", text: { en: "I set goals and work hard to achieve them.", mn: "Би зорилго тавьж, түүндээ хүрэхийн тулд хичээдэг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q47", text: { en: "I avoid procrastination.", mn: "Би хойшлуулах явдлаас зайлсхийдэг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q48", text: { en: "I am thorough in my work.", mn: "Би ажлаа нягт нямбай хийдэг." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Extraversion
  { id: "q49", text: { en: "I enjoy parties and social gatherings.", mn: "Би үдэшлэг, нийгмийн арга хэмжээнд дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q50", text: { en: "I feel comfortable meeting strangers.", mn: "Би танихгүй хүмүүстэй уулзахад тав тухтай байдаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q51", text: { en: "I like being around energetic people.", mn: "Би эрч хүчтэй хүмүүстэй байх дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q52", text: { en: "I enjoy speaking in public.", mn: "Би олон нийтийн өмнө ярилцах дуртай." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Agreeableness
  { id: "q53", text: { en: "I am sensitive to the needs of others.", mn: "Би бусдын хэрэгцээнд мэдрэмжтэй." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q54", text: { en: "I forgive others easily.", mn: "Би бусдыг амархан уучилдаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q55", text: { en: "I enjoy helping people even when inconvenient.", mn: "Би бусдыг туслах дуртай, хүндрэл гарсан ч." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q56", text: { en: "I avoid hurting other people's feelings.", mn: "Би бусдын сэтгэлд хор учруулахгүй байхыг хичээдэг." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Neuroticism
  { id: "q57", text: { en: "I often feel tense or nervous.", mn: "Би ихэвчлэн түгшсэн, сэтгэл түгшсэн байдаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q58", text: { en: "I get frustrated easily.", mn: "Би амархан уурладаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q59", text: { en: "I worry about future problems.", mn: "Би ирээдүйн асуудалд санаа зовдог." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q60", text: { en: "I feel emotionally unstable at times.", mn: "Би заримдаа сэтгэл хөдлөлөөр тогтворгүй байдаг." }, model: "Big5", type: "scale", scale: 5 },

  // DISC - Dominance
  { id: "q61", text: { en: "I make quick decisions.", mn: "Би хурдан шийдвэр гаргадаг." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q62", text: { en: "I am comfortable taking risks.", mn: "Би эрсдэл хүлээхэд тав тухтай." }, model: "DISC", type: "scale", scale: 5 },

  // DISC - Influence
  { id: "q63", text: { en: "I enjoy motivating others.", mn: "Би бусдыг урамшуулах дуртай." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q64", text: { en: "I like being persuasive.", mn: "Би итгүүлэх чадвартай байх дуртай." }, model: "DISC", type: "scale", scale: 5 },

  // DISC - Steadiness
  { id: "q65", text: { en: "I prefer calm environments.", mn: "Би тайван орчинг илүүд үздэг." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q66", text: { en: "I enjoy helping colleagues patiently.", mn: "Би хамтран ажиллагсаддаа тэвчээртэйгээр туслах дуртай." }, model: "DISC", type: "scale", scale: 5 },

  // DISC - Compliance
  { id: "q67", text: { en: "I follow instructions carefully.", mn: "Би зааврыг нарийн дагаж мөрддөг." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q68", text: { en: "I prefer tasks with clear rules.", mn: "Би тодорхой дүрэмтэй ажлыг илүүд үздэг." }, model: "DISC", type: "scale", scale: 5 },

  // MBTI - Introversion vs Extraversion
  { id: "q69", text: { en: "I enjoy reflection and solitude.", mn: "Би эргэцүүлэлт, ганцаараа байх дуртай." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q70", text: { en: "I feel energized in social events.", mn: "Би нийгмийн арга хэмжээний үеэр эрч хүч авдаг." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Sensing vs Intuition
  { id: "q71", text: { en: "I notice details others may miss.", mn: "Би бусад хүмүүс анзаардаггүй нарийн зүйлсийг анзаардаг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q72", text: { en: "I rely on intuition when making decisions.", mn: "Би шийдвэр гаргахдаа интуицид найдаж ажилладаг." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Thinking vs Feeling
  { id: "q73", text: { en: "I analyze problems logically.", mn: "Би асуудлыг логикоор шинжлэн боддог." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q74", text: { en: "I value harmony in relationships.", mn: "Би харилцаанд эв нэгдлийг чухалчилдаг." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Judging vs Perceiving
  { id: "q75", text: { en: "I prefer structured schedules.", mn: "Би зохион байгуулалттай цагийн хуваарийг илүүд үздэг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q76", text: { en: "I enjoy flexibility in plans.", mn: "Би төлөвлөгөөнд уян хатан байдлыг дуртай." }, model: "MBTI", type: "scale", scale: 5 },

  // Adaptive examples
  { id: "q77", text: { en: "I get stressed when routines change.", mn: "Би үйл ажиллагааны хуваарь өөрчлөгдөхөд стрессддэг." }, model: "Big5", type: "scale", scale: 5, dependsOn: { q65: { max: 2 } } },
  { id: "q78", text: { en: "I enjoy leading teams to success.", mn: "Би багийг амжилтад хүргэх дуртай." }, model: "DISC", type: "scale", scale: 5, dependsOn: { q21: { min: 4 } } },
  { id: "q79", text: { en: "I am interested in human behavior.", mn: "Би хүний зан үйлд сонирхолтой." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q80", text: { en: "I like complex problem solving.", mn: "Би төвөгтэй асуудлыг шийдэх дуртай." }, model: "MBTI", type: "scale", scale: 5 },
];
// Part 3: Questions 81-120
export const questionsPart3: Question[] = [
  // Big5 - Openness
  { id: "q81", text: { en: "I enjoy imaginative play or creative hobbies.", mn: "Би төсөөлөлт тоглоом, бүтээлч хобби дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q82", text: { en: "I like to learn about new ideas.", mn: "Би шинэ санаа сурч мэдэх дуртай." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Conscientiousness
  { id: "q83", text: { en: "I plan my work carefully.", mn: "Би ажлаа нарийн төлөвлөдөг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q84", text: { en: "I follow through with commitments.", mn: "Би амласан зүйлээ дуусгадаг." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Extraversion
  { id: "q85", text: { en: "I enjoy energetic social activities.", mn: "Би эрч хүчтэй нийгмийн үйл ажиллагаанд дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q86", text: { en: "I speak up in group discussions.", mn: "Би бүлгийн хэлэлцүүлэгт санал хэлдэг." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Agreeableness
  { id: "q87", text: { en: "I am trusting of others.", mn: "Би бусдад итгэдэг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q88", text: { en: "I cooperate well with others.", mn: "Би бусадтай сайн хамтарч ажилладаг." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Neuroticism
  { id: "q89", text: { en: "I feel anxious in new situations.", mn: "Шинэ нөхцөл байдалд би сэтгэл түгшдэг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q90", text: { en: "I get upset easily.", mn: "Би амархан уурладаг." }, model: "Big5", type: "scale", scale: 5 },

  // DISC - Dominance
  { id: "q91", text: { en: "I prefer to lead rather than follow.", mn: "Би дагах бус удирдах дуртай." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q92", text: { en: "I take initiative in challenging situations.", mn: "Би сорилттой нөхцөлд санаачлагатай ажилладаг." }, model: "DISC", type: "scale", scale: 5 },

  // DISC - Influence
  { id: "q93", text: { en: "I enjoy inspiring others.", mn: "Би бусдыг урамшуулах дуртай." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q94", text: { en: "I like being persuasive.", mn: "Би итгүүлэх чадвартай байх дуртай." }, model: "DISC", type: "scale", scale: 5 },

  // DISC - Steadiness
  { id: "q95", text: { en: "I maintain calm even in pressure.", mn: "Би дарамттай үед ч тайван байдаг." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q96", text: { en: "I am patient with others.", mn: "Би бусдад тэвчээртэй." }, model: "DISC", type: "scale", scale: 5 },

  // DISC - Compliance
  { id: "q97", text: { en: "I pay attention to details.", mn: "Би нарийн зүйлсийг анхаарч ажигладаг." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q98", text: { en: "I follow rules and regulations closely.", mn: "Би дүрэм журамд нарийн баримталдаг." }, model: "DISC", type: "scale", scale: 5 },

  // MBTI - Introversion vs Extraversion
  { id: "q99", text: { en: "I prefer quiet environments to recharge.", mn: "Би эрч хүчээ сэргээхийн тулд нам гүм орчинг илүүд үздэг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q100", text: { en: "I enjoy engaging with large groups.", mn: "Би олон хүний бүлэгтэй харилцах дуртай." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Sensing vs Intuition
  { id: "q101", text: { en: "I prefer concrete facts over theories.", mn: "Би онолын оронд бодит баримтыг илүүд үздэг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q102", text: { en: "I rely on patterns and possibilities.", mn: "Би загвар болон боломжууд дээр тулгуурладаг." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Thinking vs Feeling
  { id: "q103", text: { en: "I make decisions logically.", mn: "Би шийдвэрээ логикоор гаргадаг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q104", text: { en: "I consider feelings of others in decisions.", mn: "Би шийдвэр гаргахдаа бусдын мэдрэмжийг тооцдог." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Judging vs Perceiving
  { id: "q105", text: { en: "I like having a schedule.", mn: "Би цагийн хуваарилалттай байх дуртай." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q106", text: { en: "I adapt easily to changing plans.", mn: "Би төлөвлөгөөний өөрчлөлтөд амархан дасан зохицдог." }, model: "MBTI", type: "scale", scale: 5 },

  // Adaptive & scenario-based questions
  { id: "q107", text: { en: "I change my approach if something isn’t working.", mn: "Хэрэв зүйлс ажиллахгүй бол би арга барилаа өөрчилдөг." }, model: "Big5", type: "scale", scale: 5, dependsOn: { q83: { min: 4 } } },
  { id: "q108", text: { en: "I enjoy mentoring others.", mn: "Би бусдыг зааж чиглүүлэх дуртай." }, model: "DISC", type: "scale", scale: 5, dependsOn: { q93: { min: 4 } } },
  { id: "q109", text: { en: "I seek out opportunities to learn.", mn: "Би сурах боломж хайдаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q110", text: { en: "I thrive in structured settings.", mn: "Би зохион байгуулалттай орчинд сайн ажилладаг." }, model: "MBTI", type: "scale", scale: 5 },

  // Misc adaptive questions
  { id: "q111", text: { en: "I like taking on challenging tasks.", mn: "Би сорилттой ажилд дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q112", text: { en: "I enjoy being part of decision-making.", mn: "Би шийдвэр гаргах үйл явцад оролцох дуртай." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q113", text: { en: "I like abstract thinking.", mn: "Би хийсвэр сэтгэлгээ хийх дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q114", text: { en: "I enjoy helping others succeed.", mn: "Би бусдыг амжилтад хүргэхэд туслах дуртай." }, model: "DISC", type: "scale", scale: 5 },

  { id: "q115", text: { en: "I rely on facts more than intuition.", mn: "Би интуицээс илүү баримт дээр тулгуурладаг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q116", text: { en: "I feel energized after socializing.", mn: "Би нийгмийн харилцаанаас эрч хүч авдаг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q117", text: { en: "I avoid conflicts if possible.", mn: "Хэрэв боломжтой бол би зөрчил үүсгэхгүй." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q118", text: { en: "I like to plan ahead.", mn: "Би урьдчилан төлөвлөх дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q119", text: { en: "I enjoy being challenged intellectually.", mn: "Би оюун ухааны сорилтод дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q120", text: { en: "I adapt my behavior based on feedback.", mn: "Би санал хүсэлт дээр тулгуурлан зан үйлээ өөрчилдөг." }, model: "DISC", type: "scale", scale: 5 },
];
// Part 4: Questions 121-160
export const questionsPart4: Question[] = [
  // Big5 - Openness
  { id: "q121", text: { en: "I enjoy reading about unfamiliar topics.", mn: "Би мэддэггүй сэдвээр унших дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q122", text: { en: "I like experimenting with new ideas.", mn: "Би шинэ санаануудыг турших дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q123", text: { en: "I enjoy visiting museums or galleries.", mn: "Би музей, үзэсгэлэн үзэх дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q124", text: { en: "I am interested in abstract concepts.", mn: "Би хийсвэр ойлголт сонирхдог." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Conscientiousness
  { id: "q125", text: { en: "I keep track of my responsibilities.", mn: "Би өөрийн үүрэг хариуцлагыг хянадаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q126", text: { en: "I prefer planning over improvisation.", mn: "Би төлөвлөхийг санаандгүй байхаас илүүд үздэг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q127", text: { en: "I pay attention to deadlines.", mn: "Би хугацаанд анхаардаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q128", text: { en: "I make lists to stay organized.", mn: "Би эмх цэгцтэй байхдаа жагсаалт гаргадаг." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Extraversion
  { id: "q129", text: { en: "I enjoy interacting with energetic people.", mn: "Би эрч хүчтэй хүмүүстэй харилцах дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q130", text: { en: "I like to initiate conversations.", mn: "Би яриаг эхлүүлэх дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q131", text: { en: "I feel comfortable in social gatherings.", mn: "Би нийгмийн арга хэмжээнд тав тухтай байдаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q132", text: { en: "I enjoy being active and energetic.", mn: "Би идэвхтэй, эрч хүчтэй байх дуртай." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Agreeableness
  { id: "q133", text: { en: "I try to see the good in people.", mn: "Би хүмүүсийн сайн талыг харахыг хичээдэг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q134", text: { en: "I am cooperative in team activities.", mn: "Би багийн үйл ажиллагаанд хамтран ажилладаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q135", text: { en: "I avoid hurting others intentionally.", mn: "Би бусдыг санаатайгаар гомдоохгүй." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q136", text: { en: "I enjoy helping others without expecting rewards.", mn: "Би бусдад туслах дуртай, шагнал горьддоггүй." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Neuroticism
  { id: "q137", text: { en: "I get nervous before important events.", mn: "Би чухал арга хэмжээний өмнө сандардаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q138", text: { en: "I feel emotions intensely.", mn: "Би сэтгэл хөдлөлөө хүчтэй мэдэрдэг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q139", text: { en: "I worry about my past mistakes.", mn: "Би өнгөрсөн алдаандаа санаа зовдог." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q140", text: { en: "I am sensitive to stress.", mn: "Би стрессд мэдрэмтгий." }, model: "Big5", type: "scale", scale: 5 },

  // DISC - Dominance
  { id: "q141", text: { en: "I take charge when necessary.", mn: "Би шаардлагатай үед удирддаг." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q142", text: { en: "I like challenging situations.", mn: "Би сорилттой нөхцөлд дуртай." }, model: "DISC", type: "scale", scale: 5 },

  // DISC - Influence
  { id: "q143", text: { en: "I enjoy motivating people.", mn: "Би хүмүүсийг урамшуулах дуртай." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q144", text: { en: "I like social recognition.", mn: "Би нийгмийн хүлээн зөвшөөрөлд дуртай." }, model: "DISC", type: "scale", scale: 5 },

  // DISC - Steadiness
  { id: "q145", text: { en: "I prefer consistency in my work.", mn: "Би ажлынхаа тогтмол байдалд дуртай." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q146", text: { en: "I help colleagues calmly.", mn: "Би хамтран ажиллагсаддаа тайван тусалдаг." }, model: "DISC", type: "scale", scale: 5 },

  // DISC - Compliance
  { id: "q147", text: { en: "I follow detailed instructions.", mn: "Би нарийн зааврыг дагаж мөрддөг." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q148", text: { en: "I prefer structured tasks.", mn: "Би зохион байгуулалттай ажлыг илүүд үздэг." }, model: "DISC", type: "scale", scale: 5 },

  // MBTI - Introversion vs Extraversion
  { id: "q149", text: { en: "I enjoy solitary activities.", mn: "Би ганцаарчилсан үйл ажиллагаанд дуртай." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q150", text: { en: "I like participating in social events.", mn: "Би нийгмийн арга хэмжээнд оролцох дуртай." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Sensing vs Intuition
  { id: "q151", text: { en: "I rely on facts in decision-making.", mn: "Би шийдвэр гаргахдаа баримтанд найдадаг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q152", text: { en: "I enjoy imagining possibilities.", mn: "Би боломжуудыг төсөөлөх дуртай." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Thinking vs Feeling
  { id: "q153", text: { en: "I prioritize logic over feelings.", mn: "Би мэдрэмжээс илүү логикт ач холбогдол өгдөг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q154", text: { en: "I consider others' emotions.", mn: "Би бусдын сэтгэл хөдлөлд анхаардаг." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Judging vs Perceiving
  { id: "q155", text: { en: "I like to follow a plan.", mn: "Би төлөвлөгөөг дагах дуртай." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q156", text: { en: "I adapt plans when necessary.", mn: "Би шаардлагатай үед төлөвлөгөөг өөрчилдөг." }, model: "MBTI", type: "scale", scale: 5 },

  // Adaptive examples
  { id: "q157", text: { en: "I seek challenges to improve myself.", mn: "Би өөрийгөө сайжруулахын тулд сорилт хайдаг." }, model: "Big5", type: "scale", scale: 5, dependsOn: { q111: { min: 4 } } },
  { id: "q158", text: { en: "I enjoy teaching others.", mn: "Би бусдад зааж зааварлах дуртай." }, model: "DISC", type: "scale", scale: 5, dependsOn: { q108: { min: 4 } } },
  { id: "q159", text: { en: "I like learning new skills.", mn: "Би шинэ ур чадвар сурах дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q160", text: { en: "I like analyzing complex problems.", mn: "Би төвөгтэй асуудлыг шинжлэх дуртай." }, model: "MBTI", type: "scale", scale: 5 },
];
// Part 5: Questions 161-200
export const questionsPart5: Question[] = [
  // Big5 - Openness
  { id: "q161", text: { en: "I enjoy creative problem-solving.", mn: "Би бүтээлч асуудал шийдэлд дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q162", text: { en: "I like learning about different philosophies.", mn: "Би янз бүрийн философи судлах дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q163", text: { en: "I enjoy exploring new technologies.", mn: "Би шинэ технологийг судлах дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q164", text: { en: "I like imagining alternative possibilities.", mn: "Би өөр хувилбар боломжуудыг төсөөлөх дуртай." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Conscientiousness
  { id: "q165", text: { en: "I am diligent in completing tasks.", mn: "Би ажлаа хийхдээ хичээнгүй байдаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q166", text: { en: "I stick to my commitments.", mn: "Би амласан зүйлдээ үнэнч байдаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q167", text: { en: "I plan carefully before acting.", mn: "Би үйлдэхийн өмнө нарийн төлөвлөдөг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q168", text: { en: "I like structured routines.", mn: "Би зохион байгуулалттай үйл ажиллагааг илүүд үздэг." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Extraversion
  { id: "q169", text: { en: "I feel energized by social interactions.", mn: "Би нийгмийн харилцаагаар эрч хүч авдаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q170", text: { en: "I enjoy initiating social activities.", mn: "Би нийгмийн үйл ажиллагаа эхлүүлэх дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q171", text: { en: "I enjoy attention from others.", mn: "Би бусдын анхаарлыг авах дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q172", text: { en: "I like being part of energetic groups.", mn: "Би эрч хүчтэй бүлгийн хэсэг байх дуртай." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Agreeableness
  { id: "q173", text: { en: "I try to understand others' perspectives.", mn: "Би бусдын үзэл бодлыг ойлгохыг хичээдэг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q174", text: { en: "I am polite and considerate.", mn: "Би эелдэг, бодлоготой байдаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q175", text: { en: "I help others even if inconvenient.", mn: "Би хүндрэлтэй байсан ч бусдад тусалдаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q176", text: { en: "I avoid conflicts when possible.", mn: "Би боломжтой бол маргаанаас зайлсхийдэг." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Neuroticism
  { id: "q177", text: { en: "I get stressed easily.", mn: "Би амархан стрессддэг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q178", text: { en: "I experience mood swings.", mn: "Би сэтгэл санааны хэлбэлзэлтэй байдаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q179", text: { en: "I worry about many things.", mn: "Би олон зүйлд санаа зовдог." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q180", text: { en: "I feel anxious in new situations.", mn: "Би шинэ нөхцөл байдалд сандардаг." }, model: "Big5", type: "scale", scale: 5 },

  // DISC - Dominance
  { id: "q181", text: { en: "I like to be in control.", mn: "Би нөхцөл байдлыг удирдах дуртай." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q182", text: { en: "I enjoy overcoming challenges.", mn: "Би сорилт даван туулах дуртай." }, model: "DISC", type: "scale", scale: 5 },

  // DISC - Influence
  { id: "q183", text: { en: "I enjoy persuading others.", mn: "Би бусдыг итгүүлэх дуртай." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q184", text: { en: "I like social recognition for achievements.", mn: "Би амжилтаа нийгмийн хүлээн зөвшөөрлөөр үнэлүүлэх дуртай." }, model: "DISC", type: "scale", scale: 5 },

  // DISC - Steadiness
  { id: "q185", text: { en: "I prefer stable work environments.", mn: "Би тогтвортой ажлын орчинд дуртай." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q186", text: { en: "I support others patiently.", mn: "Би бусдыг тэвчээртэйгээр дэмждэг." }, model: "DISC", type: "scale", scale: 5 },

  // DISC - Compliance
  { id: "q187", text: { en: "I follow guidelines carefully.", mn: "Би удирдамжийг нарийн дагаж мөрддөг." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q188", text: { en: "I prefer tasks with clear instructions.", mn: "Би тодорхой заавартай ажлыг илүүд үздэг." }, model: "DISC", type: "scale", scale: 5 },

  // MBTI - Introversion vs Extraversion
  { id: "q189", text: { en: "I enjoy spending time alone to recharge.", mn: "Би ганцаараа байхдаа эрч хүчээ нөхдөг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q190", text: { en: "I like engaging with groups of people.", mn: "Би олон хүний бүлэгтэй харилцах дуртай." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Sensing vs Intuition
  { id: "q191", text: { en: "I focus on details in my observations.", mn: "Би ажиглалтадаа нарийн зүйлд анхаардаг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q192", text: { en: "I enjoy exploring abstract possibilities.", mn: "Би хийсвэр боломжуудыг судлах дуртай." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Thinking vs Feeling
  { id: "q193", text: { en: "I make decisions based on logic.", mn: "Би шийдвэрээ логикоор гаргадаг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q194", text: { en: "I consider emotions in my decisions.", mn: "Би шийдвэр гаргахдаа мэдрэмжийг тооцдог." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Judging vs Perceiving
  { id: "q195", text: { en: "I like having plans and schedules.", mn: "Би төлөвлөгөө, цагийн хуваарийг дуртай." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q196", text: { en: "I adapt plans as situations change.", mn: "Би нөхцөл байдлын өөрчлөлтөд төлөвлөгөөг өөрчилдөг." }, model: "MBTI", type: "scale", scale: 5 },

  // Adaptive examples
  { id: "q197", text: { en: "I seek feedback to improve.", mn: "Би сайжруулахын тулд санал хүсэлт авдаг." }, model: "Big5", type: "scale", scale: 5, dependsOn: { q160: { min: 4 } } },
  { id: "q198", text: { en: "I mentor others to achieve success.", mn: "Би бусдыг амжилтанд хүргэхэд чиглүүлдэг." }, model: "DISC", type: "scale", scale: 5, dependsOn: { q158: { min: 4 } } },
  { id: "q199", text: { en: "I enjoy challenging mental tasks.", mn: "Би оюун ухааны сорилтод дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q200", text: { en: "I like analyzing patterns in complex problems.", mn: "Би төвөгтэй асуудлын загварыг шинжлэх дуртай." }, model: "MBTI", type: "scale", scale: 5 },
];
// Part 6: Questions 201-240
export const questionsPart6: Question[] = [
  // Big5 - Openness
  { id: "q201", text: { en: "I enjoy experimenting with new ideas.", mn: "Би шинэ санааг турших дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q202", text: { en: "I like reading about diverse subjects.", mn: "Би олон төрлийн сэдвийг унших дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q203", text: { en: "I enjoy abstract thinking.", mn: "Би хийсвэр сэтгэлгээ хийх дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q204", text: { en: "I enjoy exploring unconventional ideas.", mn: "Би хэв маягт үл нийцэх санааг судлах дуртай." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Conscientiousness
  { id: "q205", text: { en: "I finish tasks thoroughly.", mn: "Би ажлаа бүрэн хийдэг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q206", text: { en: "I set long-term goals.", mn: "Би урт хугацааны зорилго тавьдаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q207", text: { en: "I avoid procrastinating important tasks.", mn: "Би чухал ажлыг хойшлуулдаггүй." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q208", text: { en: "I keep my work organized.", mn: "Би ажлаа зохион байгуулалттай хадгалдаг." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Extraversion
  { id: "q209", text: { en: "I enjoy being active in social events.", mn: "Би нийгмийн арга хэмжээнд идэвхтэй байх дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q210", text: { en: "I like being around enthusiastic people.", mn: "Би урам зоригтой хүмүүстэй байх дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q211", text: { en: "I feel comfortable speaking in front of groups.", mn: "Би бүлгийн өмнө ярилцахад тав тухтай байдаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q212", text: { en: "I enjoy meeting new people regularly.", mn: "Би байнга шинэ хүмүүстэй уулзах дуртай." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Agreeableness
  { id: "q213", text: { en: "I am empathetic to others' feelings.", mn: "Би бусдын мэдрэмжид эмпати үзүүлдэг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q214", text: { en: "I cooperate even when it’s inconvenient.", mn: "Би хүндрэлтэй байсан ч хамтран ажилладаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q215", text: { en: "I try to avoid hurting others.", mn: "Би бусдад хор учруулахыг оролддоггүй." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q216", text: { en: "I am patient with others.", mn: "Би бусдад тэвчээртэй байдаг." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Neuroticism
  { id: "q217", text: { en: "I get nervous under pressure.", mn: "Би дарамттай үед сандардаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q218", text: { en: "I worry about things more than necessary.", mn: "Би шаардлагаас илүү зүйлд санаа зовдог." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q219", text: { en: "I get upset easily.", mn: "Би амархан уурладаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q220", text: { en: "I feel anxious when things are uncertain.", mn: "Зүйлс тодорхойгүй үед би түгшдэг." }, model: "Big5", type: "scale", scale: 5 },

  // DISC - Dominance
  { id: "q221", text: { en: "I enjoy taking initiative.", mn: "Би санаачлага гаргахад дуртай." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q222", text: { en: "I like leading projects.", mn: "Би төслүүдийг удирдах дуртай." }, model: "DISC", type: "scale", scale: 5 },

  // DISC - Influence
  { id: "q223", text: { en: "I enjoy motivating people.", mn: "Би хүмүүст урам өгөх дуртай." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q224", text: { en: "I like receiving recognition for my ideas.", mn: "Би санаагаа үнэлүүлэх дуртай." }, model: "DISC", type: "scale", scale: 5 },

  // DISC - Steadiness
  { id: "q225", text: { en: "I maintain calm in difficult situations.", mn: "Би хэцүү нөхцөлд тайван байдаг." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q226", text: { en: "I support others reliably.", mn: "Би бусдыг найдвартай дэмждэг." }, model: "DISC", type: "scale", scale: 5 },

  // DISC - Compliance
  { id: "q227", text: { en: "I carefully follow rules.", mn: "Би дүрмийг нарийн дагаж мөрддөг." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q228", text: { en: "I prefer structured and precise tasks.", mn: "Би зохион байгуулалттай нарийн ажлыг илүүд үздэг." }, model: "DISC", type: "scale", scale: 5 },

  // MBTI - Introversion vs Extraversion
  { id: "q229", text: { en: "I enjoy quiet time alone.", mn: "Би ганцаараа тайван байх дуртай." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q230", text: { en: "I like engaging with groups actively.", mn: "Би бүлэгтэй идэвхтэй харилцах дуртай." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Sensing vs Intuition
  { id: "q231", text: { en: "I focus on concrete details.", mn: "Би бодит нарийн зүйлд анхаардаг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q232", text: { en: "I enjoy imagining possibilities.", mn: "Би боломжуудыг төсөөлөх дуртай." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Thinking vs Feeling
  { id: "q233", text: { en: "I make logical decisions.", mn: "Би логикоор шийдвэр гаргадаг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q234", text: { en: "I consider others' emotions.", mn: "Би бусдын мэдрэмжийг тооцдог." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Judging vs Perceiving
  { id: "q235", text: { en: "I prefer planning ahead.", mn: "Би урьдчилан төлөвлөх дуртай." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q236", text: { en: "I adapt easily to changes.", mn: "Би өөрчлөлтөд амархан дасан зохицдог." }, model: "MBTI", type: "scale", scale: 5 },

  // Adaptive & scenario-based questions
  { id: "q237", text: { en: "I seek new challenges frequently.", mn: "Би байнга шинэ сорилт хайдаг." }, model: "Big5", type: "scale", scale: 5, dependsOn: { q201: { min: 4 } } },
  { id: "q238", text: { en: "I like coaching others to improve.", mn: "Би бусдыг сайжруулахад чиглүүлэх дуртай." }, model: "DISC", type: "scale", scale: 5, dependsOn: { q223: { min: 4 } } },
  { id: "q239", text: { en: "I enjoy complex problem solving.", mn: "Би төвөгтэй асуудлыг шийдэх дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q240", text: { en: "I adapt my decisions based on new information.", mn: "Би шинэ мэдээлэл дээр тулгуурлан шийдвэрээ өөрчилдөг." }, model: "MBTI", type: "scale", scale: 5 },
];
// Part 7: Questions 241-300
export const questionsPart7: Question[] = [
  // Big5 - Openness
  { id: "q241", text: { en: "I enjoy exploring new ways of thinking.", mn: "Би шинэ сэтгэх арга замыг судлах дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q242", text: { en: "I like learning about different cultures.", mn: "Би янз бүрийн соёлын талаар сурах дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q243", text: { en: "I am curious about abstract concepts.", mn: "Би хийсвэр ойлголтуудад сонирхолтой." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q244", text: { en: "I enjoy thinking creatively.", mn: "Би бүтээлч сэтгэлгээ хийх дуртай." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Conscientiousness
  { id: "q245", text: { en: "I consistently meet my goals.", mn: "Би үргэлж зорилгодоо хүрдэг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q246", text: { en: "I carefully plan my work ahead.", mn: "Би ажлаа урьдчилан нарийн төлөвлөдөг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q247", text: { en: "I prioritize important tasks.", mn: "Би чухал ажлуудад тэргүүлэх ач холбогдол өгдөг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q248", text: { en: "I follow through on commitments.", mn: "Би амласан зүйлээ дуусгадаг." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Extraversion
  { id: "q249", text: { en: "I enjoy active social engagements.", mn: "Би идэвхтэй нийгмийн харилцаанд дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q250", text: { en: "I feel energized when interacting with people.", mn: "Би хүмүүстэй харилцахдаа эрч хүч авдаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q251", text: { en: "I like taking part in group discussions.", mn: "Би бүлгийн хэлэлцүүлэгт оролцох дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q252", text: { en: "I enjoy meeting new people.", mn: "Би шинэ хүмүүстэй уулзах дуртай." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Agreeableness
  { id: "q253", text: { en: "I am considerate of others' feelings.", mn: "Би бусдын мэдрэмжийг боддог." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q254", text: { en: "I avoid conflicts when possible.", mn: "Би боломжтой бол зөрчил үүсгэхгүй." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q255", text: { en: "I cooperate with others willingly.", mn: "Би бусадтай дуртайгаар хамтарч ажилладаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q256", text: { en: "I am supportive of others' goals.", mn: "Би бусдын зорилгод дэмжлэг үзүүлдэг." }, model: "Big5", type: "scale", scale: 5 },

  // Big5 - Neuroticism
  { id: "q257", text: { en: "I get anxious in new situations.", mn: "Би шинэ нөхцөлд түгшдэг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q258", text: { en: "I often feel tense or stressed.", mn: "Би ихэвчлэн түгшсэн, стресстэй байдаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q259", text: { en: "I worry about things too much.", mn: "Би зүйлсийн талаар илүү их санаа зовдог." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q260", text: { en: "I am easily upset by setbacks.", mn: "Би саад бэрхшээлд амархан сэтгэлээр унадаг." }, model: "Big5", type: "scale", scale: 5 },

  // DISC - Dominance
  { id: "q261", text: { en: "I take charge in challenging situations.", mn: "Би сорилттой нөхцөлд удирдах дуртай." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q262", text: { en: "I am comfortable making tough decisions.", mn: "Би хэцүү шийдвэр гаргахад тав тухтай." }, model: "DISC", type: "scale", scale: 5 },

  // DISC - Influence
  { id: "q263", text: { en: "I enjoy sharing my ideas with others.", mn: "Би санаагаа бусадтай хуваалцах дуртай." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q264", text: { en: "I like to inspire people.", mn: "Би хүмүүсийг урамшуулах дуртай." }, model: "DISC", type: "scale", scale: 5 },

  // DISC - Steadiness
  { id: "q265", text: { en: "I remain calm under pressure.", mn: "Би дарамтанд тайван байдаг." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q266", text: { en: "I am consistent in my support for others.", mn: "Би бусдад үзүүлэх дэмжлэгдээ тогтвортой байдаг." }, model: "DISC", type: "scale", scale: 5 },

  // DISC - Compliance
  { id: "q267", text: { en: "I am detail-oriented in my work.", mn: "Би ажлаа нарийн төвөгтэй хийдэг." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q268", text: { en: "I follow procedures carefully.", mn: "Би процессийг нарийн дагаж мөрддөг." }, model: "DISC", type: "scale", scale: 5 },

  // MBTI - Introversion vs Extraversion
  { id: "q269", text: { en: "I like spending time alone to recharge.", mn: "Би эрч хүчээ сэргээхийн тулд ганцаараа байх дуртай." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q270", text: { en: "I feel energized in social gatherings.", mn: "Би нийгмийн арга хэмжээнд эрч хүч авдаг." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Sensing vs Intuition
  { id: "q271", text: { en: "I prefer tangible facts over theories.", mn: "Би онолын оронд бодит баримтыг илүүд үздэг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q272", text: { en: "I enjoy exploring patterns and possibilities.", mn: "Би загвар, боломжийг судлах дуртай." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Thinking vs Feeling
  { id: "q273", text: { en: "I base decisions on logic.", mn: "Би шийдвэрээ логикоор гаргадаг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q274", text: { en: "I consider the impact on others.", mn: "Би бусдад үзүүлэх нөлөөг тооцдог." }, model: "MBTI", type: "scale", scale: 5 },

  // MBTI - Judging vs Perceiving
  { id: "q275", text: { en: "I enjoy following plans.", mn: "Би төлөвлөгөөг дагаж мөрдөх дуртай." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q276", text: { en: "I adapt well to unexpected changes.", mn: "Би гэнэтийн өөрчлөлтөд сайн дасан зохицдог." }, model: "MBTI", type: "scale", scale: 5 },

  // Adaptive & scenario-based questions
  { id: "q277", text: { en: "I enjoy taking on new challenges.", mn: "Би шинэ сорилтуудыг хийх дуртай." }, model: "Big5", type: "scale", scale: 5, dependsOn: { q241: { min: 4 } } },
  { id: "q278", text: { en: "I like mentoring others.", mn: "Би бусдыг зааж чиглүүлэх дуртай." }, model: "DISC", type: "scale", scale: 5, dependsOn: { q263: { min: 4 } } },
  { id: "q279", text: { en: "I enjoy solving difficult problems.", mn: "Би хэцүү асуудлыг шийдэх дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q280", text: { en: "I adjust decisions based on feedback.", mn: "Би санал хүсэлт дээр тулгуурлан шийдвэрээ өөрчилдөг." }, model: "MBTI", type: "scale", scale: 5 },

  // Misc adaptive questions
  { id: "q281", text: { en: "I enjoy intellectual challenges.", mn: "Би оюун ухааны сорилтод дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q282", text: { en: "I actively participate in decision-making.", mn: "Би шийдвэр гаргах үйл явцад идэвхтэй оролцдог." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q283", text: { en: "I like abstract reasoning.", mn: "Би хийсвэр сэтгэлгээ хийх дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q284", text: { en: "I enjoy helping teams succeed.", mn: "Би багийг амжилтад хүргэхэд туслах дуртай." }, model: "DISC", type: "scale", scale: 5 },

  { id: "q285", text: { en: "I rely on facts over intuition.", mn: "Би интуицээс илүү баримт дээр тулгуурладаг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q286", text: { en: "I feel energized after social interaction.", mn: "Би нийгмийн харилцаанаас эрч хүч авдаг." }, model: "MBTI", type: "scale", scale: 5 },
  { id: "q287", text: { en: "I try to avoid disagreements.", mn: "Би зөрчил үүсгэхгүй байхыг оролддог." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q288", text: { en: "I plan ahead consistently.", mn: "Би тогтмол урьдчилан төлөвлөдөг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q289", text: { en: "I enjoy challenging my mind.", mn: "Би оюун ухаанаа сорих дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q290", text: { en: "I adjust behavior based on feedback.", mn: "Би санал хүсэлт дээр үндэслэн зан үйлээ өөрчилдөг." }, model: "DISC", type: "scale", scale: 5 },

  { id: "q291", text: { en: "I seek continuous self-improvement.", mn: "Би тасралтгүй өөрийгөө сайжруулахыг эрмэлздэг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q292", text: { en: "I enjoy helping others develop skills.", mn: "Би бусдын ур чадварыг хөгжүүлэхэд туслах дуртай." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q293", text: { en: "I am reflective about my decisions.", mn: "Би шийдвэрээ эргэцүүлэн боддог." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q294", text: { en: "I adapt quickly to changing situations.", mn: "Би нөхцөл байдал өөрчлөгдөхөд хурдан дасан зохицдог." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q295", text: { en: "I enjoy analyzing complex problems.", mn: "Би төвөгтэй асуудлыг шинжлэх дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q296", text: { en: "I am motivated by achieving team goals.", mn: "Би багийн зорилгод хүрэхэд урам авдаг." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q297", text: { en: "I value learning from mistakes.", mn: "Би алдаанаас суралцахыг чухалчилдаг." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q298", text: { en: "I like receiving constructive feedback.", mn: "Би бүтээлч санал хүсэлт авах дуртай." }, model: "DISC", type: "scale", scale: 5 },
  { id: "q299", text: { en: "I enjoy discovering new perspectives.", mn: "Би шинэ өнцгүүдийг судлах дуртай." }, model: "Big5", type: "scale", scale: 5 },
  { id: "q300", text: { en: "I adapt strategies to achieve better results.", mn: "Би илүү сайн үр дүнд хүрэхийн тулд стратегиа өөрчилдөг." }, model: "DISC", type: "scale", scale: 5 },
];

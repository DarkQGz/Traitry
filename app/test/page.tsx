"use client";

import { useState, useMemo } from "react";
import { useThemeLanguage } from "../../ThemeLanguageContext";
import { questions } from "../../data/questions"; // import your JSON
import Link from "next/link";

interface Answer {
  [questionId: string]: number | string;
}

const QUESTIONS_PER_PAGE = 20;

export default function TestPage() {
  const { theme, language } = useThemeLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Answer>({});

  // Filter questions dynamically based on previous answers
  const adaptiveQuestions = useMemo(() => {
    return questions.filter(q => {
      if (!q.dependsOn) return true;
      return Object.entries(q.dependsOn).every(([depId, condition]) => {
        const prevAnswer = answers[depId];
        if (prevAnswer === undefined) return false;
        if ("min" in condition) return prevAnswer >= condition.min;
        if ("max" in condition) return prevAnswer <= condition.max;
        if ("equals" in condition) return prevAnswer === condition.equals;
        return true;
      });
    });
  }, [answers]);

  const totalPages = Math.ceil(adaptiveQuestions.length / QUESTIONS_PER_PAGE);
  const currentQuestions = adaptiveQuestions.slice(
    currentPage * QUESTIONS_PER_PAGE,
    (currentPage + 1) * QUESTIONS_PER_PAGE
  );

  const handleAnswer = (id: string, value: number | string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentPage > 0) setCurrentPage(prev => prev - 1);
  };

  return (
    <div
      className={`flex flex-col min-h-screen px-6 py-12 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6 text-center">
        {language === "en" ? "Personality Test" : "Зан төлөвийн тест"}
      </h1>

      <div className="mb-6">
        <div className="h-2 bg-gray-300 rounded-full">
          <div
            className="h-2 bg-purple-500 rounded-full"
            style={{
              width: `${((currentPage + 1) / totalPages) * 100}%`,
            }}
          />
        </div>
        <p className="text-sm mt-1 text-center">
          {language === "en"
            ? `Page ${currentPage + 1} of ${totalPages}`
            : `${currentPage + 1} хуудас / ${totalPages} нийт`}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {currentQuestions.map(q => (
          <div key={q.id}>
            <p className="mb-2 font-medium">{q.text[language]}</p>
            {q.type === "scale" && (
              <div className="flex gap-3">
                {[...Array(q.scale)].map((_, i) => {
                  const val = i + 1;
                  return (
                    <button
                      key={i}
                      onClick={() => handleAnswer(q.id, val)}
                      className={`px-3 py-1 rounded-md border transition ${
                        answers[q.id] === val
                          ? "bg-purple-500 text-white"
                          : theme === "dark"
                          ? "bg-black border-white text-white"
                          : "bg-white border-black text-black"
                      }`}
                    >
                      {val}
                    </button>
                  );
                })}
              </div>
            )}
            {q.type === "single" && q.options && (
              <div className="flex flex-col gap-2">
                {q.options.map(opt => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(q.id, opt)}
                    className={`px-3 py-1 rounded-md border transition ${
                      answers[q.id] === opt
                        ? "bg-purple-500 text-white"
                        : theme === "dark"
                        ? "bg-black border-white text-white"
                        : "bg-white border-black text-black"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          disabled={currentPage === 0}
          className="px-4 py-2 rounded-md border border-purple-500 font-semibold transition disabled:opacity-50"
        >
          {language === "en" ? "Back" : "Буцах"}
        </button>
        {currentPage < totalPages - 1 ? (
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-md border border-purple-500 font-semibold transition"
          >
            {language === "en" ? "Next" : "Дараах"}
          </button>
        ) : (
          <Link
            href="/result"
            className="px-4 py-2 rounded-md border border-purple-500 font-semibold transition"
          >
            {language === "en" ? "Finish Test" : "Тестийг дуусгах"}
          </Link>
        )}
      </div>
    </div>
  );
}

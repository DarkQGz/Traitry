"use client";

import React, { useState, useEffect } from "react";
import { useThemeLanguage } from "../../ThemeLanguageContext";
import { questions } from "../../utils/questions";
import Quiz from "../../components/Quiz";
import { Answer, Question } from "../../types/types";

const QUESTIONS_PER_PAGE = 20;

export default function TestPage() {
  const { theme, language } = useThemeLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Answer>({});

  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
  const currentQuestions: Question[] = questions.slice(
    currentPage * QUESTIONS_PER_PAGE,
    (currentPage + 1) * QUESTIONS_PER_PAGE
  );

  // Load progress
  useEffect(() => {
    const saved = localStorage.getItem("traitry-progress");
    if (saved) {
      const data = JSON.parse(saved);
      setAnswers(data.answers || {});
      setCurrentPage(data.currentPage || 0);
    }
  }, []);

  // Auto-save progress
  useEffect(() => {
    localStorage.setItem(
      "traitry-progress",
      JSON.stringify({ answers, currentPage })
    );
  }, [answers, currentPage]);

  const handleNext = () => {
    const unanswered = currentQuestions.some(q => answers[q.id] === undefined);
    if (unanswered) {
      alert(language === "en" ? "Please answer all questions." : "Бүх асуултад хариулна уу.");
      return;
    }
    if (currentPage < totalPages - 1) setCurrentPage(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentPage > 0) setCurrentPage(prev => prev - 1);
  };

  const handleFinish = () => {
    const unanswered = currentQuestions.some(q => answers[q.id] === undefined);
    if (unanswered) {
      alert(language === "en" ? "Please answer all questions." : "Бүх асуултад хариулна уу.");
      return;
    }

    localStorage.setItem("traitry-answers", JSON.stringify(answers));
    window.location.href = "/result";
  };

  const progressPercent = Math.round((currentPage / totalPages) * 100);

  return (
    <div
      className={`flex flex-col min-h-screen px-6 pt-32 pb-12 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="fixed top-16 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl z-50">
        <div className={`h-2 rounded-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-300"}`}>
          <div
            className={`h-2 rounded-full ${
              theme === "dark" ? "bg-purple-400" : "bg-purple-500"
            } transition-all`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-center mt-1 font-medium text-sm">{progressPercent}%</p>
      </div>

      <Quiz
        questions={currentQuestions}
        answers={answers}
        setAnswers={(id: string, value: string | number) =>
          setAnswers(prev => ({ ...prev, [id]: value }))
        }
        theme={theme}
        language={language}
        currentPage={currentPage}
        totalPages={totalPages}
      />

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
          <button
            onClick={handleFinish}
            className="px-4 py-2 rounded-md border border-purple-500 font-semibold transition"
          >
            {language === "en" ? "Finish Test" : "Тестийг дуусгах"}
          </button>
        )}
      </div>
    </div>
  );
}

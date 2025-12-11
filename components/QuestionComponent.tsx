"use client";
import React from "react";
import { Question } from "../types/types";

interface QuestionProps {
  question: Question;
  answer?: string | number;
  setAnswer: (id: string, value: string | number) => void;
  theme: "light" | "dark";
  language: "en" | "mn";
}

export const QuestionComponent: React.FC<QuestionProps> = ({ question, answer, setAnswer, theme, language }) => {
  return (
    <div className="flex flex-col items-center gap-3 mb-6">
      <p className="text-lg font-medium text-center">{question.text[language]}</p>

      {question.type === "scale" && (
        <div className="flex gap-3">
          {[...Array(question.scale)].map((_, i) => {
            const val = i + 1;
            return (
              <button
                key={i}
                onClick={() => setAnswer(question.id, val)}
                className={`px-4 py-2 rounded-md border font-semibold transition ${
                  answer === val
                    ? "bg-purple-500 text-white border-purple-500"
                    : theme === "dark"
                    ? "bg-black border-purple-500 text-white"
                    : "bg-white border-purple-500 text-black"
                }`}
              >
                {val}
              </button>
            );
          })}
        </div>
      )}

      {question.type === "single" && question.options && (
        <div className="flex flex-col gap-2">
          {question.options.map((opt) => (
            <button
              key={opt}
              onClick={() => setAnswer(question.id, opt)}
              className={`px-4 py-2 rounded-md border font-semibold transition ${
                answer === opt
                  ? "bg-purple-500 text-white border-purple-500"
                  : theme === "dark"
                  ? "bg-black border-purple-500 text-white"
                  : "bg-white border-purple-500 text-black"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

"use client";
import React from "react";
import { Question } from "../types/types";
import { Answer } from "../types/types";
import { QuestionComponent } from "./QuestionComponent";

interface Props {
  questions: Question[];
  answers: Answer;
  setAnswers: (id: string, value: string | number) => void;
  theme: "light" | "dark";
  language: "en" | "mn";
}

export const Questions: React.FC<Props> = ({ questions, answers, setAnswers, theme, language }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      {questions.map((q) => (
        <QuestionComponent
          key={q.id}
          question={q}
          answer={answers[q.id]}
          setAnswer={setAnswers} // matches prop in QuestionComponent
          theme={theme}
          language={language}
        />
      ))}
    </div>
  );
};

// components/QuestionComponent.tsx
import React from "react";
import { Question, Answer } from "../types/types";

interface QuestionComponentProps {
  question: Question;
  onAnswer: (answer: Answer) => void;
}

export const QuestionComponent: React.FC<QuestionComponentProps> = ({ question, onAnswer }) => {
  return (
    <div className="question-container">
      <h3>{question.question}</h3>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

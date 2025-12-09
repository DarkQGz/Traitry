// components/Quiz.tsx
import React, { useState } from "react";
import { QuestionComponent } from "./QuestionComponent";
import { Question, Answer } from "../types/types";
import { checkConditions } from "../utils/utils";
import { questionsPart1, questionsPart2, questionsPart3 } from "../data/questions";

export const Quiz: React.FC = () => {
  const [currentPart, setCurrentPart] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});

  const handleAnswer = (questionId: string, answer: Answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const getQuestionsForCurrentPart = (): Question[] => {
    let questions: Question[] = [];
    if (currentPart === 1) questions = questionsPart1;
    else if (currentPart === 2) questions = questionsPart2;
    else if (currentPart === 3) questions = questionsPart3;

    // Filter based on conditions
    return questions.filter(q => {
      if (!q.dependsOn) return true;
      return q.dependsOn.every(cond => checkConditions(answers[cond.questionId], cond));
    });
  };

  const questions = getQuestionsForCurrentPart();

  return (
    <div className="quiz-container">
      {questions.map((q: Question) => (
        <QuestionComponent
          key={q.id}
          question={q}
          onAnswer={(a: Answer) => handleAnswer(q.id, a)}
        />
      ))}

      {currentPart < 3 && (
        <button onClick={() => setCurrentPart(prev => prev + 1)}>
          Next Part
        </button>
      )}
    </div>
  );
};

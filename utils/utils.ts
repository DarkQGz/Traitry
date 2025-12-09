// utils/utils.ts
import { Answer, Question, Condition } from "../types/types";

export const checkConditions = (answer: Answer, condition?: Condition): boolean => {
  if (!condition) return true;

  const answerNum = Number(answer);

  if (condition.min !== undefined && answerNum < condition.min) return false;
  if (condition.max !== undefined && answerNum > condition.max) return false;
  if (condition.equals !== undefined && answer !== condition.equals) return false;

  return true;
};

// types/types.ts
export type Answer = string | number;

export interface Condition {
  questionId: string;
  min?: number;
  max?: number;
  equals?: string | number;
}

export interface Question {
  id: string;
  question: string;
  options: Answer[];
  dependsOn?: Condition[];
}

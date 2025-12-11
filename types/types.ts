export interface Question {
  id: string;
  text: { en: string; mn: string };
  model: "Big5" | "DISC" | "MBTI";
  trait: string; // Explicit trait for Big5, DISC, MBTI
  type: "scale" | "single";
  scale?: number; // 1-5
  options?: string[];
  dependsOn?: Record<string, { min?: number; max?: number; equals?: string | number }>;
}

export interface Answer {
  [questionId: string]: number | string;
}
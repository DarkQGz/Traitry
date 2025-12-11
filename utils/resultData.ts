export const resultDescriptions: Record<
  string,
  { name: string; description: string; careers: string[] }
> = {
  Openness: {
    name: "Openness to Experience",
    description:
      "You are imaginative, curious, and open to new experiences. You enjoy creative pursuits and exploring new ideas.",
    careers: ["Artist", "Designer", "Researcher", "Entrepreneur"],
  },
  Conscientiousness: {
    name: "Conscientiousness",
    description:
      "You are organized, dependable, and goal-oriented. You excel at planning, responsibility, and achieving long-term goals.",
    careers: ["Project Manager", "Accountant", "Engineer", "Doctor"],
  },
  Extraversion: {
    name: "Extraversion",
    description:
      "You are outgoing, energetic, and enjoy social interactions. You thrive in collaborative environments and dynamic settings.",
    careers: ["Salesperson", "Teacher", "Event Manager", "Actor"],
  },
  Agreeableness: {
    name: "Agreeableness",
    description:
      "You are friendly, empathetic, and cooperative. You are good at teamwork and value harmony with others.",
    careers: ["Counselor", "Nurse", "HR Specialist", "Social Worker"],
  },
  Neuroticism: {
    name: "Neuroticism",
    description:
      "You may experience emotional sensitivity and stress more strongly. Awareness of this can help you manage emotions and resilience.",
    careers: ["Writer", "Therapist", "Researcher", "Artist"],
  },
};

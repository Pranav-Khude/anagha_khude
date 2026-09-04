export interface Education {
  period: string;
  degree: string;
  institution: string;
  description?: string;
}

export const education: Education[] = [
  {
    period: "2023–2024",
    degree: "Master of Urban Planning and Design",
    institution: "Monash University",
    description: ""
  },
  {
    period: "2016–2021",
    degree: "Bachelor of Architecture",
    institution: "Savitribai Phule Pune University",
    description: ""
  }
];

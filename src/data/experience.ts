export interface Experience {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
}

export const experience: Experience[] = [
  {
    role: "Urban Planning Intern",
    organization: "Planning Studio",
    location: "Melbourne",
    period: "2024–2025",
    description: "Assisted in preparing strategic planning documents, conducting site analyses, and contributing to urban design proposals for various municipal clients."
  },
  {
    role: "Graduate Architectural Designer",
    organization: "Design Practice",
    location: "India",
    period: "2022–2023",
    description: "Worked on residential and commercial projects, developing design concepts, construction documentation, and client presentations."
  },
  {
    role: "Research Assistant",
    organization: "Urban Planning Lab",
    location: "University of Melbourne",
    period: "2024",
    description: "Conducted research on sustainable urban mobility, including data collection, analysis, and contribution to academic publications."
  }
];

export interface Education {
  period: string;
  degree: string;
  institution: string;
  description?: string;
}

export const education: Education[] = [
  {
    period: "2023–2025",
    degree: "Master of Urban Planning & Design",
    institution: "University of Melbourne",
    description: "Specialized in strategic planning, urban design, and sustainable development. Thesis focused on transit-oriented development in Australian cities."
  },
  {
    period: "2017–2022",
    degree: "Bachelor of Architecture",
    institution: "School of Planning and Architecture",
    description: "Comprehensive architectural education with emphasis on sustainable design, urban context, and social responsibility in the built environment."
  }
];

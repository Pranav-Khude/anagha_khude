export interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  discipline: string[];
  shortDescription: string;
  overview: string;
  objectives: string[];
  approach: string;
  outcomes: string;
  coverImage: string;
  images: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "fishermans-bend",
    title: "Fishermans Bend Urban Renewal",
    location: "Melbourne, Australia",
    year: "2025",
    discipline: ["Urban Planning", "Urban Design"],
    shortDescription: "A comprehensive urban renewal strategy for Melbourne's largest urban renewal project, focusing on sustainable development and community integration.",
    overview: "Fishermans Bend represents one of Melbourne's most significant urban renewal opportunities. This project developed a comprehensive framework balancing housing diversity, employment generation, public realm enhancement, and environmental sustainability.",
    objectives: [
      "Create a sustainable urban framework for 80,000 new residents",
      "Integrate transport networks with existing Melbourne infrastructure",
      "Establish a network of public parks and open spaces",
      "Ensure housing diversity and affordability"
    ],
    approach: "The design approach centered on creating a layered urban structure that responds to the site's unique waterfront context while connecting seamlessly with surrounding established neighborhoods. We employed a robust participatory process involving local communities, stakeholders, and government bodies.",
    outcomes: "The project delivered a legally binding framework plan that guides development decisions, a design code ensuring quality outcomes, and implementation guidelines for staged delivery.",
    coverImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=900&fit=crop"
    ],
    featured: true
  },
  {
    id: "melton-housing",
    title: "Melton Housing Strategy",
    location: "Victoria, Australia",
    year: "2024",
    discipline: ["Strategic Planning"],
    shortDescription: "A housing strategy addressing growth pressures and affordability challenges in Melbourne's rapidly expanding western corridor.",
    overview: "Melton Council required a comprehensive housing strategy to manage rapid population growth while maintaining liveability. This project analyzed housing needs, identified suitable growth areas, and developed policy recommendations.",
    objectives: [
      "Address housing affordability in a growth area context",
      "Identify sustainable expansion areas",
      "Develop housing diversity targets",
      "Create implementation guidelines"
    ],
    approach: "Through detailed demographic analysis, site assessment, and community consultation, we developed a nuanced strategy that balances growth with character preservation.",
    outcomes: "Adopted housing strategy with 15-year implementation plan, including specific precinct guidelines and monitoring framework.",
    coverImage: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=900&fit=crop"
    ],
    featured: true
  },
  {
    id: "city-plan-2036",
    title: "City Plan 2036",
    location: "Urban Strategy",
    year: "2024",
    discipline: ["Urban Strategy"],
    shortDescription: "A long-term strategic plan shaping the future growth and development of a regional city over the next fifteen years.",
    overview: "City Plan 2036 establishes the strategic direction for urban growth, economic development, and environmental management. The plan addresses challenges of population growth while preserving the city's unique character.",
    objectives: [
      "Establish a clear vision for 2036",
      "Guide sustainable urban growth",
      "Strengthen economic corridors",
      "Protect environmental assets"
    ],
    approach: "The planning process involved extensive research, stakeholder workshops, and community engagement to ensure broad ownership of the vision.",
    outcomes: "Comprehensive strategic plan with implementation priorities, monitoring indicators, and review mechanisms.",
    coverImage: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=1200&h=900&fit=crop"
    ],
    featured: true
  },
  {
    id: "adaptive-reuse",
    title: "Adaptive Reuse & Heritage",
    location: "Melbourne, Australia",
    year: "2023",
    discipline: ["Architecture", "Urban Design"],
    shortDescription: "Transforming heritage buildings into contemporary spaces while preserving cultural identity and architectural character.",
    overview: "This project explored the potential of adaptive reuse in Melbourne's inner suburbs, balancing heritage conservation with contemporary needs. The study examined technical, financial, and social dimensions of building transformation.",
    objectives: [
      "Document heritage significance",
      "Identify adaptive reuse opportunities",
      "Develop design guidelines",
      "Create case study demonstrations"
    ],
    approach: "Through detailed building assessment and creative design interventions, we demonstrated how heritage buildings can be reimagined for contemporary uses while maintaining their cultural value.",
    outcomes: "Design guidelines and four detailed case studies showing practical application across different building types.",
    coverImage: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=900&fit=crop"
    ]
  },
  {
    id: "sustainable-neighbourhood",
    title: "Sustainable Neighbourhood Framework",
    location: "Victoria, Australia",
    year: "2023",
    discipline: ["Urban Design"],
    shortDescription: "A framework for creating sustainable, resilient neighbourhoods that prioritize walking, green spaces, and community connection.",
    overview: "This project developed a practical framework for sustainable neighbourhood design, translating broad sustainability principles into actionable urban design outcomes.",
    objectives: [
      "Reduce car dependency through design",
      "Maximize green infrastructure",
      "Foster community interaction",
      "Ensure long-term resilience"
    ],
    approach: "The framework was developed through literature review, case study analysis, and extensive stakeholder consultation across multiple Victorian councils.",
    outcomes: "Adopted framework with design standards, checklist, and training materials for council planners.",
    coverImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=1200&h=900&fit=crop"
    ]
  },
  {
    id: "mixed-use-precinct",
    title: "Mixed-Use Precinct Design",
    location: "Melbourne, Australia",
    year: "2022",
    discipline: ["Architecture", "Urban Planning"],
    shortDescription: "A mixed-use development integrating residential, commercial, and community spaces around a vibrant public realm.",
    overview: "This project involved the design of a new mixed-use precinct in Melbourne's inner north, combining housing, retail, and community facilities around a carefully designed public plaza.",
    objectives: [
      "Create a vibrant 24-hour precinct",
      "Integrate diverse uses successfully",
      "Design high-quality public spaces",
      "Achieve sustainability targets"
    ],
    approach: "Through iterative design development and careful analysis of pedestrian movements, sunlight access, and activity patterns, we created a precinct that functions throughout the day and evening.",
    outcomes: "Approved development application with design excellence recognition from the Urban Design Awards.",
    coverImage: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=900&fit=crop"
    ]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(p => p.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(p => p.featured);
};

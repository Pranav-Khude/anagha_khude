export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "Urban Planning",
    skills: [
      "Strategic Planning",
      "Statutory Planning",
      "Structure Planning",
      "Policy Analysis",
      "Housing Strategy",
      "Urban Regeneration"
    ]
  },
  {
    title: "Urban Design",
    skills: [
      "Masterplanning",
      "Public Realm Design",
      "Precinct Planning",
      "Spatial Analysis",
      "Place-Making"
    ]
  },
  {
    title: "Architecture",
    skills: [
      "Architectural Design",
      "Concept Development",
      "Adaptive Reuse",
      "Heritage",
      "Construction Documentation"
    ]
  },
  {
    title: "Tools",
    skills: [
      "AutoCAD",
      "Rhino",
      "Adobe Creative Suite",
      "ArcGIS / QGIS",
      "SketchUp",
      "Microsoft Office"
    ]
  }
];

export const cvSections = [
  {
    title: "Education",
    items: [
      "Master of Urban Planning & Design, University of Melbourne (2023–2025)",
      "Bachelor of Architecture, School of Planning and Architecture (2017–2022)"
    ]
  },
  {
    title: "Professional Experience",
    items: [
      "Urban Planning Intern, Planning Studio, Melbourne (2024–2025)",
      "Graduate Architectural Designer, Design Practice, India (2022–2023)",
      "Research Assistant, Urban Planning Lab, University of Melbourne (2024)"
    ]
  },
  {
    title: "Selected Projects",
    items: [
      "Fishermans Bend Urban Renewal, Melbourne (2025)",
      "Melton Housing Strategy, Victoria (2024)",
      "City Plan 2036, Urban Strategy (2024)",
      "Adaptive Reuse & Heritage Study (2023)",
      "Sustainable Neighbourhood Framework (2023)"
    ]
  },
  {
    title: "Skills",
    items: [
      "Strategic Planning, Statutory Planning, Structure Planning",
      "Masterplanning, Public Realm Design, Place-Making",
      "Architectural Design, Construction Documentation"
    ]
  },
  {
    title: "Software",
    items: [
      "AutoCAD, Rhino, SketchUp",
      "Adobe Creative Suite (Illustrator, InDesign, Photoshop)",
      "ArcGIS, QGIS",
      "Microsoft Office"
    ]
  }
];

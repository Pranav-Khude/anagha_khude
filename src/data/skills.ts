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

export const cvSections = [];

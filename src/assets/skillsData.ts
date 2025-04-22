export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiency: number; // 0-100
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", proficiency: 95 },
      { name: "TypeScript", proficiency: 90 },
      { name: "JavaScript", proficiency: 95 },
      { name: "HTML5/CSS3", proficiency: 90 },
      { name: "Next.js", proficiency: 85 },
      { name: "Tailwind CSS", proficiency: 90 },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", proficiency: 85 },
      { name: "Express", proficiency: 90 },
      { name: "MongoDB", proficiency: 80 },
      { name: "PostgreSQL", proficiency: 75 },
      { name: "GraphQL", proficiency: 70 },
      { name: "REST API", proficiency: 95 },
    ]
  },
  {
    category: "DevOps/Tools",
    skills: [
      { name: "Git", proficiency: 90 },
      { name: "Docker", proficiency: 75 },
      { name: "AWS", proficiency: 65 },
      { name: "CI/CD", proficiency: 70 },
      { name: "Jest", proficiency: 80 },
      { name: "Webpack", proficiency: 75 },
    ]
  },
  {
    category: "Other",
    skills: [
      { name: "UI/UX Design", proficiency: 70 },
      { name: "Agile/Scrum", proficiency: 85 },
      { name: "Problem Solving", proficiency: 90 },
      { name: "Communication", proficiency: 85 },
    ]
  }
];
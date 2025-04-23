export interface ProjectType {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink?: string;
  githubLink?: string;
  featured: boolean;
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    description: "Sit fugit reprehenderit est omnis fugiat quo impedit assumenda est reprehenderit quia et dignissimos officia",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoLink: "https://maulimogal.com",
    githubLink: "https://github.com/maulimogal",
    featured: true
  },
  {
    id: 2,
    title: "Qui dolores vitae",
    description: "Ab facere ducimus ad quasi deserunt ut consequuntur assumenda aut reiciendis accusamus.",
    technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoLink: "https://maulimogal.com",
    githubLink: "https://github.com/maulimogal",
    featured: true
  },
  {
    id: 3,
    title: "qui mollitia dolorem",
    description: "Sit fugit reprehenderit est omnis fugiat quo impedit assumenda est reprehenderit quia et dignissimos officia",
    technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoLink: "https://maulimogal.com",
    githubLink: "https://github.com/maulimogal",
    featured: false
  },
  {
    id: 4,
    title: "qui mollitia dolorem",
    description: "Quo provident repudiandae et pariatur enim id maiores sunt.",
    technologies: ["Next.js", "GraphQL", "Social Media APIs", "D3.js"],
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoLink: "https://maulimogal.com",
    githubLink: "https://github.com/maulimogal",
    featured: true
  },
  {
    id: 5,
    title: "Lorem ipsum dolor",
    description: "Ab facere ducimus ad quasi deserunt ut consequuntur assumenda aut reiciendis accusamus.",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "AWS S3"],
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoLink: "https://maulimogal.com",
    githubLink: "https://github.com/maulimogal",
    featured: false
  },
  {
    id: 6,
    title: "Qui dolores vitae",
    description: "Quo provident repudiandae et pariatur enim id maiores sunt.",
    technologies: ["React", "Express", "MongoDB", "Google Maps API"],
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoLink: "https://maulimogal.com",
    githubLink: "https://github.com/maulimogal",
    featured: false
  }
];
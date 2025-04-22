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
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with product management, cart functionality, and secure payment processing.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoLink: "https://demo-ecommerce.example.com",
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, task assignment, and progress tracking.",
    technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoLink: "https://task-app.example.com",
    githubLink: "https://github.com/yourusername/task-management",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather application providing current conditions and forecasts for locations worldwide.",
    technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoLink: "https://weather-app.example.com",
    githubLink: "https://github.com/yourusername/weather-dashboard",
    featured: false
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media managers to track performance metrics across platforms.",
    technologies: ["Next.js", "GraphQL", "Social Media APIs", "D3.js"],
    image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoLink: "https://social-dashboard.example.com",
    githubLink: "https://github.com/yourusername/social-dashboard",
    featured: true
  },
  {
    id: 5,
    title: "Recipe Sharing Platform",
    description: "A community-driven recipe sharing platform with search, filtering, and user accounts.",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "AWS S3"],
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoLink: "https://recipe-app.example.com",
    githubLink: "https://github.com/yourusername/recipe-platform",
    featured: false
  },
  {
    id: 6,
    title: "Real Estate Listings",
    description: "A real estate platform with property listings, search filters, and map integration.",
    technologies: ["React", "Express", "MongoDB", "Google Maps API"],
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoLink: "https://realestate.example.com",
    githubLink: "https://github.com/yourusername/real-estate",
    featured: false
  }
];
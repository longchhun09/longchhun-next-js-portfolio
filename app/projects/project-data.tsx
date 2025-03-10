export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Laravel Inertia Vue.js",
    year: 2025,
    description: "Developed a Laravel Inertia Vue.js web application, web site for media company service. Implemented RESTful APIs, optimized performance, and integrated with third-party services.",
    url: "https://cbmedia-asia.com",
  },
  {
    title: "Enterprise Web Portal",
    year: 2024,
    description: "Led development of a Vue.js and TypeScript-based enterprise web portal for a Community training & Collaboration Platform. Implemented responsive UI components, optimized performance, and integrated with REST APIs.",
    url: "https://crosswired.com",
  },
];

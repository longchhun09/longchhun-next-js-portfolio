export interface Project {
  title: string;
  year: number;
  endYear?: number;
  description: string;
  size: "small" | "large" | "medium";
  techStack?: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: "CB Media Website",
    year: 2025,
    description: "Developed a Laravel Inertia Vue.js web application, web site for media company service. Implemented RESTful APIs, optimized performance, and integrated with third-party services.",
    url: "https://cbmedia-asia.com",
    techStack: ["Vue.js", "Laravel", "Tailwind CSS", "ViteJs", "Inertia.js"],
    size: "small",
  },
  {
    title: "Enterprise Web Portal",
    endYear: 2024,
    year: 2019,
    size: "large",
    description: "Led development of a Vue.js and TypeScript-based enterprise web portal for a Community training & Collaboration Platform. Implemented responsive UI components, optimized performance, and integrated with REST APIs.",
    techStack: ["Vue.js", "TypeScript", "Tailwind CSS", "Liferay DXP", "Java", "REST"],
    url: "https://www.khalibre.com/capacity-building-platform",
  },
];

export interface Project {
  title: string;
  year: number;
  endYear?: number;
  description: string;
  size: "small" | "large" | "medium";
  img?: string;
  techStack?: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: "CB Media Website",
    year: 2025,
    img: "/photos/cb-media.png",
    description: "Developed a Laravel Inertia Vue.js web application, web site for media company service. Implemented RESTful APIs, optimized performance, and integrated with third-party services.",
    url: "https://cbmedia-asia.com",
    techStack: ["Vue.js", "Laravel", "Tailwind CSS", "ViteJs", "Inertia.js", "Filament", "MySQL", "REST"],
    size: "small",
  },
  {
    title: "Ve-Cert Landing Page",
    year: 2025,
    img: "/photos/ve-cert.png",
    description: "Developed a responsive landing page for a certification platform using Next.js and Tailwind CSS. Implemented SEO best practices, optimized performance, and integrated with third-party services.",
    url: "https://vecert.com",
    techStack: ["Vue.js", "Tailwind CSS", "Vercel", "SEO", "Php", "REST"],
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

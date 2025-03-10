export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Enterprise Web Portal",
    year: 2023,
    description: "Led development of a Vue.js and TypeScript-based enterprise web portal for a major financial institution. Implemented responsive UI components, optimized performance, and integrated with REST APIs.",
    url: "https://khalibre.com/projects",
  },
  {
    title: "Liferay DXP Intranet Platform",
    year: 2022,
    description: "Designed and implemented a comprehensive intranet solution based on Liferay DXP for a corporate client. Developed custom portlets, theme components, and integrated with enterprise systems.",
    url: "https://liferay.khalibre.com",
  },
  {
    title: "E-commerce Platform",
    year: 2021,
    description: "Built a robust e-commerce platform using Vue.js and Nuxt.js with TypeScript. Implemented features including product catalog, shopping cart, payment integration, and admin dashboard.",
    url: "https://github.com/longchhun/ecommerce-platform",
  },
  {
    title: "PHP CMS Application",
    year: 2020,
    description: "Developed a custom content management system using PHP and MySQL. Created a flexible architecture allowing for easy content editing, user management, and plugin extensions.",
    url: "https://github.com/longchhun/php-cms",
  },
  {
    title: "Automated Testing Framework",
    year: 2019,
    description: "Designed and implemented an end-to-end testing framework using Selenium, Cypress, and Jest. Reduced testing time by 60% and increased test coverage across multiple web applications.",
    url: "https://github.com/longchhun/test-automation",
  },
  {
    title: "Healthcare Management System",
    year: 2018,
    description: "Built a comprehensive healthcare management system using Java and Liferay DXP. Implemented patient records management, appointment scheduling, and billing modules.",
    url: "https://healthcare.khalibre.com",
  },
];

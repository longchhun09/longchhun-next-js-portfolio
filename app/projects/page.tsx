import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Long Chhun - Projects",
  description: "Projects developed by Long Chhun, a Senior Frontend Developer with expertise in Vue.js, TypeScript, PHP, and Java",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight">Projects</h1>
      <p className="mb-8 text-neutral-700 dark:text-neutral-300">
        With over 9 years of experience in software development, I've worked on a variety of projects 
        ranging from enterprise web applications to e-commerce platforms. Below are some of the key 
        projects I've contributed to, showcasing my expertise in Vue.js, TypeScript, Liferay DXP, PHP, 
        and Java.
      </p>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="p-5 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-200"
          >
            <div className="w-full flex flex-col space-y-3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <h2 className="text-xl font-medium text-black dark:text-white">{project.title}</h2>
                <span className="mt-1 sm:mt-0 text-sm font-medium px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full">
                  {project.year}
                </span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-[15px] leading-relaxed">
                {project.description}
              </p>
              <div>
                <Link
                  href={project.url}
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

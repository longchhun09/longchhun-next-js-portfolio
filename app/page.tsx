import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section className="py-10 md:py-16">
      {/* Hero Container */}
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Image Column */}
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <div className="relative">
              <Image
                src="/profile.jpg"
                alt="Long Chhun - Software Developer"
                className="rounded-lg shadow-md border-2 border-neutral-200 dark:border-neutral-800"
                unoptimized
                width={200}
                height={200}
                priority
              />
            </div>
          </div>
          
          {/* Content Column */}
          <div className="md:w-2/3 flex flex-col text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
              Long Chhun
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-neutral-600 dark:text-neutral-400 mb-5">
              Software Developer
            </h2>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-lg mb-4">
                Based in Phnom Penh, Cambodia, currently working as a Senior Frontend Developer at Khalibre Co., Ltd with over 9 years of experience in web development.
              </p>
              <p className="mb-4">
                I specialize in building modern, efficient web applications with expertise in Vue.js, TypeScript, Liferay DXP, PHP, and automation testing. 
                My focus is on creating user-friendly interfaces that deliver exceptional experiences across all devices.
              </p>
              <p className="mb-6">
                My technical skills include Vue.js, TypeScript, PHP, Java, Automation Testing, and modern frontend workflows. 
                I have extensive experience in designing scalable architecture for enterprise applications and implementing complex UI requirements efficiently.
              </p>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                <a 
                  href={socialLinks.cv} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-100  dark:bg-neutral-700 hover:text-white rounded-md hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors"
                  aria-label="Download CV"
                >
                  Download CV
                </a>
                <a 
                  href={socialLinks.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-100 dark:bg-neutral-800 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                  aria-label="GitHub Profile"
                >
                  GitHub
                </a>
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-100 dark:bg-neutral-800 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

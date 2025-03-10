import Link from "next/link";
import type { Metadata } from "next";
import { formatDate, getBlogPosts } from "app/lib/posts";

export const metadata: Metadata = {
  title: "Long Chhun - Blog",
  description: "Professional insights and experiences from Long Chhun, a Senior Frontend Developer specializing in Vue.js, TypeScript, and web development",
};
export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight">Long Chhun's Blog</h1>
      <p className="mb-8 text-neutral-700 dark:text-neutral-300">
        With over 9 years of experience in software development, I share my insights, learnings, and
        perspectives on modern web development. My articles focus on Vue.js, TypeScript, PHP, 
        frontend architecture, and best practices I've adopted throughout my career at companies 
        like Khalibre Co., Ltd and across various enterprise projects.
      </p>
      <div className="space-y-6">
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-5 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-200"
            >
              <div className="w-full flex flex-col space-y-2">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <h2 className="text-xl font-medium text-black dark:text-white">
                    {post.metadata.title}
                  </h2>
                  <span className="mt-1 sm:mt-0 text-sm font-medium px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full">
                    {formatDate(post.metadata.publishedAt, false)}
                  </span>
                </div>
                {post.metadata.summary && (
                  <p className="text-neutral-600 dark:text-neutral-400 text-[15px] leading-relaxed">
                    {post.metadata.summary}
                  </p>
                )}
                <div className="pt-1">
                  <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                    Read article
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { highlight } from "sugar-high";
import "katex/dist/katex.min.css";

function CustomLink(props) {
  let href = props.href;
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }
  if (href.startsWith("#")) {
    return <a {...props} />;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr className="text-left">{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children);
    const props = { id: slug };
    
    switch (level) {
      case 1:
        return <h1 {...props}>{children}</h1>;
      case 2:
        return <h2 {...props}>{children}</h2>;
      case 3:
        return <h3 {...props}>{children}</h3>;
      case 4:
        return <h4 {...props}>{children}</h4>;
      case 5:
        return <h5 {...props}>{children}</h5>;
      case 6:
        return <h6 {...props}>{children}</h6>;
      default:
        return <h1 {...props}>{children}</h1>;
    }
  };
  Heading.displayName = `Heading${level}`;
  return Heading;
}

let components = {
  a: CustomLink,
  code: Code,
};

function markdownToHtml(markdown: string): string {
  // Process code blocks first with syntax highlighting
  let html = markdown;
  
  // Handle code blocks with syntax highlighting
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/gim, (match, lang, code) => {
    const trimmedCode = code.trim();
    const highlightedCode = highlight(trimmedCode);
    return `<pre><code class="language-${lang || 'plaintext'}">${highlightedCode}</code></pre>`;
  });
  
  // Process remaining markdown
  html = html
    // Images (process before links)
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/gim, '<img src="$2" alt="$1" class="rounded-lg my-6 w-full" />')
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*([^\*]+)\*\*/gim, '<strong>$1</strong>')
    // Italic (but not list items)
    .replace(/(?<!\*)\*([^\*\n]+)\*(?!\*)/gim, '<em>$1</em>')
    // Inline code
    .replace(/`([^`]+)`/gim, '<code>$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Blockquotes
    .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
    // Lists (unordered)
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/^\* (.*$)/gim, '<li>$1</li>')
    // Numbered lists
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>');
  
  // Group consecutive list items into ul tags
  html = html.replace(/(<li>.*?<\/li>\s*)+/gs, (match) => {
    return `<ul>${match}</ul>`;
  });
  
  // Split by double newlines for paragraphs
  const paragraphs = html.split(/\n\n+/);
  
  // Wrap content in paragraphs, but skip pre/code blocks, headers, lists, blockquotes, and images
  html = paragraphs.map(para => {
    para = para.trim();
    if (!para) return '';
    
    // Don't wrap if it's already a block element or an image
    if (para.match(/^<(pre|h[1-6]|ul|ol|blockquote|div|img)/)) {
      return para;
    }
    
    return `<p>${para.replace(/\n/g, '<br>')}</p>`;
  }).join('\n');
  
  return html;
}

export function CustomMDX(props) {
  const htmlContent = markdownToHtml(props.source);
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

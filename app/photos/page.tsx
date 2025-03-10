import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Project Showcase - Long Chhun",
  description: "Project Showcase",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">WebSites</h1>
      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/cb-media.png", alt: "CB Media website" },
          { src: "/photos/ve-cert.png", alt: "Ve-Cert Landing page" },
        ]}
      />
    </section>
  );
}

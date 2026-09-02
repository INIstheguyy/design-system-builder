import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";

import { WhatIDo } from "@/components/portfolio/WhatIDo";
import { SystemsMap } from "@/components/portfolio/SystemsMap";
import { Work } from "@/components/portfolio/Work";
import { Experiments } from "@/components/portfolio/Experiments";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Inioluwa Komolafe — Systems Engineer, Web & Mobile";
const description =
  "Portfolio of Inioluwa Komolafe (inistheguyy): front-end and systems engineer building accessible, responsive web and mobile interfaces in React and TypeScript.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-surface-1">
      <Nav />
      <main>
        <Hero />
        <WhatIDo />
        <SystemsMap />
        <Work />
        <Experiments />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

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
        <section id="what-i-do" className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-40">
          <h2 className="font-display text-xs font-medium tracking-[0.2em] text-ink-4 uppercase">
            What I Do
          </h2>
          <SystemsMap />
          <WhatIDo />
        </section>
        <Work />
        <Experiments />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

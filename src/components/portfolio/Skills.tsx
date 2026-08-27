import { useState } from "react";

import { skills } from "@/lib/portfolio-data";

export function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-40">
      <h2 className="font-display text-xs font-medium tracking-[0.2em] text-ink-4 uppercase">
        Skills
      </h2>
      <ul
        className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
        onMouseLeave={() => setHovered(null)}
      >
        {skills.map((skill) => {
          const isActive = hovered === skill;
          const dimmed = hovered !== null && !isActive;
          return (
            <li
              key={skill}
              onMouseEnter={() => setHovered(skill)}
              onFocus={() => setHovered(skill)}
              onBlur={() => setHovered(null)}
              tabIndex={0}
              className={`font-display text-2xl tracking-tight transition-all duration-300 outline-none md:text-4xl ${
                isActive
                  ? "font-bold text-ink-1"
                  : dimmed
                    ? "font-medium text-ink-4"
                    : "font-medium text-ink-2"
              }`}
            >
              {skill}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

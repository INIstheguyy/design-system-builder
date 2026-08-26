import { skills } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-40">
      <h2 className="font-display text-xs font-medium tracking-[0.2em] text-ink-4 uppercase">
        Skills
      </h2>
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="font-display text-2xl font-medium tracking-tight text-ink-2 transition-colors md:text-4xl"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

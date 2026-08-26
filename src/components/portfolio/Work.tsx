import { projects } from "@/lib/portfolio-data";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-40">
      <h2 className="font-display text-xs font-medium tracking-[0.2em] text-ink-4 uppercase">
        Work
      </h2>
      <ul className="mt-10 border-t border-hairline">
        {projects.map((project) => (
          <li key={project.title} className="border-b border-hairline py-10">
            <article className="grid gap-6 md:grid-cols-[1fr_2fr]">
              <div>
                <h3 className="font-display text-3xl font-semibold tracking-tight text-ink-1 md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-ink-4">{project.year}</p>
              </div>
              <div>
                <p className="max-w-xl text-lg leading-relaxed text-ink-2">
                  {project.summary}
                </p>
                <p className="mt-4 text-sm text-ink-3">{project.stack.join(" · ")}</p>
                <div className="mt-6 flex flex-wrap gap-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="border-b border-ink-4 pb-0.5 text-sm text-ink-1 transition-colors hover:border-ink-1"
                  >
                    Live demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="border-b border-hairline pb-0.5 text-sm text-ink-3 transition-colors hover:border-ink-2 hover:text-ink-1"
                  >
                    Source
                  </a>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

import { socials } from "@/lib/portfolio-data";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-40">
      <h2 className="font-display text-xs font-medium tracking-[0.2em] text-ink-4 uppercase">
        Contact
      </h2>
      <p className="mt-10 max-w-2xl font-display text-4xl leading-tight font-semibold tracking-tight text-ink-1 md:text-6xl">
        Got something worth building? Let's talk.
      </p>
      <a
        href="mailto:inistheguyy@gmail.com"
        className="mt-10 inline-block border-b border-ink-3 pb-1 text-lg text-ink-1 transition-colors hover:border-ink-1"
      >
        inistheguyy@gmail.com
      </a>
      <ul className="mt-10 flex flex-wrap gap-8">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-ink-3 transition-colors hover:text-ink-1"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

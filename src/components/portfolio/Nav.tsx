import { sections } from "@/lib/portfolio-data";

export function Nav() {
  return (
    <header className="w-full border-b border-hairline">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 md:px-10"
      >
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-ink-1"
        >
          inistheguyy
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-sm text-ink-3 transition-colors hover:text-ink-1"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-sm text-ink-2 transition-colors hover:text-ink-1 md:hidden"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

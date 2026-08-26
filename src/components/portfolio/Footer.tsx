import { socials } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-hairline pt-20">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <ul className="flex flex-wrap justify-center gap-8">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-ink-3 transition-colors hover:text-ink-1"
              >
                {s.handle}
              </a>
            </li>
          ))}
        </ul>
        <p
          aria-hidden="true"
          className="mt-10 select-none overflow-hidden font-display text-[15vw] leading-[0.8] font-semibold tracking-tighter whitespace-nowrap text-ink-4"
        >
          INISTHEGUYY
        </p>
        <p className="sr-only">INISTHEGUYY</p>
      </div>
    </footer>
  );
}

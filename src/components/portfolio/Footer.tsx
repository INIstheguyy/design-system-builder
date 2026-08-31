import { socials } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-hairline pt-20 pb-10">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        {/* Carve: the handles are painted in the page colour, so their glyphs
            knock a hole straight through the large wordmark behind them. */}
        <div className="relative isolate">
          <p
            aria-hidden="true"
            className="font-display overflow-hidden text-[15vw] leading-[0.8] font-semibold tracking-tighter whitespace-nowrap text-ink-2 select-none"
          >
            INISTHEGUYY
          </p>
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
            <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${s.label}: ${s.handle}`}
                    className="font-display block text-sm font-bold tracking-[0.18em] text-surface-1 uppercase transition-colors hover:text-ink-1 md:text-base"
                  >
                    {s.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="sr-only">INISTHEGUYY</p>
        <p className="mt-10 text-center text-xs text-ink-4">
          © {new Date().getFullYear()} Inioluwa Komolafe
        </p>
      </div>
    </footer>
  );
}

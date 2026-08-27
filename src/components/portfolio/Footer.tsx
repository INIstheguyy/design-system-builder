import { socials } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-hairline pt-20 pb-10">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="relative">
          <p
            aria-hidden="true"
            className="select-none overflow-hidden font-display text-[15vw] leading-[0.8] font-semibold tracking-tighter whitespace-nowrap text-ink-2"
          >
            INISTHEGUYY
          </p>
          {/* Carve: the handles strip knocks a band out of the large wordmark */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2">
            <ul className="pointer-events-auto flex flex-wrap items-center justify-center gap-6 bg-surface-1 py-2 md:gap-10">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-display text-xs tracking-[0.18em] text-ink-3 uppercase transition-colors hover:text-ink-1 md:text-sm"
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

import { socials } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-hairline pt-20 pb-10">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        {/* Carve: the handle strip is a solid band of page colour laid over the
            wordmark, and the handle glyphs are knocked out of that band with
            destination-out — so the letters read as cut into the big text. */}
        <div className="relative isolate">
          <p
            aria-hidden="true"
            className="font-display text-[15vw] leading-[0.8] font-semibold tracking-tighter overflow-hidden whitespace-nowrap text-ink-2 select-none"
          >
            INISTHEGUYY
          </p>
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-surface-1">
            <ul className="flex flex-wrap items-center justify-center gap-6 py-2 md:gap-10">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${s.label}: ${s.handle}`}
                    className="font-display block text-sm font-bold tracking-[0.18em] uppercase text-ink-1 transition-opacity hover:opacity-70 md:text-base"
                    style={{ mixBlendMode: "destination-out" }}
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

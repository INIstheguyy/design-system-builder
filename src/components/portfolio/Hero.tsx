import { SystemsWireframe } from "./SystemsWireframe";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-40">
      <h1 className="font-display text-5xl leading-[0.95] font-semibold tracking-tight text-ink-1 md:text-7xl">
        Inioluwa
        <br />
        Komolafe
      </h1>
      <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-16">
        <p className="max-w-md text-lg leading-relaxed text-ink-2">
          Systems engineer across web and mobile. I build accessible, responsive
          interfaces — and the systems underneath them — with a bias for clean code
          and how everything connects.
        </p>
        <div className="max-w-sm">
          <SystemsWireframe />
        </div>
      </div>
    </section>
  );
}

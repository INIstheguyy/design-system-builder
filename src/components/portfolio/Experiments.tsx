export function Experiments() {
  return (
    <section
      id="experiments"
      className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-40"
    >
      <h2 className="font-display text-xs font-medium tracking-[0.2em] text-ink-4 uppercase">
        Experiments
      </h2>
      <div className="mt-10 max-w-2xl">
        <p className="text-2xl leading-snug font-medium text-ink-1 md:text-3xl">
          A public scratchpad for motion practice.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-ink-3">
          Scroll-driven timelines, masked transitions, and small interaction studies
          land here as they get built. Nothing polished — just the working out.
        </p>
        <div className="mt-10 rounded-lg border border-dashed border-hairline bg-surface-2 px-6 py-12 text-center">
          <p className="text-sm text-ink-4">First experiment coming soon.</p>
        </div>
      </div>
    </section>
  );
}

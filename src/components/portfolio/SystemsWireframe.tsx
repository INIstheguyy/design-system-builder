import { wireframeNodes } from "@/lib/portfolio-data";

export function SystemsWireframe() {
  return (
    <figure
      aria-label="Systems diagram: Client to Middleware to Server to Third-party"
      className="w-full"
    >
      <ul className="flex flex-col items-stretch gap-0 md:flex-row md:items-center">
        {wireframeNodes.map((node, i) => (
          <li key={node} className="flex flex-col items-center md:flex-row md:flex-1">
            <span className="w-full rounded-md border border-hairline bg-surface-2 px-3 py-2 text-center text-[11px] font-medium tracking-wide text-ink-2 uppercase md:w-auto md:flex-1">
              {node}
            </span>
            {i < wireframeNodes.length - 1 && (
              <span
                aria-hidden="true"
                className="my-2 h-6 w-px bg-hairline md:my-0 md:mx-3 md:h-px md:w-6"
              />
            )}
          </li>
        ))}
      </ul>
      <figcaption className="mt-3 text-xs text-ink-4">
        Request and response, end to end.
      </figcaption>
    </figure>
  );
}

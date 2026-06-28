import { ArrowUpRight } from "lucide-react";

export function SectionHeading({
  icon,
  eyebrow,
  heading,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  heading: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#1e40af] text-white [&>svg]:h-5 [&>svg]:w-5">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1d4ed8]">
          {eyebrow}
        </p>
        <h1 className="mt-2 font-serif text-3xl leading-tight text-[#1e40af] sm:text-4xl">
          {heading}
        </h1>
      </div>
    </div>
  );
}

export function ContentShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f8fbff] text-stone-950">
      {children}
    </main>
  );
}

export function PagePanel({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {children}
    </section>
  );
}

export function List({ items, compact = false }: { items: string[]; compact?: boolean }) {
  return (
    <ul className={compact ? "mt-4 space-y-2" : "mt-6 space-y-3"}>
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm leading-6 text-stone-700">
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#1d4ed8]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

"use client";

import { ExternalLink, FileText } from "lucide-react";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { ContentShell, PagePanel } from "@/components/ui";
import { publications, type PresentationItem, type PublicationItem } from "@/content/publications";

export default function PublicationsPage() {
  const [showAllPublications, setShowAllPublications] = useState(false);
  const visiblePublications = showAllPublications
    ? publications.refereed
    : publications.refereed.slice(0, 6);

  return (
    <ContentShell>
      <SiteHeader />
      <PagePanel>
        <h1 className="font-serif text-4xl leading-tight text-[#1e40af] sm:text-5xl">
          Publications
        </h1>
        <PublicationGroup>
          {visiblePublications.map((item) => (
            <PublicationCard key={item.title} item={item} />
          ))}
          {publications.refereed.length > 6 ? (
            <div className="flex justify-center pt-3">
              <button
                type="button"
                onClick={() => setShowAllPublications((current) => !current)}
                className="rounded border border-[#1e40af]/20 bg-white px-5 py-2 text-sm font-semibold text-[#1e40af] transition hover:border-[#1e40af] hover:bg-[#1e40af] hover:text-white"
              >
                {showAllPublications ? "Show fewer" : "Show all publications"}
              </button>
            </div>
          ) : null}
        </PublicationGroup>
      </PagePanel>
    </ContentShell>
  );
}

function PublicationGroup({ children }: { children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <div className="mt-5 grid gap-4">{children}</div>
    </section>
  );
}

function PublicationCard({ item }: { item: PublicationItem }) {
  return (
    <article className="portfolio-card grid gap-4 rounded border border-stone-200 bg-white p-5 hover:border-[#1e40af]/30 hover:bg-white sm:grid-cols-[1fr_auto]">
      <div>
        <p className="text-sm font-medium leading-6 text-stone-600">{item.authors}</p>
        <h3 className="mt-2 font-semibold leading-7 text-[#1e40af]">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-stone-700">{item.details}</p>
      </div>
      <PublicationActions item={item} />
    </article>
  );
}

function PresentationCard({ item }: { item: PresentationItem }) {
  return (
    <article className="portfolio-card grid gap-4 rounded border border-stone-200 bg-white p-5 hover:border-[#1e40af]/30 hover:bg-white sm:grid-cols-[1fr_auto]">
      <div>
        <h3 className="font-semibold leading-7 text-[#1e40af]">{item.title}</h3>
        <div className="mt-2 space-y-1">
          {item.details.map((detail) => (
            <p key={detail} className="text-sm leading-6 text-stone-700">
              {detail}
            </p>
          ))}
        </div>
      </div>
      <PublicationActions item={item} />
    </article>
  );
}

function PublicationActions({
  item,
}: {
  item: Pick<PublicationItem, "link" | "pdfFile">;
}) {
  if (!item.link && !item.pdfFile) {
    return null;
  }

  return (
    <div className="flex items-start gap-2 sm:justify-end">
      {item.link ? (
        <IconLink href={item.link} label="Open publication link">
          <ExternalLink />
        </IconLink>
      ) : null}

      {item.pdfFile ? (
        <IconLink href={`${publications.pdfFolder}/${item.pdfFile}`} label="Open publication PDF">
          <FileText />
        </IconLink>
      ) : null}
    </div>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded border border-[#1e40af]/20 bg-white text-[#1e40af] transition hover:border-[#1e40af] hover:bg-[#1e40af] hover:text-white [&>svg]:h-4 [&>svg]:w-4"
    >
      {children}
    </a>
  );
}

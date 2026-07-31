"use client";

import { ExternalLink, FileText } from "lucide-react";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { ContentShell, PagePanel } from "@/components/ui";
import {
  publications,
  type PublicationItem,
} from "@/content/publications";

export default function PublicationsPage() {
  const [showAllPublications, setShowAllPublications] = useState(false);

  const visiblePublications = showAllPublications
    ? publications.refereed
    : publications.refereed.slice(0, 6);

  return (
    <ContentShell>
      <SiteHeader />

      <PagePanel>
        <h1 className="font-serif text-3xl leading-tight text-[#1e40af] sm:text-5xl">
          Publications
        </h1>

        <p className="mt-3 text-sm text-stone-600">
          Showing{" "}
          {showAllPublications
            ? publications.refereed.length
            : Math.min(6, publications.refereed.length)}{" "}
          of {publications.refereed.length} publications
        </p>

        <PublicationGroup>
          {publications.refereed.length > 6 ? (
            <button
              type="button"
              onClick={() =>
                setShowAllPublications((current) => !current)
              }
              aria-expanded={showAllPublications}
              className="mb-2 w-full rounded bg-[#1e40af] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d4ed8] sm:w-auto"
            >
              {showAllPublications
                ? "Show fewer publications"
                : `Show all ${publications.refereed.length} publications`}
            </button>
          ) : null}

          {visiblePublications.map((item) => (
            <PublicationCard key={item.title} item={item} />
          ))}

          {showAllPublications &&
          publications.refereed.length > 6 ? (
            <button
              type="button"
              onClick={() => {
                setShowAllPublications(false);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="mt-2 w-full rounded border border-[#1e40af] bg-white px-5 py-3 text-sm font-semibold text-[#1e40af] transition hover:bg-[#eff6ff] sm:w-auto"
            >
              Show fewer publications
            </button>
          ) : null}
        </PublicationGroup>
      </PagePanel>
    </ContentShell>
  );
}

function PublicationGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-6 sm:mt-8">
      <div className="grid gap-3 sm:gap-4">{children}</div>
    </section>
  );
}

function PublicationCard({
  item,
}: {
  item: PublicationItem;
}) {
  return (
    <article className="portfolio-card grid gap-3 rounded border border-stone-200 bg-white p-4 hover:border-[#1e40af]/30 sm:grid-cols-[1fr_auto] sm:gap-4 sm:p-5">
      <div className="min-w-0">
        {item.authors ? (
          <p className="text-xs font-medium leading-5 text-stone-600 sm:text-sm sm:leading-6">
            {item.authors}
          </p>
        ) : null}

        <h2 className="mt-2 break-words text-[15px] font-semibold leading-6 text-[#1e40af] sm:text-base sm:leading-7">
          {item.title}
        </h2>

        <p className="mt-2 break-words text-xs leading-5 text-stone-700 sm:text-sm sm:leading-6">
          {item.details}
        </p>
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
        <IconLink
          href={item.link}
          label="Open publication link"
        >
          <ExternalLink />
        </IconLink>
      ) : null}

      {item.pdfFile ? (
        <IconLink
          href={`${publications.pdfFolder}/${item.pdfFile}`}
          label="Open publication PDF"
        >
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
      className="flex h-10 w-10 items-center justify-center rounded border border-[#1e40af]/20 bg-white text-[#1e40af] transition hover:border-[#1e40af] hover:bg-[#1e40af] hover:text-white sm:h-9 sm:w-9 [&>svg]:h-4 [&>svg]:w-4"
    >
      {children}
    </a>
  );
}

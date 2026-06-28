import { SiteHeader } from "@/components/site-header";
import { ContentShell, PagePanel } from "@/components/ui";
import { grants, honorsAwards } from "@/content/honors-awards/awards";

export default function HonorsAwardsPage() {
  return (
    <ContentShell>
      <SiteHeader />
      <PagePanel>
        <h1 className="font-serif text-4xl leading-tight text-[#1e40af] sm:text-5xl">
          Honors and Awards
        </h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {honorsAwards.map((award) => (
            <article key={`${award.title}-${award.date}`} className="portfolio-card rounded border border-stone-200 bg-white p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h2 className="font-semibold leading-7 text-[#1e40af]">{award.title}</h2>
                {award.date ? (
                  <span className="shrink-0 rounded border border-[#1e40af]/20 bg-white px-3 py-1 text-xs font-semibold text-[#1e40af]">
                    {award.date}
                  </span>
                ) : null}
              </div>
              {award.description ? (
                <p className="mt-3 text-sm leading-6 text-stone-700">{award.description}</p>
              ) : null}
            </article>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="font-serif text-3xl text-[#1e40af]">Grants</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {grants.map((grant) => (
              <article key={grant.title} className="portfolio-card rounded border border-stone-200 bg-white p-5">
                <h3 className="font-semibold leading-7 text-[#1e40af]">{grant.title}</h3>
                {grant.description ? (
                  <p className="mt-3 text-sm leading-6 text-stone-700">{grant.description}</p>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </PagePanel>
    </ContentShell>
  );
}

import { SiteHeader } from "@/components/site-header";
import { ContentShell, PagePanel } from "@/components/ui";
import { serviceGroups } from "@/content/services/services";

export default function ServicesPage() {
  return (
    <ContentShell>
      <SiteHeader />
      <PagePanel>
        <h1 className="font-serif text-4xl leading-tight text-[#1e40af] sm:text-5xl">
          Services
        </h1>
        <div className="mt-8 grid gap-8">
          {serviceGroups.map((group) => (
            <section key={group.heading}>
              {group.heading !== "Professional Activities" ? (
                <div className="flex items-center gap-3 border-b border-stone-200 pb-3">
                  <h2 className="font-serif text-2xl text-[#1e40af]">{group.heading}</h2>
                  <span className="h-px flex-1 bg-stone-200" />
                </div>
              ) : null}
              <div
                className={
                  group.heading === "University Service"
                    ? "masonry-2 mt-5"
                    : group.heading === "Professional Activities"
                      ? "grid gap-5"
                      : "mt-5 grid gap-5"
                }
              >
                {group.categories.map((category) => (
                  <section
                    key={category.title}
                    className="mb-6 break-inside-avoid"
                  >
                    <h3 className="border-b border-stone-200 pb-2 font-semibold text-[#1e40af]">
                      {category.title}
                    </h3>
                    <div
                      className={
                        category.title === "Reviewer" ||
                        category.title === "Technical Program Committee Member"
                          ? "mt-4 grid gap-3 lg:grid-cols-2"
                          : "mt-4 grid gap-3"
                      }
                    >
                      {category.items.map((item) => (
                        <div
                          key={`${item.organization}-${item.date}`}
                          className={
                            "portfolio-card rounded border border-stone-200 bg-white p-4"
                          }
                        >
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <p className="text-sm leading-6 text-stone-700">{item.organization}</p>
                            <span className="shrink-0 rounded border border-[#1e40af]/20 bg-[#f8fbff] px-3 py-1 text-xs font-semibold text-[#1e40af]">
                              {item.date}
                            </span>
                          </div>
                          {"description" in item && item.description ? (
                            <p className="mt-3 text-sm leading-6 text-stone-600">
                              {item.description}
                            </p>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </section>
          ))}
        </div>
      </PagePanel>
    </ContentShell>
  );
}

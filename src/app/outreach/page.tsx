import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { ContentShell, PagePanel } from "@/components/ui";
import { outreachActivities } from "@/content/outreach/activities";

const outreachImages = [
  "Data science workshop.jpg",
  "Girls Power at Imagination Station Science Museum.jpg",
  "Intro to engineering.jpg",
  "Toledo Excel 1.jpg",
  "Toledo Excel 2.jpg",
];

export default function OutreachPage() {
  return (
    <ContentShell>
      <SiteHeader />
      <PagePanel>
        <h1 className="font-serif text-4xl leading-tight text-[#1e40af] sm:text-5xl">
          Outreach
        </h1>

        <section className="portfolio-card mt-8 rounded border border-stone-200 bg-white p-5">
          <div className="grid gap-4 md:grid-cols-2">
            {outreachActivities.map((activity) => (
              <article
                key={`${activity.title}-${activity.date}`}
                className="border-l-2 border-[#1d4ed8] pl-4"
              >
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold leading-7 text-stone-900">
                    {activity.title}
                  </h2>
                  <p className="text-sm leading-6 text-stone-600">{activity.date}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-5xl text-left">
          <div className="grid gap-6 md:grid-cols-2">
            {outreachImages.map((imageName) => (
              <figure key={imageName}>
                <Image
                  src={`/outreach/${imageName}`}
                  alt={formatCaption(imageName)}
                  width={1600}
                  height={900}
                  className="mx-auto h-auto w-full rounded"
                />
                <figcaption className="mt-3 text-center text-sm text-stone-600">
                  {formatCaption(imageName)}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </PagePanel>
    </ContentShell>
  );
}

function formatCaption(fileName: string) {
  return fileName.replace(/\.[^.]+$/, "");
}

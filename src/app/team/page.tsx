import { Users } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ContentShell, List, PagePanel, SectionHeading } from "@/components/ui";
import { team } from "@/content/team/members";

export default function TeamPage() {
  return (
    <ContentShell>
      <SiteHeader />
      <PagePanel>
        <SectionHeading icon={<Users />} eyebrow="Team" heading="Students and collaborators" />
        <p className="mt-4 max-w-3xl leading-8 text-stone-700">{team.intro}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {team.groups.map((group) => (
            <article key={group.label} className="portfolio-card rounded border border-stone-200 bg-white p-5">
              <p className="font-semibold text-[#1e40af]">{group.label}</p>
              <List items={group.members} compact />
            </article>
          ))}
        </div>
      </PagePanel>
    </ContentShell>
  );
}

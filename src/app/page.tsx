import {
  BriefcaseBusiness,
  GraduationCap,
  Linkedin,
  Mail,
  IdCard,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { ContentShell, SectionHeading } from "@/components/ui";
import { about } from "@/content/home/about";
import { contact } from "@/content/home/contact";
import { education } from "@/content/home/education";
import { workExperience } from "@/content/home/work-experience";
import { siteProfile } from "@/content/site";

export default function Home() {
  return (
    <ContentShell>
      <SiteHeader />
      <section
        id="home"
        className="mx-auto grid w-full max-w-7xl items-start gap-8 px-4 pb-8 pt-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_10rem] lg:gap-10 lg:px-8 lg:pb-10 lg:pt-8"
      >
        <div>
          <h1 className="max-w-4xl font-serif text-4xl leading-tight text-[#1e40af] sm:text-5xl">
            {about.eyebrow}
          </h1>
          <div className="mt-4 max-w-4xl space-y-3">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-stone-700">
                <LinkedParagraph text={paragraph} />
              </p>
            ))}
          </div>
        </div>
        <PortraitPanel />
      </section>

      <section className="border-y border-stone-200 bg-[#f8fbff]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:px-8">
          <TimelineSection
            icon={<BriefcaseBusiness />}
            eyebrow=""
            heading="Work Experience"
            items={workExperience.map((item) => ({
              title: item.role,
              meta: `${item.organization} | ${item.period}`,
              details: item.details,
            }))}
          />
          <TimelineSection
            icon={<GraduationCap />}
            eyebrow=""
            heading="Education"
            items={education.map((item) => ({
              title: item.degree,
              meta: `${item.institution} | ${item.year}`,
              details: item.details,
            }))}
          />
        </div>
      </section>

      <ContactFooter />
    </ContentShell>
  );
}

function PortraitPanel() {
  return (
    <div className="mx-auto w-full max-w-[10rem] lg:mx-0 lg:justify-self-end">
      <div className="portfolio-card relative overflow-hidden rounded border border-[#1e40af]/20 p-1.5">
        <div className="absolute bottom-0 left-0 top-0 w-1.5 bg-[#1e40af]" />
        <div className="absolute right-2 top-2 h-9 w-9 border-r-4 border-t-4 border-[#1d4ed8]" />
        <div className="relative rounded border border-[#1e40af]/10 bg-[#dbeafe] p-1.5">
          <div className="flex justify-center bg-white">
            <Image
              src="/headshot/SamiaTasnim_Headshot.jpg"
              alt="Headshot of Dr. Samia Tasnim"
              width={600}
              height={900}
              priority
              className="h-44 w-full object-cover object-top"
            />
          </div>
          <div className="border-t border-[#1e40af]/10 bg-[#f8fbff] p-2">
            <p className="text-xs font-semibold text-[#1e40af]">{siteProfile.title}</p>
            <p className="mt-0.5 text-xs text-stone-700">{siteProfile.institution}</p>
          </div>
        </div>
      </div>
      <div className="mt-5 grid gap-3 px-1 text-sm text-stone-600">
        <a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-3 transition hover:text-[#1e40af]"
        >
          <Mail className="h-4 w-4 text-stone-700" />
          Email
        </a>

        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 transition hover:text-[#1e40af]"
        >
          <Linkedin className="h-4 w-4 text-[#0a66c2]" />
          LinkedIn
        </a>

        <a
          href="https://scholar.google.com/citations?user=bo89KqcAAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 transition hover:text-[#1e40af]"
        >
          <GraduationCap className="h-4 w-4 text-stone-700" />
          Google Scholar
        </a>

        <a
          href="https://orcid.org/0009-0002-1090-2887"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 transition hover:text-[#166534]"
        >
          <IdCard className="h-4 w-4 text-[#16a34a]" />
          ORCID
        </a>
      </div>
    </div>
  );
}

function LinkedParagraph({ text }: { text: string }) {
  if (text.startsWith("Research Interests:")) {
    const label = "Research Interests:";
    const content = text.slice(label.length).trim();

    return (
      <>
        <strong className="font-semibold text-stone-900">{label}</strong>{" "}
        {content}
      </>
    );
  }

  const matchingLink = about.links.find((link) => text.includes(link.text));

  if (!matchingLink) {
    return text;
  }

  const [before, after] = text.split(matchingLink.text);

  return (
    <>
      {before}
      <a
        href={matchingLink.href}
        target="_blank"
        rel="noreferrer"
        className="font-medium text-[#1d4ed8] underline decoration-[#1d4ed8]/30 underline-offset-4 hover:text-[#1e40af]"
      >
        {matchingLink.text}
      </a>
      {after}
    </>
  );
}

function TimelineSection({
  icon,
  eyebrow,
  heading,
  items,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  heading: string;
  items: Array<{ title: string; meta: string; details: string }>;
}) {
  return (
    <section className="portfolio-card scroll-mt-32 rounded border border-stone-200 bg-white p-6">
      <SectionHeading icon={icon} eyebrow={eyebrow} heading={heading} />
      <div className="mt-6 grid gap-4">
        {items.map((item) => (
          <article key={`${item.title}-${item.meta}`} className="grid gap-3 border-l-2 border-[#1d4ed8] pl-5">
            <div>
              <h3 className="font-semibold text-[#1e40af]">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-stone-500">{item.meta}</p>
            </div>
            <p className="leading-7 text-stone-700">{item.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactFooter() {
  return (
    <footer className="border-t border-[#1e40af] bg-[#1e40af] text-white">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-7 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <p className="font-serif text-2xl">{siteProfile.name}</p>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-[#dbeafe]/90">
            {siteProfile.department} | {siteProfile.institution}
          </p>
        </div>
        <div className="grid gap-2 text-sm text-[#dbeafe] sm:grid-cols-3 lg:min-w-[560px]">
          <FooterContactItem
            icon={<Mail />}
            label="Email"
            value={contact.email}
            href={`mailto:${contact.email}`}
          />
          <FooterContactItem
            icon={<MapPin />}
            label="Office"
            value={contact.office}
            subValue={contact.location}
          />
          <FooterContactItem
            icon={<Linkedin />}
            label="LinkedIn"
            value="Samia Tasnim, PhD"
            href={contact.linkedin}
          />
        </div>
      </div>
    </footer>
  );
}

function FooterContactItem({
  icon,
  label,
  value,
  subValue,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  subValue?: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="mt-0.5 text-[#dbeafe] [&>svg]:h-4 [&>svg]:w-4">{icon}</span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#dbeafe]/75">
          {label}
        </span>
        <span className="mt-1 block break-words font-medium text-white">{value}</span>
        {subValue ? (
          <span className="mt-1 block break-words text-sm text-[#dbeafe]/75">
            {subValue}
          </span>
        ) : null}
      </span>
    </>
  );

  const className =
    "flex min-h-20 gap-3 rounded border border-white/10 bg-white/[0.08] p-3 transition";

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className={`${className} hover:border-[#bfdbfe]/40 hover:bg-white/[0.14]`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={className}>
      {content}
    </div>
  );
}

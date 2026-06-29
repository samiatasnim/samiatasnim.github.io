import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { ContentShell, PagePanel } from "@/components/ui";
import { lab } from "@/content/lab/overview";

export default function LabPage() {
  return (
    <ContentShell>
      <SiteHeader />
      <PagePanel>
        <section className="mx-auto max-w-4xl text-center">
          <Image
            src="/lab/logo.png"
            alt={`${lab.name} logo`}
            width={768}
            height={768}
            className="mx-auto h-auto w-40 sm:w-52"
            priority
          />
          <h1 className="mt-6 font-serif text-4xl leading-tight text-[#1e40af] sm:text-3xl">
            {lab.name}
          </h1>
        </section>

        <section className="mx-auto mt-10 max-w-6xl text-left">
          <h2 className="font-serif text-3xl text-[#1e40af]">Overview</h2>
          <div className="mt-4 space-y-4">
            {lab.overview.map((paragraph) => (
              <p key={paragraph} className="leading-8 text-stone-700">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* <section className="mx-auto mt-10 max-w-[36rem] text-left">
          <Image
            src="/lab/RIMLAB.jpg"
            alt="Reliable and Intelligent Mobile Networks Lab"
            width={1600}
            height={900}
            className="mx-auto h-auto w-full rounded"
          />
        </section> */}


        <section className="mx-auto mt-10 max-w-6xl text-left">
          <h2 className="font-serif text-3xl text-[#1e40af]">Graduate Students</h2>
          <ul className="mt-4 grid gap-3 text-stone-700">
            {lab.graduateStudents.map((student) => (
              <MemberItem
                key={student.name}
                name={student.name}
                details={student.role}
                period={student.period}
              />
            ))}
          </ul>
        </section>

        <section className="mx-auto mt-10 max-w-6xl text-left">
          <h2 className="font-serif text-3xl text-[#1e40af]">Undergraduate Students</h2>
          <ul className="mt-4 grid gap-3 text-stone-700">
            {lab.undergraduateStudents.map((student) => (
              <MemberItem
                key={student.name}
                name={student.name}
                period={student.period}
              />
            ))}
          </ul>
        </section>

        <section className="mx-auto mt-10 max-w-6xl text-left">
          <h2 className="font-serif text-3xl text-[#1e40af]">Alumni</h2>
          <div className="mt-4 grid gap-6">
            {lab.alumniGroups.map((group) => (
              <section key={group.institution}>
                <h3 className="border-b border-stone-200 pb-2 font-semibold text-[#1e40af]">
                  {group.institution}
                </h3>
                <ul className="mt-4 grid gap-3 text-stone-700">
                  {group.members.map((member) => (
                    <MemberItem
                      key={`${member.name}-${member.period}`}
                      name={member.name}
                      details={member.details}
                      period={member.period}
                    />
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
        <section className="mx-auto mt-10 max-w-[36rem] text-left">
          <figure>
            <Image
              src="/lab/RIMLAB.jpg"
              alt="Reliable and Intelligent Mobile Networks Lab"
              width={1600}
              height={900}
              className="mx-auto h-auto w-full rounded"
            />
            <figcaption className="mt-3 text-center text-sm text-stone-600">
              RIMLAB Members 2025
            </figcaption>
          </figure>
        </section>

      </PagePanel>
    </ContentShell>
  );
}

function MemberItem({
  name,
  details,
  period,
}: {
  name: string;
  details?: string;
  period: string;
}) {
  return (
    <li className="ml-5 list-disc">
      <span className="font-medium text-stone-900">{name}</span>
      {details ? <span className="text-stone-600">, {details}</span> : null}
      <span className="text-stone-600">, {period}</span>
    </li>
  );
}

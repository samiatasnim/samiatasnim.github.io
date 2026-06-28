import { BookOpen } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ContentShell, PagePanel, SectionHeading } from "@/components/ui";
import { teaching } from "@/content/teaching/courses";

export default function TeachingPage() {
  return (
    <ContentShell>
      <SiteHeader />
      <PagePanel>
        <SectionHeading icon={<BookOpen />} eyebrow="Teaching" heading="Courses and mentoring" />

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          {teaching.appointments.map((appointment) => (
            <article key={`${appointment.role}-${appointment.institution}`} className="portfolio-card rounded border border-stone-200 bg-white p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="font-semibold text-[#1e40af]">{appointment.role}</h2>
                  <p className="mt-1 text-sm text-stone-600">{appointment.institution}</p>
                </div>
                <span className="shrink-0 rounded border border-[#1e40af]/20 bg-white px-3 py-1 text-xs font-semibold text-[#1e40af]">
                  {appointment.period}
                </span>
              </div>
              <CourseList courses={appointment.courses} />
            </article>
          ))}
        </section>

        <section className="portfolio-card mt-8 rounded border border-stone-200 bg-white p-5">
          <h2 className="font-semibold text-[#1e40af]">{teaching.seniorDesignProjectAdvisor.role}</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {teaching.seniorDesignProjectAdvisor.projects.map((project) => (
              <li
                key={`${project.title}-${project.period}`}
                className="flex flex-col gap-1 border-l-2 border-[#1d4ed8] pl-3"
              >
                <span className="text-sm font-medium text-stone-900">{project.title}</span>
                <span className="text-sm text-stone-600">{project.period}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="portfolio-card mt-8 rounded border border-stone-200 bg-white p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="font-semibold text-[#1e40af]">{teaching.teachingAssistant.role}</h2>
              <p className="mt-1 text-sm text-stone-600">{teaching.teachingAssistant.institution}</p>
            </div>
            <span className="shrink-0 rounded border border-[#1e40af]/20 bg-white px-3 py-1 text-xs font-semibold text-[#1e40af]">
              {teaching.teachingAssistant.period}
            </span>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <CourseGroup
              title="Graduate Level"
              description={teaching.teachingAssistant.graduateLevel.description}
              courses={teaching.teachingAssistant.graduateLevel.courses}
            />
            <CourseGroup
              title="Undergraduate Level"
              description={teaching.teachingAssistant.undergraduateLevel.description}
              courses={teaching.teachingAssistant.undergraduateLevel.courses}
            />
          </div>
        </section>

        <section className="mt-8 grid gap-5">
          {teaching.workshops.map((workshop) => (
            <article key={workshop.period} className="portfolio-card rounded border border-stone-200 bg-white p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="font-semibold text-[#1e40af]">{workshop.role}</h2>
                  <p className="mt-1 text-sm text-stone-600">{workshop.program}</p>
                </div>
                <span className="shrink-0 rounded border border-[#1e40af]/20 bg-white px-3 py-1 text-xs font-semibold text-[#1e40af]">
                  {workshop.period}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-stone-700">{workshop.description}</p>
            </article>
          ))}
        </section>
      </PagePanel>
    </ContentShell>
  );
}

function CourseGroup({
  title,
  description,
  courses,
}: {
  title: string;
  description: string;
  courses: string[];
}) {
  return (
    <div className="portfolio-card rounded border border-stone-200 bg-white p-4">
      <h3 className="font-semibold text-[#1e40af]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-stone-600">{description}</p>
      <CourseList courses={courses} />
    </div>
  );
}

function CourseList({ courses }: { courses: string[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5">
      {courses.map((course) => (
        <li key={course} className="text-sm leading-6 text-stone-700">
          {course}
        </li>
      ))}
    </ul>
  );
}

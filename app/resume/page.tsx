import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { PROFILE_INFO } from "../const/my-profile-info.constant";
import { PORTFOLIO_URL, RESUME_SELECTED_PROJECT_IDS, RESUME_TAGLINE } from "../const/resume.constant";

const selectedProjects = PROFILE_INFO.ProjectData.filter((project) =>
  RESUME_SELECTED_PROJECT_IDS.includes(project.id as (typeof RESUME_SELECTED_PROJECT_IDS)[number])
) as Array<(typeof PROFILE_INFO.ProjectData)[number]>;

const experienceHighlights = PROFILE_INFO.ExperienceList.slice(-4).reverse();

export default function ResumePage() {
  const { ProfileInfo, Education, SkillData, Tools } = PROFILE_INFO;

  return (
    <div
      data-resume-page
      className="resume-print-root min-h-screen bg-[#ebe4d9] px-4 py-6 text-slate-900 sm:px-6 lg:px-8 lg:py-8"
    >
      <div className="no-print mx-auto mb-4 flex max-w-[1120px] items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Back to portfolio
        </Link>
        <a
          href="./assets/pdf/ashikur_rahman.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          <FiDownload />
          Download PDF
        </a>
      </div>

      <div className="resume-paper mx-auto w-full max-w-[1120px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.16)]">
        <header className="border-b border-slate-200 bg-[#f8fafc] px-6 py-7 sm:px-8 sm:py-8 lg:px-10">
          <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
            <div className="space-y-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="flex items-center gap-4 md:w-[270px]">
                  <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-md">
                    <Image
                      src="/assets/images/Ashikur_Rahman_Nabir.jpg"
                      alt={ProfileInfo.Name}
                      width={112}
                      height={112}
                      priority
                      className="h-28 w-28 object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1 rounded-[1.5rem] border border-sky-100 bg-gradient-to-br from-sky-50 to-white px-4 py-4 shadow-sm">
                    <p className="mt-2 text-lg font-semibold leading-8 text-slate-800 sm:text-xl">
                      {RESUME_TAGLINE}
                    </p>
                    <a
                      href={PORTFOLIO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600"
                    >
                      Visit my portfolio website
                      <FiDownload className="rotate-[-90deg]" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h1 className="font-serif text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                  {ProfileInfo.Name}
                </h1>
                <p className="mt-3 text-lg font-semibold text-slate-700 sm:text-xl">
                  {ProfileInfo.Designation} | {ProfileInfo.CurrentCompanyName}
                </p>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
                  {ProfileInfo.Intro}
                </p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FaPhoneAlt className="mt-1 text-sky-700" />
                  <span>{ProfileInfo.Phone}</span>
                </div>
                <div className="flex items-start gap-3">
                  <FaEnvelope className="mt-1 text-sky-700" />
                  <span className="break-all">{ProfileInfo.Email}</span>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 text-sky-700" />
                  <span>{ProfileInfo.Address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <FaLinkedin className="mt-1 text-sky-700" />
                  <span className="break-all">linkedin.com/in/ashikur-rahmam-nabir-381085a7</span>
                </div>
                <div className="flex items-start gap-3">
                  <FaGithub className="mt-1 text-sky-700" />
                  <span className="break-all">github.com/ashike12</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-[340px_1fr]">
          <aside className="bg-[#0f172a] px-6 py-8 text-slate-100 sm:px-8 lg:px-7">
            <SectionLabel title="Career Snapshot" />
            <p className="mt-4 text-sm leading-7 text-slate-200">
              {ProfileInfo.BasicDescriptionTitle} distilled into a short recruiter read:
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
              {ProfileInfo.DescriptionList.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <SectionLabel title="Core Skills" light />
              <div className="mt-4 flex flex-wrap gap-2">
                {ProfileInfo.FocusAreas.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <SectionLabel title="Technical Stack" light />
              <div className="mt-4 space-y-2">
                {SkillData.slice(0, 7).map((skill) => (
                  <div
                    key={skill.id}
                    className="flex items-center justify-between rounded-2xl border border-slate-700/70 bg-slate-900/70 px-3 py-2 text-sm shadow-inner shadow-black/10"
                  >
                    <span>{skill.name}</span>
                    <span className="font-semibold text-sky-300">{skill.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <SectionLabel title="Tools" light />
              <div className="mt-4 grid grid-cols-2 gap-2">
                {Tools.slice(0, 8).map((tool) => (
                  <div
                    key={tool.id}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-100"
                  >
                    {tool.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <SectionLabel title="Education" light />
              <div className="mt-4 space-y-4">
                {Education.map((edu) => (
                  <div key={edu.degree} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-start gap-3">
                      <Image src={edu.instituteIcon} alt={edu.institute} className="w-10" />
                      <div>
                        <p className="text-sm font-semibold text-slate-50">{edu.degree}</p>
                        <p className="mt-2 text-xs leading-5 text-slate-300">{edu.institute}</p>
                        <p className="mt-2 text-xs font-medium text-sky-300">{edu.studyYear}</p>
                        <p className="mt-1 text-xs text-slate-300">{edu.grade}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </aside>

          <main className="px-6 py-8 sm:px-8 lg:px-10">
            <section>
              <SectionLabel title="Experience" />
              <div className="mt-4 space-y-5">
                {experienceHighlights.map((exp) => (
                  <article
                    key={exp.id}
                    className="break-inside-avoid rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">
                          {exp.duration}
                        </p>
                        <h2 className="mt-2 text-lg font-bold text-slate-950">{exp.title}</h2>
                        <p className="mt-2 text-sm font-medium text-slate-600">{exp.summary}</p>
                      </div>
                      <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                        {exp.id === "senior-software-engineer"
                          ? "Current focus"
                          : exp.id === "software-engineer"
                            ? "Leadership growth"
                            : "Product delivery"}
                      </div>
                    </div>
                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                      {exp.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-700"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <SectionLabel title="Selected Projects" />
              <div className="mt-4 grid gap-5">
                {selectedProjects.map((project) => (
                  <article
                    key={project.id}
                    className="break-inside-avoid rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">
                            {project.category}
                          </p>
                          <h2 className="mt-2 text-lg font-bold text-slate-950">{project.title}</h2>
                        </div>
                        <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                          {project.role}
                        </div>
                      </div>

                      {project.references?.length ? (
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-700">
                            References
                          </span>
                          {project.references.map((reference) => (
                            <a
                              key={reference.label}
                              href={reference.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
                            >
                              {reference.label}
                            </a>
                          ))}
                        </div>
                      ) : null}

                      <p className="text-sm leading-7 text-slate-600">{project.summary}</p>
                      <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                        {project.impact}
                      </p>

                      <ul className="grid gap-3 md:grid-cols-3">
                        {project.description.slice(0, 3).map((item) => (
                          <li
                            key={item}
                            className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-700"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      <div className="no-print mx-auto mt-4 max-w-[1120px] text-center text-xs text-slate-600">
        Print this page to generate the PDF resume. The source data stays in
        <code className="mx-1 rounded bg-white px-1.5 py-0.5">app/const/resume.constant.ts</code>
        for future updates.
      </div>
    </div>
  );
}

function SectionLabel({ title, light = false }: { title: string; light?: boolean }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className={`h-2.5 w-2.5 rounded-full ${light ? "bg-sky-300" : "bg-sky-700"}`} />
      <h3
        className={`text-xs font-black uppercase tracking-[0.35em] ${light ? "text-slate-100" : "text-slate-900"
          }`}
      >
        {title}
      </h3>
    </div>
  );
}

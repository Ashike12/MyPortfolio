"use client";

import AnimatedMuiCard from "./custom/AnimatedMuiCard";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PROFILE_INFO } from "../const/my-profile-info.constant";

type ProjectItem = (typeof PROFILE_INFO.ProjectData)[number];
type ProjectReference = {
  label: string;
  href: string;
  note?: string;
};

type ProjectWithExtras = ProjectItem & {
  references?: ProjectReference[];
};

function ProjectCard({ project, featured = false }: { project: ProjectWithExtras; featured?: boolean }) {
  const Icon = project.icon;

  return (
    <AnimatedMuiCard hoverScale={featured ? 1.02 : 1.01} startX={featured ? 120 : 80} duration={0.8}>
      <div className="flex h-full flex-col bg-[var(--color-primary-bg)] p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-white shadow-lg shadow-black/15">
              <Icon size={22} />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
                {project.category}
              </p>
              <h3 className="mt-2 text-xl font-black leading-snug text-primary">{project.title}</h3>
            </div>
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} link`}
            className="rounded-full border border-[var(--color-primary-border)] p-2 text-primary transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/10"
          >
            <FaExternalLinkAlt />
          </a>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          <span className="rounded-full border border-[var(--color-primary-border)] bg-white/5 px-3 py-1">
            {project.duration}
          </span>
          <span className="rounded-full border border-[var(--color-primary-border)] bg-white/5 px-3 py-1">
            {project.role}
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-primary opacity-80">{project.summary}</p>
        <p className="mt-4 rounded-2xl border border-[var(--color-primary-border)] bg-black/10 p-4 text-sm leading-7 text-primary opacity-85">
          {project.impact}
        </p>

        {project.references?.length ? (
          <div className="mt-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
              Reference links
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.references.map((reference) => (
                <a
                  key={reference.label}
                  href={reference.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary-border)] bg-black/10 px-3 py-2 text-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <span className="font-semibold text-primary">{reference.label}</span>
                  {reference.note && (
                    <span className="text-xs text-primary opacity-75">{reference.note}</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        ) : null}

        <ul className="mt-5 space-y-3">
          {project.description.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-primary opacity-80">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[var(--color-primary-border)] bg-white/5 px-3 py-1 text-xs font-medium text-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </AnimatedMuiCard>
  );
}

export default function Projects() {
  const featuredProjects = PROFILE_INFO.ProjectData.filter((project) => project.featured) as ProjectWithExtras[];
  const otherProjects = PROFILE_INFO.ProjectData.filter((project) => !project.featured) as ProjectWithExtras[];

  return (
    <div className="px-4">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-center text-primary text-float md:text-left">Featured Projects</h2>
          <p className="mt-3 text-center text-sm leading-7 text-primary opacity-75 md:text-left">
            A shortlist of projects that show enterprise ownership, workflow thinking, and polished delivery.
          </p>
        </div>

        <a
          href="./assets/pdf/ashikur_rahman.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-primary-border)] bg-white/5 px-5 py-3 text-sm font-semibold text-primary transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/10"
        >
          Open resume
        </a>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} featured />
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-center text-2xl text-primary md:text-left">More projects</h3>
        <div className="mt-6 space-y-6">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import AnimatedMuiCard from "./custom/AnimatedMuiCard";
import { PROFILE_INFO } from "../const/my-profile-info.constant";

export default function Experience() {
  return (
    <div className="px-4">
      <div className="max-w-3xl">
        <h2 className="text-center text-primary text-float md:text-left">Experience</h2>
        <p className="mt-3 text-center text-sm leading-7 text-primary opacity-75 md:text-left">
          A concise view of the roles that shaped how I build products, support teams, and deliver under pressure.
        </p>
      </div>

      <div className="mt-6 space-y-6">
        {PROFILE_INFO.ExperienceList.map((exp, index) => (
          <AnimatedMuiCard
            key={exp.id}
            hoverScale={1.01}
            startX={index % 2 === 0 ? 80 : -80}
            duration={0.8}
          >
            <div className="flex flex-col gap-5 bg-[var(--color-primary-bg)] p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-[var(--color-primary-border)] bg-white/5 p-2">
                  <Image className="w-10 sm:w-12" src={exp.icon} alt={exp.title} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
                    {exp.duration}
                  </p>
                  <h3 className="mt-2 text-xl font-black leading-snug text-primary">{exp.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-primary opacity-80">{exp.summary}</p>
                </div>
              </div>

              <ul className="grid gap-3 md:grid-cols-3">
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-2xl border border-[var(--color-primary-border)] bg-black/10 p-4 text-sm leading-6 text-primary opacity-80"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedMuiCard>
        ))}
      </div>
    </div>
  );
}

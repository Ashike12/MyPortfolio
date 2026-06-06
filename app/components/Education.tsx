"use client";

import Image from "next/image";
import AnimatedMuiCard from "./custom/AnimatedMuiCard";
import { PROFILE_INFO } from "../const/my-profile-info.constant";

export default function Education() {
  return (
    <div className="px-4">
      <div className="max-w-3xl">
        <h2 className="text-center text-float md:text-left">Education</h2>
        <p className="mt-3 text-center text-sm leading-7 text-primary opacity-75 md:text-left">
          The academic foundation behind the systems thinking, problem solving, and delivery discipline.
        </p>
      </div>

      <div className="mt-6 grid gap-6">
        {PROFILE_INFO.Education.map((edu) => (
          <AnimatedMuiCard key={edu.degree} hoverScale={1.01} startX={80} duration={0.8}>
            <div className="flex flex-col gap-4 bg-[var(--color-primary-bg)] p-5 sm:flex-row sm:items-center sm:p-6">
              <div className="flex items-center justify-start sm:w-24">
                <Image className="w-14" src={edu.instituteIcon} alt={edu.institute} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
                  {edu.studyYear}
                </p>
                <h3 className="mt-2 text-xl font-black leading-snug text-primary">{edu.degree}</h3>
                <p className="mt-2 text-sm leading-7 text-primary opacity-80">{edu.institute}</p>
                <p className="mt-2 text-sm font-semibold text-primary">{edu.grade}</p>
              </div>
            </div>
          </AnimatedMuiCard>
        ))}
      </div>
    </div>
  );
}

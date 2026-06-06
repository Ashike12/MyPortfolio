import { JSX } from "react";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";

const sectionClassName =
  "w-full max-w-6xl scroll-mt-28 px-4 sm:px-6 lg:px-0";

export default function Home(): JSX.Element {
  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 pb-16 pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[url('/assets/images/bg.jpg')] bg-cover bg-center opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-gradient-to-b from-black/30 via-transparent to-[var(--color-primary-bg)]" />

      <section id="home" className={sectionClassName}>
        <Profile />
      </section>

      <section id="skills" className={sectionClassName}>
        <Skills />
      </section>

      <section id="tools" className={sectionClassName}>
        <Tools />
      </section>

      <section id="experiences" className={sectionClassName}>
        <Experience />
      </section>

      <section id="projects" className={sectionClassName}>
        <Projects />
      </section>

      <section id="education" className={sectionClassName}>
        <Education />
      </section>
    </div>
  );
}

import { JSX } from "react";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center pb-10">
      <div className="bg-[url('/assets/images/bg.jpg')] absolute top-0 left-0 w-full -z-100 h-200 w-full bg-cover bg-center "></div>
      <section id="home" key="home" className=" pt-15 w-full lg:min-w-[60%] lg:max-w-[60%] md:min-w-[90%] md:max-w-[90%]">
        <Profile />
      </section>

      <section
        id="skills" key={'skills'}
        className="pt-15 w-full lg:min-w-[60%] lg:max-w-[60%] md:min-w-[90%] md:max-w-[90%]"
      >
        <Skills />
      </section>

      <section
        id="tools" key={'tools'}
        className="pt-15 w-full lg:min-w-[60%] lg:max-w-[60%] md:min-w-[90%] md:max-w-[90%]"
      >
        <Tools />
      </section>

      <section id="experiences" key={'experiences'} className=" pt-15 w-full lg:min-w-[60%] lg:max-w-[60%] md:min-w-[90%] md:max-w-[90%]">
        <Experience />
      </section>

      <section id="projects" key={'projects'} className=" pt-15 w-full lg:min-w-[60%] lg:max-w-[60%] md:min-w-[90%] md:max-w-[90%]">
        <Projects />
      </section>

      <section
        id="education" key={'education'}
        className="pt-15 w-full lg:min-w-[60%] lg:max-w-[60%] md:min-w-[90%] md:max-w-[90%]"
      >
        <Education />
      </section>
    </div>
  );
}

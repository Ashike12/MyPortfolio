"use client"; // <-- MUST be first line
import AnimatedMuiCard from "./custom/AnimatedMuiCard";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PROFILE_INFO } from "../const/my-profile-info.constant";
import { useEffect, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

export default function Projects() {
const isMobile = useIsMobile();
    return (
        <div className='felx felx-col p-4'>
            <h2 className='text-center text-primary text-float'>Projects</h2>
            {PROFILE_INFO.ProjectData.map((exp, index) =>
            (<div id={exp.id} key={exp.id}
                className="flex flex-row gap-0 pt-4">
                <div className="flex-[1] flex-col">
                    <div className="relative flex justify-center">
                        <exp.icon className="text-blue-500" size={24} />

                    </div>
                    <div className="flex-1 w-full h-full flex justify-center mt-0">
                        <div className="border-l-2 border-dashed border-gray-400 h-full" />
                    </div>
                </div>
                <div className="flex-[19] w-full">
                    {!isMobile && (<AnimatedMuiCard hoverScale={1.02} startY={0} endY={0} startX={200} endX={0} duration={1}>
                        <div className="flex flex-col justify-center min-h-32 p-4 bg-primary">
                            <div className="flex flex-row">
                                <h3 className="font-bold flex-[19] text-primary">{index + 1 + ': ' + exp.title}</h3>
                                {exp.link && (
                                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-primary pt-1 text-orange-500 text-xl hover:text-black-500">
                                        <FaExternalLinkAlt className="text-[var(--color-primary-text)]" />
                                    </a>
                                )}
                            </div>
                            <div className='border-[1px] border-primary my-2 shadow-[0_0_6px_var(--color-secondary-border)'></div>
                            <p className="text-primary"><strong>{exp.duration}</strong></p>
                            <ul className="list-disc list-inside pt-4">
                                {exp.description.map((des, index) => (
                                    <li key={index} className="text-primary"> {des} </li>
                                ))}
                            </ul>
                            <p className="pt-2 italic text-primary"><strong>Skills used: {exp.skills.join(' . ')}</strong></p>
                        </div>
                    </AnimatedMuiCard>)}
                    {isMobile && (<AnimatedMuiCard hoverScale={1.02}>
                        <div className="flex flex-col justify-center min-h-32 p-4 bg-primary">
                            <div className="flex flex-row">
                                <h3 className="font-bold flex-[19] text-primary">{index + 1 + ': ' + exp.title}</h3>
                                {exp.link && (
                                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-primary pt-1 text-orange-500 text-xl hover:text-black-500">
                                        <FaExternalLinkAlt className="text-[var(--color-primary-text)]" />
                                    </a>
                                )}
                            </div>
                            <div className='border-[1px] border-primary my-2 shadow-[0_0_6px_var(--color-secondary-border)'></div>
                            <p className="text-primary"><strong>{exp.duration}</strong></p>
                            <ul className="list-disc list-inside pt-4">
                                {exp.description.map((des, index) => (
                                    <li key={index} className="text-primary"> {des} </li>
                                ))}
                            </ul>
                            <p className="pt-2 italic text-primary"><strong>Skills used: {exp.skills.join(' . ')}</strong></p>
                        </div>
                    </AnimatedMuiCard>)}
                </div>
            </div>
            ))}
        </div>
    )
}

import Image from "next/image";
import AnimatedMuiCard from "./custom/AnimatedMuiCard";
import { FaExternalLinkAlt, FaHeadset, FaChartLine, FaQrcode, FaUsersCog, FaUserShield, FaProjectDiagram, FaLock, FaStore, FaCode } from "react-icons/fa";
import { PROFILE_INFO } from "../const/my-profile-info.constant";

export default function Projects() {

    return (
        <div className='felx felx-col p-4'>
            <h2 className='text-center'>Projects</h2>
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
                    <AnimatedMuiCard key={'tool.id'} hoverScale={1.02} startY={0} endY={0} startX={200} endX={0} duration={1}>
                        <div className="flex flex-col justify-center min-h-32 p-4">
                            <div className="flex flex-row">
                                <h3 className="font-bold flex-[19]">{index + 1 + ': ' + exp.title}</h3>
                                {exp.link && (
                                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="pt-1 text-orange-500 text-xl hover:text-black-500">
                                        <FaExternalLinkAlt />
                                    </a>
                                )}
                            </div>
                            <div className='border-[1px] border-[#b7b7b7] my-2 shadow-[0_0_6px_rgba(34,211,238,0.4)]'></div>
                            <p><strong>{exp.duration}</strong></p>
                            <ul className="list-disc list-inside pt-4">
                                {exp.description.map((des, index) => (
                                    <li key={index}> {des} </li>
                                ))}
                            </ul>
                            <p className="pt-2 italic"><strong>Skills used: {exp.skills.join(' . ')}</strong></p>
                        </div>
                    </AnimatedMuiCard>
                </div>
            </div>
            ))}
        </div>
    )
}

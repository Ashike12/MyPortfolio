import Image from "next/image";
import AnimatedMuiCard from "./custom/AnimatedMuiCard";
import { PROFILE_INFO } from "../const/my-profile-info.constant";

export default function Experience() {
    return (
        <div className='felx felx-col p-4'>
            <h2 className='text-center text-primary'>Experiences</h2>
            {PROFILE_INFO.ExperienceList.map((exp) =>
            (<div id={exp.id} key={exp.id}
                className="flex flex-row gap-0 pt-4">
                <div className="flex-[1] flex-col">
                    <div className="relative flex justify-center">
                        <Image
                            className="w-9"
                            src={exp.icon}
                            alt={exp.title}
                        />

                    </div>
                    <div className="flex-1 w-full h-full flex justify-center mt-0">
                        <div className="border-l-2 border-dotted border-gray-400 h-full" />
                    </div>
                </div>
                <div className="flex-[19] w-full">
                    <AnimatedMuiCard key={'tool.id'} hoverScale={1.01} startY={0} endY={0} startX={200} endX={0} duration={3}>
                        <div className="flex flex-col justify-center min-h-32 p-4 bg-primary">
                            <h3 className="font-bold text-primary">{exp.title}</h3>
                            <div className='border-[1px] border-primary my-2 shadow-[0_0_6px_var(--color-secondary-border)'></div>
                            <p className="text-primary"><strong>{exp.duration}</strong></p>
                            {exp.description && (<p className="text-primary">{exp.description}</p>)}
                        </div>
                    </AnimatedMuiCard>
                </div>
            </div>
            ))}
        </div>
    )
}

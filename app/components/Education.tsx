import { PROFILE_INFO } from "../const/my-profile-info.constant";
import AnimatedMuiCard from "./custom/AnimatedMuiCard";
import Image from "next/image";

export default function Education() {
    
    return (
        <div className='felx felx-col p-4'>
            <h2 className='text-center pb-4'>Education</h2>
            <AnimatedMuiCard key={'tool.id'} hoverScale={1.02} startY={0} endY={0} startX={200} endX={0} duration={1}>
                <div className="flex flex-col justify-center min-h-32 p-4 bg-primary">
                    {PROFILE_INFO.Education.map((edu, index) =>
                    (<div>
                        <div className="flex flex-row">
                            <h3 className="font-bold flex-[19] text-primary">{edu.degree}</h3>
                        </div>
                        <div className="flex flex-row pt-2">
                            <div className="flex-[2]">
                                <Image
                                    className="w-12"
                                    src={edu.instituteIcon}
                                    alt='ruet'
                                />
                            </div>
                            <div className="flex-[18] text-[14px]">
                                <p className="text-primary">{edu.institute}</p>
                                <p className="text-primary">{edu.studyYear}</p>
                                <p className="text-primary">{edu.grade}</p>
                            </div>
                        </div>
                        {index + 1 != PROFILE_INFO.Education.length && (<div className='border-[1px] border-primary my-2 shadow-[0_0_6px_var(--color-secondary-border)'></div>)}
                    </div>))}

                </div>
            </AnimatedMuiCard>
        </div>
    )
}

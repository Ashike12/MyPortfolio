import AnimatedMuiCard from "./custom/AnimatedMuiCard";
import RuetIcon from './../../public/assets/icons/ruet.jpg';
import RUMCIcon from './../../public/assets/icons/rumc.jpg';
import Image from "next/image";

export default function Education() {
    return (
        <div className='felx felx-col p-4'>
            <h2 className='text-center pb-4'>Education</h2>
            <AnimatedMuiCard key={'tool.id'} hoverScale={1.02} startY={0} endY={0} startX={200} endX={0} duration={1}>
                <div className="flex flex-col justify-center min-h-32 p-4">
                    <div className="flex flex-row">
                        <h3 className="font-bold flex-[19]">Bsc in Computer Science and Enginnering (CSE)</h3>
                    </div>
                    <div className='border-[1px] border-[#b7b7b7] my-2 shadow-[0_0_6px_rgba(34,211,238,0.4)]'></div>
                    <div className="flex flex-row pt-4">
                        <div className="flex-[2]">
                            <Image
                                className="w-12"
                                src={RuetIcon}
                                alt='ruet'
                            />
                        </div>
                        <div className="flex-[18] text-[14px]">
                            <p>Rajshahi University of Engineering and Technology(RUET)</p>
                            <p>Mar 2013 - Dec 2017</p>
                            <p>Cgpa - 3.48</p>
                        </div>
                    </div>
                    <div className='border-[1px] border-[#b7b7b7] my-2 shadow-[0_0_6px_rgba(34,211,238,0.4)]'></div>
                    <div className="flex flex-row">
                        <div className="flex-[2]">
                            <Image
                                className="w-12"
                                src={RUMCIcon}
                                alt='rumc'
                            />
                        </div>
                        <div className="flex-[18] text-[14px]">
                            <p>RAJUK Uttara Model College</p>
                            <p>Mar 2010 - Dec 2012</p>
                            <p>Gpa - 5.00</p>
                        </div>
                    </div>
                </div>
            </AnimatedMuiCard>
        </div>
    )
}

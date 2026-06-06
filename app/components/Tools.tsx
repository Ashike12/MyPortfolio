import { PROFILE_INFO } from "../const/my-profile-info.constant";
import AnimatedMuiCard from "./custom/AnimatedMuiCard";
import Image from "next/image";


export default function Tools() {
    return (
        <div className='flex flex-col p-4'>
            <h2 className='text-center text-float text-primary'>Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-6 pt-5">
                {PROFILE_INFO.Tools.map((tool) => (
                    <div key={tool.id}>
                        <AnimatedMuiCard hoverScale={1.05}>
                            <div className="flex flex-col justify-center min-h-32 bg-primary">
                                <h3 className="font-bold px-4 text-center text-primary">{tool.name}</h3>
                                <div className='border-[1px] border-primary my-2 shadow-[0_0_6px_var(--color-secondary-border)'></div>
                                <div className="flex flex-row gap-3 justify-center">
                                    {tool.icons.map((Icon, index) => (
                                        <Image
                                            key={index}
                                            className="w-7"
                                            src={Icon as string}
                                            alt={tool.name}
                                        />
                                    ))}
                                </div>
                            </div>
                        </AnimatedMuiCard>
                    </div>
                ))}
            </div>

        </div>
    )
}

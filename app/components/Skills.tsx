"use client"; // <-- MUST be first line

import Image from "next/image";
import ProgressBar from './custom/ProgressBar';
import { motion } from 'framer-motion';
import { PROFILE_INFO } from "../const/my-profile-info.constant";
import { ISkill } from "../interfaces/skill.interface";
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

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.5, // stagger each child by 0.3s
        },
    },
};

const childVariantsLeft = {
    hidden: { opacity: 0, x: -200 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
        },
    },
};

const childVariantsRight = {
    hidden: { opacity: 0, x: 200 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
        },
    },
};

const childVariantsBottom = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

const childVariantsTop = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};
export default function Skills() {
    const isMobile = useIsMobile();

    return (
        <div className='flex flex-col px-4'>
            <h2 className='text-center text-primary text-float'>Professional skills</h2>
            <h2 className="text-primary">Skills</h2>
            {!isMobile && PROFILE_INFO.SkillData.map((skill: ISkill, index) => (
                <motion.div
                    id={skill.id}
                    key={skill.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="space-y-2"
                >
                    <motion.div variants={index % 2 == 0 ? childVariantsLeft : childVariantsRight} className="flex flex-row justify-between pt-3">
                        <p className="text-primary">{skill.name}</p>

                        {!skill.isIconImage && (
                            <div className="flex flex-row gap-2">
                                {skill.icons.map((Icon, index) => (
                                    <Icon key={index} className="text-2xl" />
                                ))}
                            </div>
                        )}
                        {skill.isIconImage && (
                            <div className="flex flex-row gap-2">
                                {skill.icons.map((Icon, index) => (
                                    <Image
                                        key={index}
                                        className="w-6"
                                        src={Icon as string}
                                        alt={skill.name}
                                    />
                                ))}
                            </div>
                        )}
                    </motion.div>
                    <motion.div variants={index % 2 == 0 ? childVariantsLeft : childVariantsRight}>
                        <ProgressBar gradientClass={skill.gradientClass} value={skill.value} />
                    </motion.div>
                </motion.div>
            ))}
            <div className='border-[1px] border-primary mt-10 shadow-[0_0_6px_var(--color-secondary-border)'></div>
            <h2 className='pt-5 text-primary'>Knowledge</h2>
            {!isMobile && PROFILE_INFO.KnowledgeData.map((skill: ISkill, index) => (
                <motion.div
                    id={skill.id}
                    key={skill.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="space-y-2"
                >
                    <motion.div variants={index % 2 == 0 ? childVariantsLeft : childVariantsRight} className="flex flex-row justify-between pt-3">
                        <p className="text-primary">{skill.name}</p>

                        {!skill.isIconImage && (
                            <div className="flex flex-row gap-2">
                                {skill.icons.map((Icon, index) => (
                                    <Icon key={index} className="text-2xl" />
                                ))}
                            </div>
                        )}
                        {skill.isIconImage && (
                            <div className="flex flex-row gap-2">
                                {skill.icons.map((Icon, index) => (
                                    <Image
                                        key={index}
                                        className="w-6"
                                        src={Icon as string}
                                        alt={skill.name}
                                    />
                                ))}
                            </div>
                        )}
                    </motion.div>
                    <motion.div variants={index % 2 == 0 ? childVariantsLeft : childVariantsRight}>
                        <ProgressBar gradientClass={skill.gradientClass} value={skill.value} />
                    </motion.div>
                </motion.div>
            ))}

            {isMobile && PROFILE_INFO.SkillData.map((skill: ISkill, index) => (
                <motion.div
                    id={skill.id}
                    key={skill.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="space-y-2"
                >
                    <motion.div variants={index % 2 == 0 ? childVariantsTop : childVariantsBottom} className="flex flex-row justify-between pt-3">
                        <p className="text-primary">{skill.name}</p>

                        {!skill.isIconImage && (
                            <div className="flex flex-row gap-2">
                                {skill.icons.map((Icon, index) => (
                                    <Icon key={index} className="text-2xl" />
                                ))}
                            </div>
                        )}
                        {skill.isIconImage && (
                            <div className="flex flex-row gap-2">
                                {skill.icons.map((Icon, index) => (
                                    <Image
                                        key={index}
                                        className="w-6"
                                        src={Icon as string}
                                        alt={skill.name}
                                    />
                                ))}
                            </div>
                        )}
                    </motion.div>
                    <motion.div variants={index % 2 == 0 ? childVariantsTop : childVariantsBottom}>
                        <ProgressBar gradientClass={skill.gradientClass} value={skill.value} />
                    </motion.div>
                </motion.div>
            ))}
            <div className='border-[1px] border-primary mt-10 shadow-[0_0_6px_var(--color-secondary-border)'></div>
            <h2 className='pt-5 text-primary'>Knowledge</h2>
            {isMobile && PROFILE_INFO.KnowledgeData.map((skill: ISkill, index) => (
                <motion.div
                    id={skill.id}
                    key={skill.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="space-y-2"
                >
                    <motion.div variants={index % 2 == 0 ? childVariantsTop : childVariantsBottom} className="flex flex-row justify-between pt-3">
                        <p className="text-primary">{skill.name}</p>

                        {!skill.isIconImage && (
                            <div className="flex flex-row gap-2">
                                {skill.icons.map((Icon, index) => (
                                    <Icon key={index} className="text-2xl" />
                                ))}
                            </div>
                        )}
                        {skill.isIconImage && (
                            <div className="flex flex-row gap-2">
                                {skill.icons.map((Icon, index) => (
                                    <Image
                                        key={index}
                                        className="w-6"
                                        src={Icon as string}
                                        alt={skill.name}
                                    />
                                ))}
                            </div>
                        )}
                    </motion.div>
                    <motion.div variants={index % 2 == 0 ? childVariantsTop : childVariantsBottom}>
                        <ProgressBar gradientClass={skill.gradientClass} value={skill.value} />
                    </motion.div>
                </motion.div>
            ))}
        </div >
    )
}

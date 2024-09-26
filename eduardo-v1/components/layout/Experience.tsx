"use client"

import { BriefcaseBusiness } from "lucide-react";
import { useState } from "react";
import Exp from "../types/typesExperience";
import { services, experiences, techStack } from "@/constants/experience.";
import { Dialog } from "../ui/dialog-xp";
import { AccordionXP } from "../ui/accordion-xp";

const Experience = () => {

    return (
        <div className="p-5 grid justify-center w-full  mx-auto  min-h-[87dvh]">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl flex items-center font-black m-auto  bg-gradient-to-tr from-indigo-600 via-blue-400 to-gray-800 bg-clip-text text-transparent">
                EXPERIENCE
            </h1>

            <section className="w-full">

                {experiences.map((experience, index) => (
                    <AccordionXP key={index} title={experience.role}>
                        <p className="flex items-center font-semibold gap-2 text-blue-400">
                            {experience.company}
                            <span className="text-gray-500">

                                {experience.time}
                            </span>
                        </p>

                        <span className="w-40">
                            {experience.describe}
                        </span>

                    </AccordionXP>
                ))}

                <div className="flex flex-wrap gap-2 mt-5">
                    <Dialog title="Service">
                        {services.map((service, index) => (
                            <span className="flex flex-col" key={index}>
                                <span key={index}>
                                    {service}
                                </span>
                            </span>
                        ))}
                    </Dialog>

                    <Dialog title="Techs">
                        {techStack.map((tech, index) => (
                            <span className="grid grid-cols-2" key={index}>
                                <span className="underline font-extrabold">
                                    {tech.type}
                                </span>
                                <span className=" flex flex-col">
                                    {tech.techs.map((techItem, techIndex) => (
                                        <span key={techIndex}>{techItem}</span>
                                    ))}
                                    <hr />
                                </span>
                            </span>
                        ))}
                    </Dialog>
                </div>


            </section>
        </div>
    )
}

export default Experience;

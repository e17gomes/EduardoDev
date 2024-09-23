"use client"

import { BriefcaseBusiness } from "lucide-react";
import { useState } from "react";
import Exp from "../types/typesExperience";
import { services, experiences } from "@/constants/experience.";
import { ServiceDialog } from "../ui/service";

const Experience = () => {


  

    // const [activeIndex, setActiveIndex] = useState<number | null>(null);
    // const handleActive = (index: number) => {
    //     setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    // };

    // const CardXp: React.FC<Exp> = ({ className, role, company, describe, time, techs, isActive, onToggle }) => (
    //     <div className={`${className} mt-5 mb-10 px-4 sm:px-6 lg:px-8`}>
    //         <h3
    //             onClick={onToggle}
    //             className={`cursor-pointer text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-2 `}
    //         >
    //             {role}
    //             <span className={`ml-2 text-white/85  ${isActive ? 'text-blue-500 ' : 'opacity-85'}`}>
    //                 {!isActive ? '+' : '-'}
    //             </span>
    //         </h3>
    //         <article className={`${!isActive ? 'hidden' : 'block'} transition-all duration-300 ease-in-out text-center`}>
    //             <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-2">{company}</h4>
    //             <span className="block text-sm sm:text-base lg:text-lg mt-1">{describe}</span>
    //             <span className="block text-sm sm:text-base lg:text-lg mt-1 text-gray-500">{time}</span>
    //             <div className="mt-2">
    //                 <h5 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-600">Tecnologias:</h5>
    //                 <span className="block text-sm sm:text-base lg:text-lg mt-1 text-gray-500">{techs}</span>
    //             </div>
    //         </article>
    //     </div>
    //);

    return (
        <div className="p-5 grid justify-center w-full  mx-auto  min-h-[87dvh]">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl flex items-center font-black m-auto  bg-gradient-to-tr from-indigo-600 via-blue-400 to-gray-800 bg-clip-text text-transparent">
                EXPERIENCE
            </h1>

            <section className="w-full">
                {/* <>
                    {experiences.map((exp, index) => (
                        <CardXp
                            key={index}
                            role={exp.role}
                            company={exp.company}
                            describe={exp.describe}
                            time={exp.time}
                            techs={exp.techs}
                            isActive={activeIndex === index}
                            onToggle={() => handleActive(index)}
                        />
                    ))}
                </> */}
                <div className="flex flex-wrap gap-2">

                    <ServiceDialog />
                    <ServiceDialog />
                    <ServiceDialog />
                </div>

           
            </section>
        </div>
    )
}

export default Experience;

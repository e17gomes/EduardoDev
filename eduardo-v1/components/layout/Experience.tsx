"use client"

import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


const Experience = () => {
    // colocar na pasta de types
    interface Exp {
        className?: string,
        role: string,
        company: string,
        describe: string;
        time: string;
        techs: string;
        isActive: boolean;
        onToggle: () => void;
    };
    
    //Guardar numa pasta de constantes dps
    const softskills = [
        "a","b","c","d"
    ]
    const hardskills = [
        "a","b","c","d"
    ]

    const experiences = [
        {
            role: 'Front-End Developer',
            company: 'Rede Órbita',
            describe: 'Development and maintenance of interactive and responsive user interfaces using React, Next.js, and TypeScript. Contributed to the creation of a control panel for managing digital marketing campaigns, applying advanced performance optimization techniques like lazy loading and code splitting.',
            time: 'Sep 2023 - Aug 2024',
            techs: 'React | Next.js | TypeScript | REST API | Tailwind CSS'
        },
        {
            role: 'Full Stack Developer Freelancer',
            company: 'MiccoDev',
            describe: 'Developed and implemented complete solutions for e-commerce and institutional websites, using React.js, Next.js, and Node.js with Express. Managed the full development lifecycle, ensuring interactive and high-performance solutions that meet client needs.',
            time: 'Jun 2024 - Jul 2024',
            techs: 'React.js | Next.js | TypeScript | Node.js | Express'
        },];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const handleActive = (index: number) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const CardXp: React.FC<Exp> = ({ className, role, company, describe, time, techs, isActive, onToggle }) => (
        <div className={`${className} mt-5 mb-10 px-4 sm:px-6 lg:px-8`}>
            <h3 
                onClick={onToggle} 
                className={`cursor-pointer text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-2 `}
            >
                {role} 
                <span className={`ml-2 text-white/85  ${isActive ? 'text-blue-500 ' : 'opacity-85'}`}> 
                {!isActive ? '+' : '-'}
                </span>
            </h3>
            <article className={`${!isActive ? 'hidden' : 'block'} transition-all duration-300 ease-in-out text-center`}>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-2">{company}</h4>
                <span className="block text-sm sm:text-base lg:text-lg mt-1">{describe}</span>
                <span className="block text-sm sm:text-base lg:text-lg mt-1 text-gray-500">{time}</span>
                <div className="mt-2">
                    <h5 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-600">Tecnologias:</h5>
                    <span className="block text-sm sm:text-base lg:text-lg mt-1 text-gray-500">{techs}</span>
                </div>
            </article>
        </div>
    );

    return (
        <div className="py-7 flex items-center flex-col w-full max-w-xl mx-auto gap-10 min-h-[85dvh]">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl flex gap-2 items-center font-black m-auto underline  bg-gradient-to-tr from-indigo-600 via-blue-400 to-gray-800 bg-clip-text text-transparent">
                EXPERIENCE
            </h1>
                 <BriefcaseBusiness size={32}  />

            <section className="w-full">
                <>
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
                </>

 <section className='custom-scrollbar m-auto border rounded-md h-32 w-3/6 p-2 flex flex-col items-center '>
                {/* Soft Skills */}
  <p className="text-center text-xl font-semibold mb-2">My Soft Skills</p>
        <ul className="list-inside text-center text-gray-700 mb-8">
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Problem-Solving</li>
          <li>Adaptability</li>
          <li>Time Management</li>
        </ul>
</section>

<section className='custom-scrollbar m-auto border rounded-md h-32 w-3/6 p-2 flex flex-col items-center mt-4'>

        {/* Hard Skills */}
        <p className="text-center text-xl font-semibold mb-2">My Hard Skills</p>
        <ul className="list-inside text-center text-gray-700">
          <li>React</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>Tailwind CSS</li>
          <li>React</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>Tailwind CSS</li>
          <li>React</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>Tailwind CSS</li>
        </ul>
</section>


                    <div className="space-x-5 p-10 flex items-center justify-center mt-10">
                    <Link href={`/`} className="p-3 border rounded-full bg-gray-900 hover:bg-gray-800">Go to projects</Link> 
                    <Link href={`/`}  className="p-3 border rounded-full bg-gray-900 hover:bg-gray-800">Go to about me</Link> 
                    </div>

            </section>
        </div>
    )
}

export default Experience;

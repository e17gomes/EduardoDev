import { Info, MapPin, Linkedin, Link2, Github } from 'lucide-react';
import Globe from "../ui/globe"
import Image from 'next/image';
import Link from 'next/link';
import TechIcons from '@/app/about/static/media';

const AboutMe = () => {
  return (
    <section className="grid  grid-cols-1  sm:grid-cols-2 items-center justify-center min-h-[80dvh] py-4 container ">


      <article>
        <p className="text-xs select-none md:text-sm  flex p-1 items-center gap-1">
          <Info size={14} />  About me
        </p>
        <div className="border min-h-72 p-2 px-4 rounded-md">
          <ul>
            <li className='text-xs md:text-sm pb-2'>Resume: <hr className='pb-2' />
              <span className='p- text-xs text-gray-200'>
                Full-Stack Developer with a strong
                focus on front-end, experienced in creating modern,
                responsive interfaces using React, Next.js, and TypeScript.
                Skilled in developing high-performance applications and integrating RESTful APIs
                with Node.js and Express. Experienced in working closely with design teams
                to ensure seamless user experiences, always applying best practices like CI/CD
                and performance optimization. Currently pursuing a degree in Systems Analysis and
                Development at UNICSUL, I’m committed to continuous learning and growth.              </span>
            </li>
            <hr />
            <li className='text-xs pt-5 '>
              <Linkedin size={17} />
              <div className='flex gap-1'>
                LinkedIn:
                <Link href={''} className='text-blue-500 flex gap-1'>Link
                  <Link2 size={17} />
                </Link>
              </div>
            </li>


            <li className='text-xs pt-5'>
              <Github size={17} />
              <div className='flex gap-1'>
                Github:
                <Link href={''} className='text-blue-500 flex gap-1'>Link
                  <Link2 size={17} />
                </Link>
              </div>
            </li>

          </ul>
        </div>
      </article>

      <article className='col-span- row-span-2 mx-4'>
        <p className="text-xs md:text-sm flex p-1 items-center gap-1">
          <MapPin size={14} />  São Paulo, Brazil.
        </p>
        <div className="border scale overflow-hidden flex items-center justify-center rounded-md  ">
          <Globe />
        </div>
      </article>

      <article>
        <p className="text-xs select-none md:text-sm p-1 flex items-center gap-1">
          <Info size={14} />  Stacks
        </p>
      
        <div className="h-36  bg-gray-800 select-none p-3 overflow-hidden flex items-center justify-center scroll-container w-full z-0">
      <ul className="flex items-center justify-center space-x-4 animate-scrollInfinite h-40 p-4 min-w-[200%]">
        {[...TechIcons, ...TechIcons].map((icon, index) => (
          <li key={index} className="flex-shrink-0 drop-shadow-md">
            <Image
              alt={icon.name}
              src={icon.url}
              width={50}
              height={50}
            />
          </li>
        ))}
      </ul>
    </div>

      </article>


    </section>
  )
}

export default AboutMe

import { Info, MapPin, Linkedin, Link2, Github } from 'lucide-react';
import Globe from "../ui/globe"
import Image from 'next/image';
import Link from 'next/link';
import TechIcons from '@/app/about/static/media';

const AboutMe = () => {
  return (
    <section className="grid  grid-cols-1.+ sm:grid-cols-2 items-center justify-center min-h-[80dvh] py-4 container ">


      <article>
        <p className="text-xs select-none md:text-sm  flex p-1 items-center gap-1">
          <Info size={14} />  About me
        </p>
        <div className="border min-h-72 p-2 px-4 rounded-md">
          <ul>
            <li className='text-xs md:text-sm pb-1'>Resume: <hr />
              <span className='p-1 text-xs text-gray-200'>
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
             <Link2 size={17}/>
             </Link>
            </div>
            </li>


            <li className='text-xs pt-5'>
              <Github size={17}/>
              <div className='flex gap-1'>
                Github:
              <Link href={''} className='text-blue-500 flex gap-1'>Link 
             <Link2 size={17}/>
             </Link>
              </div>
            </li>

          </ul>
        </div>
      </article>

      <article className='col-span- row-span-2 min-h-72 mx-4'>
        <p className="text-xs md:text-sm flex p-1 items-center gap-1">
          <MapPin size={14} />  São Paulo, Brazil.
        </p>
        <div className="border overflow-hidden flex items-center justify-center rounded-md s">
          <Globe />
        </div>
      </article>

      <article>
        <p className="text-xs select-none md:text-sm rounded-md flex items-center gap-1">
          <Info size={14} />  Stacks
        </p>
        <div className="h-36 bg-red-200 p-4 rounded-md overflow-hidden flex items-center justify-center">
          <ul className='flex h-full items-center justify-center space-x-1'>

          {TechIcons.map((icon, index) => (
        <li key={index} style={{ listStyle: 'none' }}>
          <Image
            alt={icon.name}  // Use o nome do ícone como o texto alternativo
            src={icon.url}   // A URL do ícone
            width={40}       // Defina a largura da imagem (ajuste conforme necessário)
            height={40}      // Defina a altura da imagem
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

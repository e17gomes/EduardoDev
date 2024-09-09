import { Info, MapPin } from 'lucide-react';
import Globe from "../ui/globe"
import Image from 'next/image';


const AboutMe = () => {
  return (
    <section className="grid  grid-cols-1.+ sm:grid-cols-2 items-center justify-center min-h-[80dvh] py-4 container ">
     

      <article>
        <p className="text-xs select-none md:text-sm  flex p-1 items-center gap-1"> 
          <Info size={14} />  About me
        </p>
        <div className="border min-h-72 p-2 rounded-md">
          <ul>
            <li></li>
          </ul>
        </div>
      </article>

      <article className='col-span- row-span-2 min-h-72 mx-4'>
      <p className="text-xs md:text-sm flex p-1 items-center gap-1">
           <MapPin size={14} />  São Paulo, Brazil.
        </p>
        <div className="border overflow-hidden flex items-center justify-center rounded-md ">
          <Globe />
        </div>
      </article>

      <article>
        <p className="text-xs select-none md:text-sm rounded-md flex items-center gap-1"> 
          <Info size={14} />  Stacks
        </p>
        <div className="h-36 bg-red-200 p-2 rounded-md">
          <ul className='flex'>
            <li>
              <Image  alt={''} src={''}></Image>
            </li>
          </ul>
        </div>
      </article>
     

    </section>
  )
}

export default AboutMe

import { MapPin } from 'lucide-react';
import Globe from "../ui/globe"

const AboutMe = () => {
  return (
    <section className="grid grid-cols-4 min-h-[90dvh] gap-2 ">
      <article>
        <p className="text-sm flex items-center gap-1"> <MapPin size={12} />  São Paulo, Brazil.</p>
        <div className="border rounded-md h-32 md:h-64 overflow-hidden flex items-center justify-center ">
          <Globe />
        </div>
      </article>

      <article>
        <p className="text-sm rounded-md flex items-center gap-1"> 
          <MapPin size={12} />  About me
        </p>

        <div className="h-64 bg-red-200 rounded-md">
          aq
        </div>
      </article>
    </section>
  )
}

export default AboutMe

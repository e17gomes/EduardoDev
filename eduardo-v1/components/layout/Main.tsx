import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BriefcaseBusiness, Download, Info, Files } from "lucide-react";
import Link from "next/link";
import { HireMe } from "./HireMe";

export function Main() {
  return (
    <>
      <BackgroundBeamsWithCollision/>
      <section className="flex flex-col items-center w-full m-auto absolute top-[20%] md:top-[30%]  left-1/2 transform -translate-x-1/2">
      <HireMe/>
      <h1 className="font-black text-4xl md:text-7xl lg:9xl">Eduardo Gomes</h1> 
      <h2 className="text-3xl md:text-5xl  font-black bg-gradient-to-tr from-indigo-600 via-blue-400 to-gray-800 bg-clip-text text-transparent">
        FullStack Developer
      </h2>
      <Link target="_blank" className="w-fit flex justify-center" href="/Currículo%20Eduardo%20Gomes%20v.08.pdf">
        <button className="bg-inherit border border-double rounded-full p-3 flex items-center justify-center gap-2 my-5 hover:bg-gray-900 ease-in-out duration-100 w-40 hover:outline-double outline-blue-200 cursor-pointer">
          <Download /> Get resume
        </button> 
      </Link>

      <div className="flex flex-col lg:flex-row gap-2"> 
      <Link target="_blank" className=" w-fit flex justify-center" href="/Currículo%20Eduardo%20Gomes%20v.08.pdf">
        <button className="bg-inherit border border-double rounded-full p-3 flex items-center justify-center gap-2  hover:bg-gray-900 ease-in-out duration-100 w-40 hover:outline-double outline-blue-200 cursor-pointer">
          <BriefcaseBusiness /> Experience
        </button> 
      </Link>
      <Link target="_blank" className=" w-fit  flex justify-center" href="/Currículo%20Eduardo%20Gomes%20v.08.pdf ">
        <button className="bg-inherit border border-double rounded-full p-3 flex items-center justify-center gap-2  hover:bg-gray-900 ease-in-out duration-100 w-40 hover:outline-double outline-blue-200 cursor-pointer">
          <Info /> About me 
        </button> 
      </Link>
      <Link target="_blank" className=" w-fit flex justify-center" href="/Currículo%20Eduardo%20Gomes%20v.08.pdf">
        <button className="bg-inherit border border-double rounded-full p-3 flex items-center justify-center gap-2  hover:bg-gray-900 ease-in-out duration-100 w-40 hover:outline-double outline-blue-200 cursor-pointer">
          <Files/> Projects
        </button> 
      </Link>
      </div>
     
    </section>
    </>
  );
}

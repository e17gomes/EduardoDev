import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bottom-0 bg-inherit border-t text-gray-300  w-full sticky md:relative">
      <div className=" mx-auto py-2 flex flex-col items-center">
         <span className="flex items-center gap-1 justify-center text-gray-600 ">
          Developed by <Link href={''}>Eduardo 👨🏻‍💻</Link>
         </span>
      </div>
    </footer>
  );
}

export default Footer;

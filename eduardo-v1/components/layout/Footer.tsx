import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bottom-0 bg-inherit border-t text-gray-300  w-full sticky md:relative">
      <div className=" mx-auto py-4 flex flex-col items-center">
  
        

        {/* Redes Sociais */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Facebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Twitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Instagram size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Github size={24} />
          </a>
        </div>

  
      </div>
    </footer>
  );
}

export default Footer;

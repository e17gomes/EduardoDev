'use client'
import { Code } from 'lucide-react';
import { useState } from 'react'; // Importar useState para controle de hover

export default function ProjectsGrid() {
  const [hoverIndex, setHoverIndex] = useState<null|Number>(); // Estado para armazenar o índice do item hoverizado

  const projects = [
    {
      title: "Cryptotos",
      description: "Facilitar o acompanhamento e análise de criptomoedas com uma interface intuitiva e dados precisos.",
      imageUrl: "/path-to-image-1.jpg",
      linkWeb: "/project-1", // Link para visualização
      linkSrc: "/project-1", // Link para o código-fonte
    },
    {
      title: "Where in the World",
      description: "Facilitar a visualização e compreensão de dados geográficos e econômicos globais com uma ferramenta simples e eficaz.",
      imageUrl: "/path-to-image-2.jpg",
      linkWeb: "/project-2", // Link para visualização
      linkSrc: "/project-2", // Link para o código-fonte
    },
    {
      title: "NodeAuth",
      description: "Facilitar o acompanhamento e análise de criptomoedas com uma interface intuitiva e dados precisos.",
      imageUrl: "/path-to-image-1.jpg",
      linkWeb: "/project-3", // Link para visualização
      linkSrc: "/project-3", // Link para o código-fonte
    },
    {
      title: "My WebSite",
      description: "Facilitar a visualização e compreensão de dados geográficos e econômicos globais com uma ferramenta simples e eficaz.",
      imageUrl: "/path-to-image-2.jpg",
      linkWeb: "/project-4", // Link para visualização
      linkSrc: "/project-4", // Link para o código-fonte
    },
    {
      title: "AnyDex",
      description: "Facilitar a visualização e compreensão de dados geográficos e econômicos globais com uma ferramenta simples e eficaz.",
      imageUrl: "/path-to-image-2.jpg",
      linkWeb: "/project-5", // Link para visualização
      linkSrc: "/project-5", // Link para o código-fonte
    },
    {
      title: "AnyDex",
      description: "***************************************************************************.",
      imageUrl: "/path-to-image-2.jpg",
      linkWeb: "/project-5", // Link para visualização
      linkSrc: "/project-5", // Link para o código-fonte
    },
    // more projects 
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className='flex flex-col justify-center items-center mb-5'>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl flex gap-2 font-black m-auto bg-gradient-to-tr from-indigo-600 via-blue-400 to-gray-800 bg-clip-text text-transparent">
            My Projects
          </h2>
          <Code size={32} />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-inherit border rounded-lg shadow-md h-46 overflow-hidden hover:shadow-xl transition-shadow duration-300 relative`}
            >
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className={`text-gray-700 mb-4 transition-all duration-300  line-clamp-3 ${hoverIndex===index ?'line-clamp-none':''}`}>
                  {project.description}
                </p>
                <section className="flex gap-4 text-sm justify-end items-end ">
                  <a
                    href={project.linkWeb}
                    className="text-indigo-600 border p-1 rounded-md ease-in-out font-semibold hover:text-indigo-800"
                  >
                    View Project
                  </a>
                  <a
                    href={project.linkSrc}
                    className="text-gray-100 border p-1 rounded-md ease-in-out font-semibold hover:text-gray-300"
                  >
                    Source Code
                  </a>
                </section>
              </div>
              {projects.length - 1 === index &&
                <div className='p-4 select-none flex items-center justify-center absolute inset-0 backdrop-blur-xl bg-opacity-70'>
                  <span className="text-xl font-semibold text-gray-200">Coming soon</span>
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

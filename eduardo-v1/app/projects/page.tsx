export default function ProjectsGrid() {
    const projects = [
      {
        title: "Project 1",
        description: "A brief description of project 1.",
        imageUrl: "/path-to-image-1.jpg",
        link: "/project-1",
      },
      {
        title: "Project 2",
        description: "A brief description of project 2.",
        imageUrl: "/path-to-image-2.jpg",
        link: "/project-2",
      },
      // Add more projects here
    ];
  
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
            
                <div className="p-4">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="text-indigo-600 font-semibold hover:text-indigo-800"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
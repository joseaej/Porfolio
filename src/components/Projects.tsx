import { ExternalLink, FileImage, Github } from 'lucide-react';

const projects = [
  {
    title: "Dietify",
    description: "App movil sobre dietas",
    image: "../../img/dietify.png",
    tech: ["Flutter", "Dart"],
    github: "https://github.com/joseaej/Dietify",
    demo: "https://demo.com"
  },
  {
    title: "AI Image Generator",
    description: "Aplicación web que genera imágenes usando IA",
    image: "https://images.unsplash.com/photo-1675426513824-7f10e3775df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tech: ["Python", "Flask", "OpenAI", "React"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con características colaborativas",
    image: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-zinc-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800 text-gray-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-white hover:text-gray-300">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="text-white hover:text-gray-300">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
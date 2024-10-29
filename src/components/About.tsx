import { Code, Database, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Profile"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Sobre mí</h2>
            <p className="text-gray-300 mb-6">
                Joven programador de 20 años educado, formal, responsable en el trabajo. Capaz de
                trabajar en equipo, trabajar en equipo en busca de los mismos objetivos. Buena capacidad
                para la resolución de problemas buscando soluciones optimas y eficaces.

            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-600 rounded-lg">
                  <Code className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Backedn Development</h3>
                  <p className="text-gray-400">C#, Java, Dart, Kotlin</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Globe className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Cloud & DevOps</h3>
                  <p className="text-gray-400">AWS, Docker, Git</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <Database className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Other</h3>
                  <p className="text-gray-400">Google Document, Google Presentation, Adobe Photoshop, Adobe Ilustrator</p>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
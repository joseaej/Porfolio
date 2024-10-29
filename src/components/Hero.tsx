import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hola, soy <span className="text-indigo-500">Jose</span>
            <br />Software Developer
          </h1>
          <p className="text-xl text-gray-400 mb-8">
          Transformando ideas en experiencias robustas y escalables desde el núcleo. 
          Especializado en desarrollo backend para construir sistemas eficientes, seguros y preparados para el futuro.
          </p>
          <div className="flex gap-4">
            <a 
              href="#projects"
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition-colors"
            >
              Ver Proyectos
              <ArrowRight size={20} />
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-white text-2xl font-bold">Jose Armando</span>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-gray-300">Inicio</a>
            <a href="#about" className="text-white hover:text-gray-300">Sobre mí</a>
            <a href="#projects" className="text-white hover:text-gray-300">Proyectos</a>
            <a href="#contact" className="text-white hover:text-gray-300">Contacto</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/joseaej" className="text-white hover:text-gray-300">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-gray-300">
              <Linkedin size={20} />
            </a>
            <a href="armandoespi25@gmail.com" className="text-white hover:text-gray-300">
              <Mail size={20} />
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block text-white hover:text-gray-300">Inicio</a>
            <a href="#about" className="block text-white hover:text-gray-300">Sobre mí</a>
            <a href="#projects" className="block text-white hover:text-gray-300">Proyectos</a>
            <a href="#contact" className="block text-white hover:text-gray-300">Contacto</a>
          </div>
        )}
      </nav>
    </header>
  );
}
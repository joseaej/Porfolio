import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12">Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">¡Hablemos!</h3>
            <p className="text-gray-400 mb-8">
              Estoy disponible para proyectos freelance y oportunidades laborales.
              No dudes en contactarme para discutir tu proyecto.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-indigo-500" size={24} />
                <span className="text-white">armandoespi25@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-indigo-500" size={24} />
                <span className="text-white">+34 600 38 39 52</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-indigo-500" size={24} />
                <span className="text-white">Málaga, España</span>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Mensaje</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
import React, { Component } from 'react';
import { Map } from 'lucide-react';

function Header() {
  return (
    <nav className="border-b border-blue-200/50 bg-white px-6 py-2 text-white shadow-sm">
      <div className="mx-auto flex max-w-[100rem] flex-col items-center justify-between pr-1 text-sm sm:flex-row">
        <div className="flex h-16 items-center">
          <div className="relative">
            <div className="flex items-center space-x-4">
              <img src="/Escudo.svg" alt="" className="h-20 w-18" />
              <div className="flex flex-col">
                <h1 className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-3xl font-bold text-transparent">
                  Poder Judicial de Jujuy
                </h1>
                <p className="text-blue-600">Provincia de Jujuy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end pl-20">
          <div className="hidden items-center space-x-8 md:flex">
            <a href="#" className="text-black hover:text-gray-600">
              Inicio
            </a>
            <a href="#" className="text-black hover:text-gray-900">
              Contacto
            </a>
            <a href="#" className="text-black hover:text-gray-900">
              Servicios
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 animate-pulse rounded-full bg-blue-300 blur-3xl"></div>
        <div className="absolute top-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-indigo-200 blur-3xl delay-1000"></div>
        <div className="absolute right-40 bottom-40 h-60 w-60 animate-pulse rounded-full bg-cyan-200 blur-3xl delay-2000"></div>
      </div>
    </nav>
  );
}

export default Header;

// src/components/layout/Header.jsx
import React from 'react';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header className="bg-gray-900 text-white fixed top-0 w-full z-20 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo + Titre */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md transition-transform duration-300 hover:scale-105"
          />
          <span className="text-2xl font-semibold tracking-wide">Chammar Oussama</span>
        </div>

        {/* Liens de navigation */}
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <a href="#hero" className="hover:text-blue-400 transition-colors">Accueil</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition-colors">À propos</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projets</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

// src/components/layout/Header.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 text-white fixed top-0 w-full z-20 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6">
        {/* Logo + Titre */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white shadow-md transition-transform duration-300 hover:scale-105"
          />
          <span className="text-lg sm:text-2xl font-semibold tracking-wide">
            <span className="hidden sm:inline">Chammar Oussama</span>
            <span className="sm:hidden">Oussama</span>
          </span>
        </div>

        {/* Menu hamburger pour mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 rounded p-1"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Liens de navigation - Desktop */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
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

        {/* Menu mobile */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-gray-900 shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <ul className="flex flex-col py-4">
            <li>
              <a 
                href="#hero" 
                className="block px-6 py-3 hover:bg-gray-800 hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                Accueil
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="block px-6 py-3 hover:bg-gray-800 hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                À propos
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="block px-6 py-3 hover:bg-gray-800 hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                Projets
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="block px-6 py-3 hover:bg-gray-800 hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;


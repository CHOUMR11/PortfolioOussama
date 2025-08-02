import React from 'react';
import { FaGithub } from 'react-icons/fa';
import projectsBg from 'src/assets/Projects.jpeg';

import smartMagImg from '../../assets/SchoolManagementSystem-master.png';
import digiFoodImg from 'src/assets/digifood.png';
import coachProImg from 'src/assets/coachpro.png';
// Ajoute ici d’autres images si tu as pour les projets suivants, sinon tu peux aussi mettre une image par défaut
import project4Img from '../../assets/E-commerce.png'; // Remplace par tes vraies images


function Projects() {
  const projects = [
    {
      title: 'SmartMag',
      description: 'Une application web pour la gestion de magazines intelligents.',
      repo: 'https://github.com/oussama123/smartmag',
      image: smartMagImg,
    },
    {
      title: 'DigiFood',
      description: 'Une application mobile pour commander des repas en ligne.',
      repo: 'https://github.com/oussama123/digifood',
      image: digiFoodImg,
    },
    {
      title: 'CoachPro',
      description: 'Une plateforme pour les coachs de football.',
      repo: 'https://github.com/oussama123/coachpro',
      image: coachProImg,
    },
    {
      title: 'Projet 4',
      description: 'Description du projet 4 ici.',
      repo: 'https://github.com/oussama123/projet4',
      image: project4Img,
    },
   
    // Ajoute autant que tu veux ici
  ];

  return (
    <section
      className="relative bg-gray-50 py-24 overflow-hidden"
      id="projects"
    >
      {/* Background image + subtle overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-75 scale-105 transition-transform duration-700 ease-in-out"
        style={{ backgroundImage: `url(${projectsBg})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-white bg-opacity-75 backdrop-blur-md"
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-6 font-sans max-w-6xl">
        <h2
          className="text-5xl font-extrabold text-center text-gray-900 mb-16 tracking-tight drop-shadow-md"
          data-aos="fade-up"
        >
         Mes Projets
        </h2>

        {/* Liste horizontale avec scroll */}
        <div className="flex flex-row space-x-12 overflow-x-auto px-4 py-4">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="relative bg-white bg-opacity-95 rounded-3xl shadow-lg backdrop-blur-sm hover:shadow-2xl transition-shadow duration-500 ease-in-out transform hover:-translate-y-2 w-80 flex-shrink-0"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-3xl cursor-pointer group relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-110"
                />
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-3 text-gray-800 shadow-lg opacity-90 hover:opacity-100 transition-opacity duration-300"
                  aria-label={`Voir dépôt ${project.title}`}
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>

              {/* Texte */}
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full shadow-lg font-semibold tracking-wide hover:from-indigo-700 hover:to-blue-600 transition-colors duration-300"
                >
                  Voir le dépôt
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

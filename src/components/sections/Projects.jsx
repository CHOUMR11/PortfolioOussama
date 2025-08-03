import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import projectsBg from 'src/assets/Projects.jpeg';
import smartMagImg from '../../assets/SchoolManagementSystem-master.png';
import digiFoodImg from 'src/assets/digifood.png';
import coachProImg from 'src/assets/coachpro.png';
import project4Img from '../../assets/E-commerce.png';
import project5Img from '../../assets/Portfolio.png';

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const projects = [
    {
      title: 'School-Management',
      description: "Une application web pour la gestion d'une école.",
      repo: 'https://github.com/CHOUMR11/SchoolManagementSystem',
      demo: 'https://school-management.vercel.app/',
      image: smartMagImg,
    },
    {
      title: 'DigiFood',
      description: 'Une application mobile pour commander des repas en ligne.',
      repo: 'https://github.com/CHOUMR11/Frontend30.8Creperie',
      demo: 'https://digifood.vercel.app/',
      image: digiFoodImg,
    },
    {
      title: 'CoachPro',
      description: 'Une plateforme pour les coachs de football.',
      repo: 'https://github.com/CHOUMR11/CoachPro', // Fixed: changed github to repo
      demo: 'https://coachpro.vercel.app/',
      image: coachProImg,
    },
    {
      title: 'E-commerce',
      description: 'Une plateforme de commerce électronique moderne.',
      repo: 'https://github.com/CHOUMR11/EcommerceProject',
      demo: 'https://frontend-ecommerceversion0.vercel.app/',
      image: project4Img,
    },
    {
      title: 'Portfolio',
      description: 'Mon portfolio personnel.',
      repo: 'https://github.com/CHOUMR11/PortfolioOussama',
      demo: 'https://portfolio-oussama.vercel.app/',
      image: project5Img,
    },
  ];

  return (
    <section
      className="relative bg-gray-50 py-16 sm:py-20 lg:py-24 overflow-hidden"
      id="projects"
    >
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-75 scale-105 transition-transform duration-700 ease-in-out"
        style={{ backgroundImage: `url(${projectsBg})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-white bg-opacity-75 backdrop-blur-md"
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 font-sans max-w-7xl">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-12 sm:mb-16 tracking-tight drop-shadow-md"
          data-aos="fade-up"
        >
          Mes Projets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="relative bg-white bg-opacity-95 rounded-3xl shadow-lg backdrop-blur-sm hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="overflow-hidden rounded-t-3xl cursor-pointer relative h-48 sm:h-52 lg:h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-110"
                  onClick={() => openModal(project.image)}
                />
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 bg-white bg-opacity-90 rounded-full p-2 sm:p-3 text-gray-800 shadow-lg opacity-90 hover:opacity-100 transition-opacity duration-300"
                    aria-label={`Voir dépôt ${project.title}`}
                  >
                    <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </a>
                )}
              </div>

              <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-between h-auto">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-center px-4 py-2 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition"
                    >
                      <FaGithub className="inline mr-2" />
                      Voir le dépôt
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-center px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
                    >
                      🔗 Voir la démo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full p-4">
            <img
              src={selectedImage}
              alt="Enlarged project"
              className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
            />
            <button
              className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full p-2 text-gray-800 shadow-lg hover:bg-gray-200 transition"
              onClick={closeModal}
              aria-label="Fermer l'image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;

import React from 'react';
import profilePic from 'src/assets/photo.jpg';

function About() {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-20" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8 sm:mb-12"
          data-aos="fade-up"
        >
          À propos
        </h2>

        {/* Flex container responsive */}
        <div
          className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          {/* Photo responsive */}
          <div className="flex-shrink-0">
            <img
              src={profilePic}
              alt="Photo de Oussama Chammar"
              className="rounded-full w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mx-auto lg:mx-0"
              data-aos="zoom-in"
              data-aos-delay="100"
            />
          </div>

          {/* Texte responsive */}
          <div className="text-gray-700 text-center lg:text-left max-w-3xl space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg leading-relaxed">
              🚀 <strong>Software Engineer</strong> | Full-Stack & Mobile Developer | AI & Cloud Enthusiast
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Je suis Oussama Chammar, ingénieur informatique diplômé de l'ESSAT Privé Gabès (EUR-ACE ASIIN). 
              Passionné par le développement web et mobile, je combine MERN, MEAN, Spring Boot, Flutter, et technologies Cloud pour créer des solutions innovantes.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              🔥 Actuellement, je développe des applications dynamiques full-stack et mobiles, explore le Cloud Computing, Docker, Kubernetes, DevOps, ainsi que l'Intelligence Artificielle et les chatbots intelligents.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              ⚙️ Expérimenté en IoT avec Arduino, ESP32 & Raspberry Pi.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              🧩 Coach de football certifié CAF C, j'applique la stratégie et le travail d'équipe dans mes projets techniques et sportifs.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              📖 Je réalise également des projets académiques et personnels concrets dans le domaine technologique.
            </p>
          </div>
        </div>

        {/* Études et Certifications responsive */}
        <div className="text-center lg:text-left max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-12 sm:mt-16">
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Études</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm sm:text-base">
              <li>Ingénieur Informatique, ESSAT Privé Gabès (EUR-ACE ASIIN)</li>
              <li>Féderation Tunisienne de Football FTF</li>
              <li>Baccalauréat Mathématiques</li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Certifications</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm sm:text-base">
              <li>Certification MERN Stack</li>
              <li>Certification MEAN Stack</li>
              <li>Certification Flutter</li>
              <li>Certification Spring Boot</li>
              <li>Certification Angular</li>
              <li>Gestion du temps</li>
              <li>Gestion du stress</li>
              <li>Secourisme</li>
              <li>Certification CAF C – Coach de Football</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;


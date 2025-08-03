import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import heroBg from 'src/assets/Hero.jpeg';

function Hero() {
  const handleClick = (url, platform) => {
    console.log(`Clic sur ${platform}, redirection vers ${url}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="hero"
      className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Image d'arrière-plan */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})`, filter: 'brightness(0.5)' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black opacity-60" aria-hidden="true" />

      {/* Contenu principal */}
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10" data-aos="fade-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
          Oussama Chammar
        </h1>

        <div className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] font-medium leading-relaxed">
          <Typewriter
            words={[
              "Ingénieur Full-Stack Web & Mobile | ESSAT Gabès – EUR-ACE | ASIIN",
              "Passionné par l'IA, le Cloud et les Technologies Innovantes",
              "Coach de Football Certifié CAF C"
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          <a
            href="/CV-Oussama.pdf"
            download
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors text-center"
          >
            Télécharger le CV
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-full font-semibold transition-colors text-center"
          >
            Me Contacter
          </a>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex justify-center items-center space-x-4 sm:space-x-6">
          <button
            onClick={() => handleClick('https://github.com/CHOUMR11', 'GitHub')}
            aria-label="GitHub"
            className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white hover:bg-opacity-10"
          >
            <FaGithub className="text-2xl sm:text-3xl" />
          </button>
          <button
            onClick={() => handleClick('https://www.linkedin.com/in/oussama-chammar-687919240', 'LinkedIn')}
            aria-label="LinkedIn"
            className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white hover:bg-opacity-10"
          >
            <FaLinkedin className="text-2xl sm:text-3xl" />
          </button>
          <button
            onClick={() => handleClick('https://www.instagram.com/oussamachammar?igsh=eTVvZHRuNjR5cmJ4', 'Instagram')}
            aria-label="Instagram"
            className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white hover:bg-opacity-10"
          >
            <FaInstagram className="text-2xl sm:text-3xl" />
          </button>
          <button
            onClick={() => handleClick('https://wa.me/+21694220760', 'WhatsApp')}
            aria-label="WhatsApp"
            className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white hover:bg-opacity-10"
          >
            <FaWhatsapp className="text-2xl sm:text-3xl" />
          </button>
          <button
            onClick={() => handleClick('https://www.facebook.com/oussama.chammar.5/', 'Facebook')}
            aria-label="Facebook"
            className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white hover:bg-opacity-10"
          >
            <FaFacebook className="text-2xl sm:text-3xl" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;


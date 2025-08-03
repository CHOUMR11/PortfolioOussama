import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

function Footer() {
  const handleClick = (url, platform) => {
    console.log(`Clic sur ${platform}, redirection vers ${url}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-gray-900 text-white py-3 sm:py-4 fixed bottom-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Layout responsive : colonne sur mobile, ligne sur desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-2 sm:space-y-0">
          
          {/* Réseaux sociaux */}
          <div className="flex space-x-3 sm:space-x-4 order-1 sm:order-1">
            <button
              onClick={() => handleClick('https://github.com/CHOUMR11', 'GitHub')}
              className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer p-1 rounded-full hover:bg-gray-800"
              aria-label="GitHub Profile"
              data-aos="none"
            >
              <FaGithub className="text-xl sm:text-2xl lg:text-3xl" />
            </button>
            <button
              onClick={() => handleClick('https://www.linkedin.com/in/oussama-chammar-687919240', 'LinkedIn')}
              className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer p-1 rounded-full hover:bg-gray-800"
              aria-label="LinkedIn Profile"
              data-aos="none"
            >
              <FaLinkedin className="text-xl sm:text-2xl lg:text-3xl" />
            </button>
            <button
              onClick={() => handleClick('https://www.instagram.com/oussamachammar?igsh=eTVvZHRuNjR5cmJ4', 'Instagram')}
              className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer p-1 rounded-full hover:bg-gray-800"
              aria-label="Instagram Profile"
              data-aos="none"
            >
              <FaInstagram className="text-xl sm:text-2xl lg:text-3xl" />
            </button>
            <button
              onClick={() => handleClick('https://wa.me/+21694220760', 'WhatsApp')}
              className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer p-1 rounded-full hover:bg-gray-800"
              aria-label="WhatsApp Contact"
              data-aos="none"
            >
              <FaWhatsapp className="text-xl sm:text-2xl lg:text-3xl" />
            </button>
            <button
              onClick={() => handleClick('https://www.facebook.com/oussama.chammar.5/', 'Facebook')}
              className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer p-1 rounded-full hover:bg-gray-800"
              aria-label="Facebook Profile"
              data-aos="none"
            >
              <FaFacebook className="text-xl sm:text-2xl lg:text-3xl" />
            </button>
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-center sm:text-right order-2 sm:order-2 text-gray-400">
            &copy; {new Date().getFullYear()} Chammar Oussama. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


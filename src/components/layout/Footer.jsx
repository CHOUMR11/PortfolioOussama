import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

function Footer() {
  const handleClick = (url, platform) => {
    console.log(`Clic sur ${platform}, redirection vers ${url}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-gray-900 text-white py-4 fixed bottom-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 flex items-center justify-center space-x-4">
        <div className="flex space-x-4">
          <button
            onClick={() => handleClick('https://github.com/CHOUMR11', 'GitHub')}
            className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
            aria-label="GitHub Profile"
            data-aos="none"
          >
            <FaGithub className="text-3xl" />
          </button>
          <button
            onClick={() => handleClick('https://www.linkedin.com/in/oussama-chammar-687919240', 'LinkedIn')}
            className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
            aria-label="LinkedIn Profile"
            data-aos="none"
          >
            <FaLinkedin className="text-3xl" />
          </button>
          <button
            onClick={() => handleClick('https://www.instagram.com/oussamachammar?igsh=eTVvZHRuNjR5cmJ4', 'Instagram')}
            className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
            aria-label="Instagram Profile"
            data-aos="none"
          >
            <FaInstagram className="text-3xl" />
          </button>
          <button
            onClick={() => handleClick('https://wa.me/+21694220760', 'WhatsApp')}
            className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
            aria-label="WhatsApp Contact"
            data-aos="none"
          >
            <FaWhatsapp className="text-3xl" />
          </button>
          <button
            onClick={() => handleClick('https://www.facebook.com/oussama.chammar.5/', 'Facebook')}
            className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
            aria-label="Facebook Profile"
            data-aos="none"
          >
            <FaFacebook className="text-3xl" />
          </button>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Chammar Oussama. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
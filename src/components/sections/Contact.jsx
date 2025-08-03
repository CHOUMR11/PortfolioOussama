import React, { useRef } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobe,
  FaBriefcase,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import contactBg from 'src/assets/Contact.jpeg';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7z0wpi5',
        'template_01qmo4e',
        form.current,
        '2LGb7TNUcJM3QyUio'
      )
      .then(
        (result) => {
          alert('Message envoyé avec succès !');
          e.target.reset();
        },
        (error) => {
          alert('Une erreur est survenue, réessaye plus tard.');
          console.error(error.text);
        }
      );
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 text-white" id="contact">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-75"
        style={{ backgroundImage: `url(${contactBg})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12" data-aos="fade-up">
          Contact
        </h2>

        <div className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 sm:space-y-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Nom"
              required
              className="w-full p-3 sm:p-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500 text-sm sm:text-base"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full p-3 sm:p-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500 text-sm sm:text-base"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              rows={5}
              className="w-full p-3 sm:p-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500 text-sm sm:text-base resize-vertical"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white p-3 sm:p-4 rounded-lg font-semibold transition-colors text-sm sm:text-base"
            >
              Envoyer
            </button>
          </form>

          {/* Infos supplémentaires */}
          <div
            className="mt-8 sm:mt-10 space-y-3 sm:space-y-4 text-center text-gray-200"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base">
              <FaBriefcase className="flex-shrink-0" />
              <span className="text-center sm:text-left">
                Ingénieur Logiciel Junior spécialisé en développement Full Stack Web & Mobile
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base">
              <FaMapMarkerAlt className="flex-shrink-0" />
              <span>Elhamma-Gabès 6013, Tunisie</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base">
              <FaPhoneAlt className="flex-shrink-0" />
              <a href="tel:+21693668260" className="underline hover:text-blue-400">
                +216 93 668 260
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base">
              <FaPhoneAlt className="flex-shrink-0" />
              <a href="tel:+21694220760" className="underline hover:text-blue-400">
                +216 94 220 760
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base">
              <FaGlobe className="flex-shrink-0" />
              <a
                href="https://portfolio-oussama-9ysiazlv4-oussamas-projects-d5f53f05.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-400 break-all sm:break-normal"
              >
                https://portfolio-oussama-murex.vercel.app/
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base">
              <MdEmail className="flex-shrink-0" />
              <a href="mailto:chammaroussama@gmail.com" className="underline hover:text-blue-400">
                chammaroussama@gmail.com
              </a>
            </div>
            
            <div className="pt-4">
              <a
                href="/assets/CV-Oussama.pdf"
                download
                className="inline-block px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-white font-semibold text-sm sm:text-base"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;


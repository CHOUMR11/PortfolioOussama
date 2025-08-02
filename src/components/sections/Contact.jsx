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
import contactBg from 'src/assets/Contact.jpeg'; // Assure-toi que ce chemin est correct

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7z0wpi5',   // Remplace par ton vrai service ID EmailJS
        'template_01qmo4e',  // Remplace par ton template ID EmailJS
        form.current,
        '2LGb7TNUcJM3QyUio' // Remplace par ta clé publique EmailJS
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
    <section className="relative py-24 text-white" id="contact">
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

      <div className="relative container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Contact
        </h2>

        <div className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Nom"
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              rows={5}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white p-3 rounded-lg font-semibold transition-colors"
            >
              Envoyer
            </button>
          </form>

          {/* Infos supplémentaires */}
          <div
            className="mt-10 space-y-3 text-center text-gray-200"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="flex items-center justify-center gap-2">
              <FaBriefcase /> Ingénieur Logiciel Junior spécialisé en développement Full Stack Web & Mobile
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaMapMarkerAlt /> Elhamma-Gabès 6013, Tunisie
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt />
              <a href="tel:+21693668260" className="underline hover:text-blue-400">
                +216 93 668 260
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt />
              <a href="tel:+21694220760" className="underline hover:text-blue-400">
                +216 94 220 760
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaGlobe />
              <a
                href="https://portfolio-oussama-9ysiazlv4-oussamas-projects-d5f53f05.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-400"
              >
                www.oussama-portfolio.com
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <MdEmail />
              <a href="mailto:chammaroussama@gmail.com" className="underline hover:text-blue-400">
                chammaroussama@gmail.com
              </a>
            </p>
            <p>
              <a
                href="/assets/CV-Oussama.pdf"
                download
                className="inline-block mt-4 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-white font-semibold"
              >
                Télécharger mon CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

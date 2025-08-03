import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaJsSquare,
  FaBootstrap,
  FaFigma,
} from 'react-icons/fa';
import {
  SiFlutter,
  SiFirebase,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiDotnet,
  SiAngular,
  SiRaspberrypi,
  SiArduino,
  SiIonic,
  SiReact,
  SiJira,
} from 'react-icons/si';
import { BsBugFill } from 'react-icons/bs';

function Skills() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-3xl sm:text-4xl lg:text-5xl text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-3xl sm:text-4xl lg:text-5xl text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-3xl sm:text-4xl lg:text-5xl text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-3xl sm:text-4xl lg:text-5xl text-cyan-500" /> },
    { name: 'React Native', icon: <SiReact className="text-3xl sm:text-4xl lg:text-5xl text-blue-400" /> },
    { name: 'Ionic', icon: <SiIonic className="text-3xl sm:text-4xl lg:text-5xl text-indigo-500" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-3xl sm:text-4xl lg:text-5xl text-purple-600" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-3xl sm:text-4xl lg:text-5xl text-teal-500" /> },
    { name: 'Flutter', icon: <SiFlutter className="text-3xl sm:text-4xl lg:text-5xl text-blue-400" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-3xl sm:text-4xl lg:text-5xl text-yellow-500" /> },
    { name: 'Docker', icon: <FaDocker className="text-3xl sm:text-4xl lg:text-5xl text-blue-600" /> },
    { name: 'Git', icon: <FaGitAlt className="text-3xl sm:text-4xl lg:text-5xl text-orange-600" /> },
    { name: 'Linux', icon: <span className="text-2xl sm:text-3xl lg:text-4xl">🐧</span> },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-3xl sm:text-4xl lg:text-5xl text-green-600" /> },
    { name: 'Java', icon: <FaJava className="text-3xl sm:text-4xl lg:text-5xl text-red-600" /> },
    { name: 'JEE', icon: <span className="text-2xl sm:text-3xl lg:text-4xl">☕</span> },
    { name: 'IoT', icon: <span className="text-2xl sm:text-3xl lg:text-4xl">📡</span> },
    { name: 'Raspberry Pi', icon: <SiRaspberrypi className="text-3xl sm:text-4xl lg:text-5xl text-rose-600" /> },
    { name: 'Arduino', icon: <SiArduino className="text-3xl sm:text-4xl lg:text-5xl text-blue-500" /> },
    { name: '.NET', icon: <SiDotnet className="text-3xl sm:text-4xl lg:text-5xl text-purple-700" /> },
    { name: 'MySQL', icon: <SiMysql className="text-3xl sm:text-4xl lg:text-5xl text-blue-700" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-3xl sm:text-4xl lg:text-5xl text-green-700" /> },
    { name: 'Angular', icon: <SiAngular className="text-3xl sm:text-4xl lg:text-5xl text-red-700" /> },
    { name: 'Jira', icon: <SiJira className="text-3xl sm:text-4xl lg:text-5xl text-blue-500" /> },
    { name: 'Selenium', icon: <BsBugFill className="text-3xl sm:text-4xl lg:text-5xl text-green-500" /> },
    { name: 'Figma', icon: <FaFigma className="text-3xl sm:text-4xl lg:text-5xl text-pink-500" /> },
    { name: 'Football Tactique', icon: <span className="text-3xl sm:text-4xl lg:text-5xl">⚽</span> },
  ];

  return (
    <section className="bg-gray-800 text-white py-12 sm:py-16 lg:py-20" id="skills">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12" data-aos="fade-up">
          Compétences
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-3 sm:p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div className="mb-2 sm:mb-3">
                {skill.icon}
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-center leading-tight">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;


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
import { BsBugFill } from 'react-icons/bs'; // Pour Selenium

function Skills() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-5xl text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-5xl text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-5xl text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-5xl text-cyan-500" /> },
    { name: 'React Native', icon: <SiReact className="text-5xl text-blue-400" /> },
    { name: 'Ionic', icon: <SiIonic className="text-5xl text-indigo-500" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-5xl text-purple-600" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-5xl text-teal-500" /> },
    { name: 'Flutter', icon: <SiFlutter className="text-5xl text-blue-400" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-5xl text-yellow-500" /> },
    { name: 'Docker', icon: <FaDocker className="text-5xl text-blue-600" /> },
    { name: 'Git', icon: <FaGitAlt className="text-5xl text-orange-600" /> },
    { name: 'Linux', icon: <span className="text-4xl">🐧</span> }, // emoji
    { name: 'Spring Boot', icon: <SiSpringboot className="text-5xl text-green-600" /> },
    { name: 'Java', icon: <FaJava className="text-5xl text-red-600" /> },
    { name: 'JEE', icon: <span className="text-4xl">☕</span> },
    { name: 'IoT', icon: <span className="text-4xl">📡</span> },
    { name: 'Raspberry Pi', icon: <SiRaspberrypi className="text-5xl text-rose-600" /> },
    { name: 'Arduino', icon: <SiArduino className="text-5xl text-blue-500" /> },
    { name: '.NET', icon: <SiDotnet className="text-5xl text-purple-700" /> },
    { name: 'MySQL', icon: <SiMysql className="text-5xl text-blue-700" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-5xl text-green-700" /> },
    { name: 'Angular', icon: <SiAngular className="text-5xl text-red-700" /> },
    { name: 'Jira', icon: <SiJira className="text-5xl text-blue-500" /> },
    { name: 'Selenium', icon: <BsBugFill className="text-5xl text-green-500" /> },
    { name: 'Figma', icon: <FaFigma className="text-5xl text-pink-500" /> },
    { name: 'Football Tactique', icon: <span className="text-5xl">⚽</span> },
  ];

  return (
    <section className="bg-gray-800 text-white py-16" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">
          Compétences
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {skill.icon}
              <p className="mt-2 text-lg text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

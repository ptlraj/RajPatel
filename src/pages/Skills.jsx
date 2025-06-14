import React from "react";
import { motion } from "framer-motion";

import reactImg from "/images/react.png";
import nodeImg from "/images/node.png";
import expressImg from "/images/express.png";
import mongoImg from "/images/mongo.png";
import phpImg from "/images/php.png";
import laravelImg from "/images/laravel.png";
import jqueryImg from "/images/jquery.png";
import angularImg from "/images/angular.png";
import htmlImg from "/images/html.png";
import cssImg from "/images/css.png";
import jsImg from "/images/javascript.png";
import postgresImg from "/images/postgre.png";
import mysqlImg from "/images/mysql.png";
import tailwindImg from "/images/tailwindcss.png";
import bootstrapImg from "/images/bootstrap.png";
import arduinoImg from "/images/arduino.png";
import gitImg from "/images/git.png";
import githubImg from "/images/github.png";
import vscodeImg from "/images/vscode.png";
import blenderImg from "/images/blender.png";
import davinciImg from "/images/davinci-resolve.png";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const cardHover = {
  scale: 1.1,
  boxShadow: "0px 0px 20px rgba(34, 211, 238, 0.8)",
  borderColor: "rgb(34, 211, 238)",
  transition: { duration: 0.3, ease: "easeOut" },
};

const skills = [
  {
    name: "React.js",
    bg: reactImg,
    color: "bg-gradient-to-br from-cyan-400 to-blue-600",
  },
  {
    name: "Node.js",
    bg: nodeImg,
    color: "bg-gradient-to-br from-green-500 to-green-700",
  },
  {
    name: "Express.js",
    bg: expressImg,
    color: "bg-gradient-to-br from-green-500 to-green-700",
  },
  {
    name: "MongoDb",
    bg: mongoImg,
    color: "bg-gradient-to-br from-green-500 to-green-700",
  },
  {
    name: "PHP",
    bg: phpImg,
    color: "bg-gradient-to-br from-purple-500 to-purple-700",
  },
  {
    name: "Laravel",
    bg: laravelImg,
    color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
  },
  {
    name: "jQuery",
    bg: jqueryImg,
    color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
  },
  {
    name: "Angular",
    bg: angularImg,
    color: "bg-gradient-to-br from-red-400 to-red-600",
  },
  {
    name: "HTML",
    bg: htmlImg,
    color: "bg-gradient-to-br from-orange-400 to-orange-600",
  },
  {
    name: "CSS",
    bg: cssImg,
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    name: "JavaScript",
    bg: jsImg,
    color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
  },
  {
    name: "PostgreSQL",
    bg: postgresImg,
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    name: "MySQL",
    bg: mysqlImg,
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    name: "Tailwind CSS",
    bg: tailwindImg,
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    name: "Bootstrap",
    bg: bootstrapImg,
    color: "bg-gradient-to-br from-indigo-500 to-purple-700",
  },
  {
    name: "Arduino IDE",
    bg: arduinoImg,
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    name: "Git",
    bg: gitImg,
    color: "bg-gradient-to-br from-orange-400 to-red-500",
  },
  {
    name: "GitHub",
    bg: githubImg,
    color: "bg-gradient-to-br from-gray-800 to-black",
  },
  {
    name: "VS Code",
    bg: vscodeImg,
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    name: "Blender",
    bg: blenderImg,
    color: "bg-gradient-to-br from-orange-500 to-orange-700",
  },
  {
    name: "Davinci Resolve",
    bg: davinciImg,
    color: "bg-gradient-to-br from-gray-700 to-gray-900",
  },
];

const SkillCard = ({ skill }) => {
  return (
    <motion.li
      className="flex flex-col items-center gap-3 py-6"
      variants={cardVariants}
      whileHover={cardHover}
    >
      <div
        style={{
          backgroundImage: `url(${skill.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`w-28 h-32 ${skill.color} rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden py-4`}
      ></div>
      <span className="text-lg font-semibold text-white tracking-wide">
        {skill.name}
      </span>
    </motion.li>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 tracking-tight drop-shadow-md">
          {" "}
          {/* Adjusted text sizes here */}
          My Skills
        </h2>
        <motion.ul
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 justify-center"
          variants={cardVariants}
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default Skills;

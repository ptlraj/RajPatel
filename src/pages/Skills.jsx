import React from "react";
import { motion } from "framer-motion";

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
    bg: "src/images/react.png",
    color: "bg-gradient-to-br from-cyan-400 to-blue-600",
  },
  {
    name: "Node.js",
    bg: "src/images/node.png",
    color: "bg-gradient-to-br from-green-500 to-green-700",
  },
  {
    name: "Express.js",
    bg: "src/images/express.png",
    color: "bg-gradient-to-br from-green-500 to-green-700",
  },
  {
    name: "MongoDb",
    bg: "src/images/mongo.png",
    color: "bg-gradient-to-br from-green-500 to-green-700",
  },
  {
    name: "PHP",
    bg: "src/images/php.png",
    color: "bg-gradient-to-br from-purple-500 to-purple-700",
  },
  {
    name: "Laravel",
    bg: "src/images/laravel.png",
    color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
  },
  {
    name: "jquery",
    bg: "src/images/jquery.png",
    color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
  },
  {
    name: "Angular",
    bg: "src/images/Angular.png",
    color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
  },
  {
    name: "HTML",
    bg: "src/images/html.png",
    color: "bg-gradient-to-br from-orange-400 to-orange-600",
  },
  {
    name: "CSS",
    bg: "src/images/css.png",
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    name: "JavaScript",
    bg: "src/images/javascript.png",
    color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
  },
  {
    name: "postgresql",
    bg: "src/images/postgre.png",
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    name: "MySQL",
    bg: "src/images/mysql.png",
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    name: "MongoDb",
    bg: "src/images/mongo.png",
    color: "bg-gradient-to-br from-green-500 to-green-700",
  },
  {
    name: "Tailwind CSS",
    bg: "src/images/tailwindcss.png",
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    name: "Bootstrap",
    bg: "src/images/bootstrap.png",
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    name: "Arduino IDE",
    bg: "src/images/arduino.png",
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    name: "Git",
    bg: "src/images/git.png",
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    name: "Git Hub",
    bg: "src/images/github.png",
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    name: "Vs Code",
    bg: "src/images/vscode.png",
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    name: "Blender",
    bg: "src/images/blender.png",
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    name: "Davinci Resolve",
    bg: "src/images/davinci-resolve.png",
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
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
        className={`w-28 h-32 ${skill.color} rounded-xl flex items-center justify-center shadow-lg  relative overflow-hidden py-4 box-shadow-[0_0_15px_rgba(34,211,238,0.5)]`}
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
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-12 tracking-tight drop-shadow-md">
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

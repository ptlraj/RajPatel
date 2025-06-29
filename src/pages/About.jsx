import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "/images/profile4.jpg"; // Update the path if needed

function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-blue-950 via-gray-800 to-gray-800 text-white py-24 min-h-screen flex items-center overflow-hidden"
    >
      <motion.div
        className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-blue-400">
          About Me
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
              <img
                src={profilePic}
                alt="Raj Patel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            {/* --- CHANGE STARTS HERE --- */}
            <dl className="mt-6 text-sm leading-relaxed text-gray-200 space-y-3 text-left">
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                <dt className="font-medium text-blue-300 sm:w-24">Name:</dt>
                <dd>Raj Vijaybhai Patel</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                <dt className="font-medium text-blue-300 sm:w-24">Age:</dt>
                <dd>22</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                <dt className="font-medium text-blue-300 sm:w-24">From:</dt>
                <dd>Bharuch, Gujarat, India</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                <dt className="font-medium text-blue-300 sm:w-24">Stack:</dt>
                <dd>MERN Stack Developer, Php Developer</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                <dt className="font-medium text-blue-300 sm:w-24">Explored:</dt>
                <dd>Angular, Laravel</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                <dt className="font-medium text-blue-300 sm:w-24">Goal:</dt>
                <dd>Build elegant, problem-solving digital experiences</dd>
              </div>
            </dl>
            {/* --- CHANGE ENDS HERE --- */}

            {/* Buttons */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4">
              <a
                href="/certificates/rajresume.pdf"
                download
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition"
              >
                Download Resume
              </a>

              <div className="flex justify-center md:justify-start gap-4 text-blue-400 text-2xl">
                <a
                  href="https://github.com/ptlraj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="hover:text-white transition" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rajpatel-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="hover:text-white transition" />
                </a>
                <a href="mailto:rajvp1103@gmail.com">
                  <FaEnvelope className="hover:text-white transition" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;

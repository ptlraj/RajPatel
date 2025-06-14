import { motion } from "framer-motion";
import { useState } from "react";

function Experience() {
  const experiences = [
    {
      position: "PHP Developer",
      company: "Bits Infotech, Ahmedabad, Gujarat, India",
      date: "Jan 2025 - May 2025",
      details: [
        "Developed a full-featured e-commerce website using PHP, Bootstrap, jQuery, AJAX, and MySQL.",
        "Implemented dual-role functionality for Admin and User.",
        "Integrated OTP-based email authentication for login and registration.",
        "Integrated Razorpay API for secure online payments.",
      ],
      documentUrl: "/certificates/rajbits.pdf", // Changed to documentUrl
      documentType: "Certificate", // Added documentType
    },
    {
      position: "Intern Web Developer",
      company: "Tatvasoft, Ahmedabad, Gujarat, India",
      date: "May 2024 - June 2024",
      details: [
        "Project: Community Investment Platform",
        "Implemented using React.js for the frontend and Node.js for the backend.",
        "Leveraged PostgreSQL as the database to ensure reliable and efficient data management.",
        "Integrated various APIs to enhance the website’s functionality and interactivity.",
      ],
      documentUrl: "/certificates/raj_tatvasoft.pdf", // Changed to documentUrl
      documentType: "Certificate", // Added documentType
    },
    {
      position: "Student (B.E. in IT)",
      company: "A D Patel Institute Of Technology, Anand, Gujarat, India",
      date: "Jun 2021 - May 2025",
      details: [
        "Pursued a Bachelor’s degree in Information Technology.",
        "Worked on multiple academic projects including a feature-rich e-commerce system with secure authentication and payment integration.",
      ],
      percentage: "8.66 CGPA",
      documentUrl: "/certificates/rajbits.pdf", // Changed to documentUrl
      documentType: "Marksheet", // Set to Marksheet
    },
    {
      position: "Student (Minor Degree in IoT)",
      company: "A D Patel Institute Of Technology, Anand, Gujarat, India",
      date: "Jun 2022 - May 2024",
      details: [
        "Completed a Minor Degree in Internet of Things (IoT) focusing on connected devices and smart systems.",
        "Gained practical experience in **sensor integration, embedded systems, and data communication protocols** (e.g., MQTT, HTTP).",
        "Developed **IoT-based projects** involving data collection from various sensors and real-time monitoring.",
        "Explored concepts of **cloud-based IoT platforms** and their application in smart environments.",
      ],
      percentage: "7.50 CGPA",
      documentUrl: "/certificates/rajbits.pdf", // Assuming this is the correct path for the marksheet
      documentType: "Marksheet",
    },
    {
      position: "Student (12th Science)",
      company: "Sarvodaya High School, Ankleshwar, Gujarat, India",
      date: "Jun 2020 - May 2021",
      details: [
        "Completed Higher Secondary Education in the Science stream.",
        "Focused on Mathematics and Computer Science.",
      ],
      percentage: "76.73%",
      documentUrl: "/certificates/12.pdf", // Changed to documentUrl
      documentType: "Marksheet", // Set to Marksheet
    },
    {
      position: "Student (10th Grade)",
      company: "Smt K.V. Mangukiya School, Surat, Gujarat, India",
      date: "Jun 2018 - May 2019",
      details: [
        "Completed Secondary School Certificate (SSC).",
        "Core subjects included Mathematics and Science.",
      ],
      percentage: "79.50%",
      documentUrl: "/certificates/10.pdf", // Changed to documentUrl
      documentType: "Marksheet", // Set to Marksheet
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <section
        id="experience"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black py-16 pt-24"
      >
        <motion.div
          className="container mx-auto px-4 relative z-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-300 tracking-tight">
            My Experience
          </h2>
          <div className="relative max-w-2xl mx-auto mb-24">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-gray-700 opacity-70"></div>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-gray-800 p-5 rounded-lg border border-blue-600/30 shadow-sm hover:shadow-md transition-shadow duration-300 max-w-sm mx-auto ${
                    index % 2 === 0 ? "lg:ml-8" : "lg:mr-8"
                  }`}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  {/* Desktop Certificate/Marksheet Link */}
                  <div
                    className={`hidden sm:block absolute top-1/2 transform -translate-y-1/2 ${
                      index % 2 === 0 ? "-left-10" : "-right-10"
                    }`}
                  >
                    <a
                      href={exp.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-6 h-24 bg-blue-500 hover:bg-blue-600 flex items-center justify-center rounded-md shadow-md transition-all duration-300"
                      title={`View ${exp.documentType}`} // Conditional title
                    >
                      <span className="text-white text-xs transform -rotate-90 whitespace-nowrap">
                        {exp.documentType} {/* Conditional text */}
                      </span>
                    </a>
                  </div>

                  {/* Mobile Certificate/Marksheet Link */}
                  <div className="sm:hidden mt-4">
                    <a
                      href={exp.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-block bg-blue-500 hover:bg-blue-600 text-center text-white text-sm py-2 rounded-md shadow-md transition-all duration-300"
                    >
                      View {exp.documentType} {/* Conditional text */}
                    </a>
                  </div>

                  <h3 className="text-lg font-semibold text-blue-300 mb-1">
                    {exp.position}
                    {exp.percentage && (
                      <span className="ml-2 px-2 py-0.5 bg-blue-700 text-blue-100 rounded-full text-xs font-medium">
                        {exp.percentage}
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-400">{exp.company}</p>
                  <p className="text-xs text-gray-500 mb-2">{exp.date}</p>
                  <button
                    onClick={() => toggleDetails(index)}
                    className="text-sm text-blue-400 hover:text-blue-300 underline focus:outline-none"
                  >
                    {openIndex === index ? "Hide Details" : "Show Details"}
                  </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-gray-300 text-sm"
                    >
                      <ul className="list-disc pl-5 space-y-1">
                        {exp.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Experience;

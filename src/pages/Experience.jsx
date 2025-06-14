import { motion } from "framer-motion";
import { useState } from "react";

function Experience() {
  const experiences = [
    {
      position: "Php Developer",
      company: "Bits Infotech, Ahmedabad, Gujarat, India",
      date: "Jan 2025 - May 2025",
      details:
        "Developed a full-featured e-commerce website using PHP, Bootstrap, jQuery, AJAX, and MySQL. Implemented dual-role functionality for Admin and User to enable role-based access and features. Integrated an OTP-based login and registration system via email for secure user authentication and incorporated Razorpay API for seamless online payment processing.",
      certificateUrl: "/certificates/rajbits.pdf",
    },
    {
      position: "Intern Web Developer",
      company: "Tatvasoft, Ahmedabad, Gujarat, India",
      date: "May 2024 - June 2024",
      details:
        "Developed a Community Investment Platform using React.js for the frontend and Node.js for the backend. Utilized PostgreSQL for efficient data management and integrated multiple APIs to enhance functionality and user interactivity.",
      certificateUrl: "/certificates/raj_tatvasoft.pdf",
    },
  ];

  const marksheets = [
    {
      title: "Bachelor of Engineering, Information Technology",
      institute: "A D Patel Institute Of Technology, Anand",
      date: "2021-2025",
      cgpa: "8.66 CGPA",
      semesterFiles: [
        "/certificates/sem1.pdf",
        "/certificates/sem2.pdf",
        "/certificates/sem3.pdf",
        "/certificates/sem4.pdf",
        "/certificates/sem5.pdf",
        "/certificates/sem6.pdf",
        "/certificates/sem7.pdf",
        "/certificates/sem8.pdf",
      ],
      fileUrl: "/certificates/degree.pdf",
    },
    {
      title: "Minor Degree, Internet Of Things",
      institute: "A D Patel Institute Of Technology, Anand",
      date: "2022-2024",
      cgpa: "7.66 CGPA",
      semesterFiles: [
        "/certificates/sem3IOT.pdf",
        "/certificates/sem4IOT.pdf",
        "/certificates/sem5IOT.pdf",
        "/certificates/sem6IOT.pdf",
      ],
      fileUrl: "/certificates/degree.pdf",
    },
    {
      title: "12th Grade Marksheet",
      institute: "Sarvodaya High School, Ankleshwar",
      date: "2021",
      percentage: "76.30%",
      fileUrl: "/certificates/12.pdf",
    },
    {
      title: "10th Grade Marksheet",
      institute: "Smt K.V. Mangukiya School, Surat",
      date: "2019",
      percentage: "79.50%",
      fileUrl: "/certificates/10.pdf",
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
      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black py-12"
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
            {" "}
            {/* Changed mb-16 to mb-24 */}
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
                  <div
                    className={`hidden sm:block absolute top-1/2 transform -translate-y-1/2 ${
                      index % 2 === 0 ? "-left-10" : "-right-10"
                    }`}
                  >
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-6 h-24 bg-blue-500 hover:bg-blue-600 flex items-center justify-center rounded-md shadow-md transition-all duration-300"
                      title="View Certificate"
                    >
                      <span className="text-white text-xs transform -rotate-90 whitespace-nowrap">
                        Certificate
                      </span>
                    </a>
                  </div>

                  <div className="sm:hidden mt-4">
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-block bg-blue-500 hover:bg-blue-600 text-center text-white text-sm py-2 rounded-md shadow-md transition-all duration-300"
                    >
                      View Certificate
                    </a>
                  </div>

                  <h3 className="text-lg font-semibold text-blue-300 mb-1">
                    {exp.position}
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
                      {exp.details}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Marksheet Section */}
      <section className="bg-black py-12">
        <motion.div
          className="container mx-auto px-4"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-green-300 tracking-tight">
            My Marksheets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {" "}
            {/* Changed mb-16 to mb-24 */}
            {marksheets.map((sheet, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-5 rounded-lg border border-green-600/30 shadow-md w-full"
                variants={cardVariants}
                whileHover="hover"
              >
                <h3 className="text-lg font-semibold text-green-300 mb-1">
                  {sheet.title}
                </h3>
                <p className="text-sm text-gray-400">{sheet.institute}</p>
                <p className="text-xs text-gray-500">{sheet.date}</p>

                {sheet.cgpa && (
                  <p className="text-sm text-gray-300 mt-2">
                    <strong>CGPA:</strong> {sheet.cgpa}
                  </p>
                )}
                {sheet.percentage && (
                  <p className="text-sm text-gray-300 mt-2">
                    <strong>Percentage:</strong> {sheet.percentage}
                  </p>
                )}

                {sheet.semesterFiles && (
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    {sheet.semesterFiles.map((semUrl, semIndex) => (
                      <a
                        key={semIndex}
                        href={semUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white text-xs py-1 rounded text-center transition"
                      >
                        Sem {semIndex + 1}
                      </a>
                    ))}
                  </div>
                )}

                {(sheet.title.includes("10th") ||
                  sheet.title.includes("12th")) && (
                  <a
                    href={sheet.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block bg-green-500 hover:bg-green-600 text-white text-center text-sm py-2 rounded-md transition-all duration-300"
                  >
                    View Full Marksheet
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Experience;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Projects() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const projects = [
    {
      title: "Coding and Mentorship Platform for University",
      shortDescription: "Connect students with mentors for coding help.",
      fullDescription:
        "Implemented using React, Tailwind CSS, Node.js and MongoDB. Developed a platform to help mentors and students interact and learn from each other. Provided features for sharing courses, materials, videos, quizzes, and practice questions.",
      github: "https://github.com/ptlraj/Coding-and-Mantorship-Platform.git",
      video: "https://www.youtube.com/embed/ZcPd1R1SZRg?si=hImQRwYIlP1dEFQd",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "E-Commerce Website",
      shortDescription: "A full-featured online store with cart and payment.",
      fullDescription:
        "Developed a full-featured e-commerce website using PHP, Bootstrap, jQuery, AJAX, and MySQL.Implemented dual-role functionality for Admin and User, enabling role-based access and features, Integrated OTP-based login and registration system via email for secure user authentication,Incorporated Razorpay API to enable seamless online payment processing",
      github: "https://github.com/ptlraj/ecommerce",
      video: "https://www.youtube.com/embed/HBN5U3XDIIA?si=WhDWy7GY7XRwufvk",
      technologies: [
        "Php",
        "Bootstrap",
        "MySQL",
        "JQuery",
        "AJAX",
        "Razorpay API",
      ],
    },
    {
      title: "Employee Management System (EMS)",
      shortDescription: "Admin dashboard to assign and manage employee tasks ",
      fullDescription:
        "Implemented using React.js and Tailwind CSS Developed a system where an admin can assign tasks to employees. Used local storage for handling login data, employee data, and admin data.",
      github: "https://github.com/ptlraj/Employee-Management-System",
      video: "https://www.youtube.com/embed/QHZq7p-AxXY?si=cmGrAfuVM-AJZ3uL",
      technologies: ["React", "Tailwind CSS", "Local Storage"],
    },
    // {
    //   title: "Portfolio Website",
    //   shortDescription:
    //     "Modern portfolio with animations and responsive design.",
    //   fullDescription:
    //     "Responsive portfolio built using React and Tailwind CSS, includes Framer Motion animations, and downloadable resume.",
    //   github: "https://github.com/ptlraj/Employee-Management-System",
    //   video: "https://www.youtube.com/embed/QHZq7p-AxXY?si=cmGrAfuVM-AJZ3uL",
    //   technologies: [
    //     "React",
    //     "Tailwind CSS",
    //     "Framer Motion",
    //     "Spline(3D Objects)",
    //   ],
    // },
    // {
    //   title: "Smart Car Parking System",
    //   shortDescription:
    //     "Remote-controlled car with ultrasonic sensors for parking.",
    //   fullDescription:
    //     "Developed a remote-controlled car using the Blynk platform, enabling directional movement via mobile device. Integrated ultrasonic sensors for object detection, enhancing parking precision and obstacle avoidance. Hardware components: ESP8266, Motor driver, DC motor, Servo motor, Ultrasonic Sensor, etc.",
    //   github: "https://github.com/yourusername/task-manager-app",
    //   video:
    //     "https://www.youtube.com/embed/XjC9D_EBVIM?si=ThZ7xKD4T4NaduD2&start=1",
    //   technologies: [
    //     "Iot",
    //     "Blynk",
    //     "Arduino IDE",
    //     "ESP8266",
    //     "Motor Driver",
    //     "DC Motor",
    //     "Servo Motor",
    //     "Ultrasonic Sensor",
    //   ],
    // },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // State for the generated project idea
  const [projectIdea, setProjectIdea] = useState("");
  const [isLoadingIdea, setIsLoadingIdea] = useState(false);
  const [errorIdea, setErrorIdea] = useState("");

  // Function to generate a project idea using Gemini API
  const generateProjectIdea = async () => {
    setIsLoadingIdea(true);
    setProjectIdea(""); // Clear previous idea
    setErrorIdea(""); // Clear previous error

    // Updated prompt for a more general and relatable project idea
    const prompt =
      "Generate a concise and innovative project idea for anyone looking to build something cool, with a brief description and a couple of key features. Make it exciting and relevant to modern trends.";
    let chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });
    const payload = { contents: chatHistory };

    // IMPORTANT: Replace "YOUR_GEMINI_API_KEY" with your actual Gemini API Key from Google AI Studio.
    // This is required for the feature to work outside of the Gemini preview environment.
    const apiKey = "AIzaSyD4IKNtdNnuQt-naz0NtNtLHj8yNSpxTrQ"; // <--- PASTE YOUR API KEY HERE

    // Log the API key (for debugging purposes, remove in production)
    console.log(
      "Using API Key (first few chars):",
      apiKey.substring(0, 5) + "..."
    );

    if (!apiKey || apiKey === "YOUR_GEMINI_API_KEY") {
      setErrorIdea(
        "API Key is missing or invalid. Please replace 'YOUR_GEMINI_API_KEY' in Projects.jsx with your actual Gemini API key."
      );
      setIsLoadingIdea(false);
      return; // Stop execution if API key is not set
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      // Improved check for expected response structure
      if (
        response.ok &&
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0 &&
        typeof result.candidates[0].content.parts[0].text === "string"
      ) {
        const text = result.candidates[0].content.parts[0].text;
        setProjectIdea(text);
      } else {
        // Log the full unexpected response for debugging
        console.error(
          "Unexpected API response structure or API error:",
          result
        );
        // Check for specific API error messages from the response
        if (result.error && result.error.message) {
          setErrorIdea(
            `API Error: ${result.error.message}. Please check your API key or try again.`
          );
        } else {
          setErrorIdea(
            "Failed to generate idea: Received an unexpected response from the AI. This might be a temporary issue or an unusual output. Please try again."
          );
        }
      }
    } catch (err) {
      setErrorIdea(
        "Failed to generate idea: " +
          err.message +
          ". Please check your internet connection or try again."
      );
      console.error("Error generating project idea:", err);
    } finally {
      setIsLoadingIdea(false);
    }
  };

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-black via-gray-900 to-blue-950 text-white min-h-screen flex items-center py-16 pt-24" // Added pt-24 for more top padding
    >
      <motion.div
        className="container mx-auto px-4"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-blue-400">
          {" "}
          {/* Decreased text size */}
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-gray-700 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-300">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-2">{project.shortDescription}</p>

              {expandedIndex === index && (
                <p className="text-gray-400 mb-4">{project.fullDescription}</p>
              )}

              <button
                onClick={() => toggleDescription(index)}
                className="text-sm text-blue-400 hover:underline mb-3"
              >
                {expandedIndex === index ? "Hide Details" : "Show Details"}
              </button>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-x-3 mb-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-500 text-white py-1 px-3 rounded-md text-sm transition"
                >
                  GitHub
                </a>
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded-md text-sm transition"
                >
                  Watch Video
                </a>
              </div>

              <iframe
                className="rounded-lg w-full aspect-video border border-gray-700"
                src={project.video.replace("watch?v=", "embed/")}
                title={`${project.title} video`}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;

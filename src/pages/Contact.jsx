import React from "react";

const Contact = () => {
  return (
    // Main container for the contact page section
    // Consistent background gradient and flex centering with Home.jsx
    // Added pt-24 (padding-top: 96px) to ensure content clears the fixed header.
    // min-h-screen re-added to main div to take full page height.
    <div
      id="contact" // Important for navigation from Header and Home page buttons
      className="relative min-h-screen bg-gradient-to-b from-blue-950 via-gray-800 to-gray-800 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 text-white font-inter antialiased overflow-hidden pt-24"
      // Added scroll-mt-24 to potentially help with native smooth scrolling to anchors
      style={{ scrollMarginTop: "96px" }} // Fallback/alternative for scroll-mt-24 if not directly supported or for precise control
    >
      {/* Background radial gradient decoration */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(67, 56, 202, 0.2) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(103, 232, 249, 0.1) 0%, transparent 50%)",
        }}
      ></div>

      {/* Contact Section - styled with glass effect and new decorations */}
      {/* Adjusted py-12 to py-8 for further decreased vertical height of the box */}
      <section
        className="relative py-8 px-6 md:px-12 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl max-w-4xl w-full z-10
                          transition-all duration-500 ease-in-out hover:shadow-2xl hover:border-indigo-400 hover:scale-[1.01]
                          text-center border border-white/20 contact-section-glow"
      >
        {" "}
        {/* Added custom glow class */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-10 animate-fade-in-down">
          {" "}
          {/* Reduced mb for heading */}
          Get in Touch
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up">
          {" "}
          {/* Reduced mb for paragraph */}
          Interested in my work or have a question? Drop me a line, and I'll get
          back to you as soon as possible.
        </p>
        {/* Contact Details */}
        <div className="flex flex-col items-center space-y-6 animate-fade-in-up">
          {" "}
          {/* Reduced space-y slightly to compensate */}
          <a
            href="mailto:rajvp1103@gmail.com" // Updated with your email
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white text-xl font-medium rounded-full shadow-lg
                       hover:bg-indigo-700 transition duration-300 transform hover:-translate-y-1 hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {/* Email Icon (Inline SVG for consistency) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28" // Increased size
              height="28" // Increased size
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-3 h-7 w-7" // Adjusted margin/size
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Send Me an Email
          </a>
          {/* New: Contact Number Link */}
          <a
            href="tel:+919510854847" // Updated with your contact number
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white text-xl font-medium rounded-full shadow-lg
                       hover:bg-indigo-700 transition duration-300 transform hover:-translate-y-1 hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {/* Phone Icon (Inline SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-3 h-7 w-7"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.39-3.41A19.5 19.5 0 0 1 2.92 2.18 2 2 0 0 1 4.9 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-1.18 2.19l-.7.35a1 1 0 0 0-.46.8L6.09 9.91a16 16 0 0 0 7.91 7.91l1.64-1.64a1 1 0 0 0 .8-.46l.35-.7A2 2 0 0 1 18 15.34l2.81.7a2 2 0 0 1 1.72 2z" />
            </svg>
            +91 9510854847
          </a>
          {/* Visual Separator */}
          <div className="w-24 h-0.5 bg-gray-600/50 rounded-full my-4"></div>{" "}
          {/* Thin separator line */}
          <div className="text-gray-300 text-xl font-semibold">
            Or find me on social media:
          </div>
          {/* Social Media Links */}
          <div className="flex space-x-8 mt-4">
            {" "}
            {/* Increased space-x and added mt-4 */}
            <a
              href="https://www.linkedin.com/in/rajpatel-dev" // Updated with your LinkedIn profile
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition duration-300 transform hover:scale-125 hover:rotate-3"
              aria-label="LinkedIn Profile"
            >
              {/* LinkedIn Icon (Inline SVG for consistency) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://github.com/ptlraj" // Updated with your GitHub profile
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition duration-300 transform hover:scale-125 hover:-rotate-3"
              aria-label="GitHub Profile"
            >
              {/* GitHub Icon (Inline SVG for consistency) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-.95-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5-.68 1.02-1.03 2.25-.95 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/__.raj_.patel.__" // Updated with your Instagram profile
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition duration-300 transform hover:scale-125 hover:rotate-3"
              aria-label="Instagram Profile"
            >
              {/* Instagram Icon (Inline SVG for consistency) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            {/* Add more social links as needed */}
          </div>
        </div>
      </section>

      {/* Basic Tailwind Animation Styles (copied from Home.jsx for consistency) */}
      <style>
        {`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 0.7s infinite step-start;
        }

        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMwM.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        /* Custom glow effect for the contact section */
        .contact-section-glow:hover {
            box-shadow: 0 0 20px rgba(103, 232, 249, 0.5), 0 0 40px rgba(67, 56, 202, 0.3); /* Cyan and Indigo glow */
        }
        `}
      </style>
    </div>
  );
};

export default Contact;

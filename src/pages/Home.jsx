import React, { useState, useEffect } from "react";
import Robot from "../pages/Robot"; // Importing the Robot component
import profilePictureUrl from "/images/profile.jpg"; // Update this path to your actual image

// Typewriter component for dynamic text display
const Typewriter = ({
  words,
  typingSpeed,
  deletingSpeed,
  delayAfterTyping,
  delayAfterDeleting,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing logic
        if (charIndex < currentWord.length) {
          setCurrentText((prev) => prev + currentWord.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
          timer = setTimeout(handleTyping, typingSpeed);
        } else {
          // Done typing a word, wait then start deleting
          timer = setTimeout(() => setIsDeleting(true), delayAfterTyping);
        }
      } else {
        // Deleting logic
        if (charIndex > 0) {
          setCurrentText((prev) => prev.substring(0, prev.length - 1));
          setCharIndex((prev) => prev - 1);
          timer = setTimeout(handleTyping, deletingSpeed);
        } else {
          // Done deleting, move to the next word
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Cycle through words
          timer = setTimeout(handleTyping, delayAfterDeleting);
        }
      }
    };

    // Initial delay before starting the typing effect or continuing
    timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    // Cleanup timer on component unmount or re-render
    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    charIndex,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayAfterTyping,
    delayAfterDeleting,
  ]);

  return (
    <p className="text-lg sm:text-xl text-indigo-300 mb-8 max-w-2xl mx-auto md:mx-0 font-semibold animate-fade-in h-8">
      {" "}
      {/* Added h-8 to prevent layout shift */}
      {currentText}
      <span className="animate-blink font-normal">|</span>{" "}
      {/* Blinking cursor */}
    </p>
  );
};

const Home = () => {
  // You can replace this with a real image path or a dynamic image URL
  return (
    // Main container for the home page, styled with Tailwind.
    // Uses flexbox to center content vertically and horizontally.
    // 'p-4 sm:p-6 lg:p-8' provides padding/margin from the viewport edges.
    <div
      id="home"
      className="min-h-screen bg-gradient-to-b from-black via-gray-800 to-blue-950 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 text-white font-inter antialiased"
    >
      {/* Hero Section - now acts as the centered glass-effect box */}
      <section
        className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-12 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl space-y-8 md:space-y-0 md:space-x-12
          max-w-6xl w-full transition-all duration-300 ease-in-out hover:shadow-2xl text-center border border-white/20 overflow-hidden"
        style={{
          boxShadow: `
      inset 0 0 30px rgba(0, 0, 0, 0.4),
      inset 0 8px 20px rgba(255, 255, 255, 0.05),
      inset 0 -8px 20px rgba(0, 0, 0, 0.2)
    `,
        }}
      >
        {/*
          Use 'hidden' to hide on mobile (small screens) and 'md:block' to show on medium screens and up.
        */}
        <div className="hidden md:block">
          <Robot />
        </div>

        {/* Adjusted space-y-8 for vertical spacing between content elements */}
        <div className="flex-grow space-y-8 text-center md:text-left">
          {" "}
          {/* Re-added md:text-left for larger screens */}
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight animate-fade-in-down">
            Hi, I'm
            <h1>
              <span className="text-indigo-400">Raj Patel</span>
            </h1>
          </h1>
          {/* Tagline replaced with Typewriter component */}
          <Typewriter
            words={[
              "MERN Stack Developer",
              "Php Developer",
              "Software Engineer",
            ]}
            typingSpeed={100}
            deletingSpeed={50}
            delayAfterTyping={1500}
            delayAfterDeleting={500}
          />
          {/* Call-to-action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#projects" // Linked to the projects section below
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              View My Work
              {/* Lucide React Arrow Right icon for visual appeal */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-5 w-5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact" // Linked to the contact section below
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Get in Touch
              {/* Lucide React Mail icon for visual appeal */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-5 w-5"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
        {/* Profile Picture (Re-added) */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 animate-fade-in-right">
          <img
            src={profilePictureUrl}
            alt="Your Name - Profile"
            className="w-full h-full rounded-full object-cover shadow-2xl ring-4 ring-indigo-300 ring-offset-4 ring-offset-white transition-all duration-500 ease-in-out transform hover:scale-105 hover:ring-indigo-400"
            // Fallback for image loading error
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/400x400/D1D5DB/1F2937?text=Image+Error";
            }}
          />
          {/* Small animated circle or badge */}
          <span className="absolute bottom-4 right-4 block h-6 w-6 rounded-full ring-2 ring-white bg-green-500 animate-pulse"></span>
        </div>
      </section>

      {/* Basic Tailwind Animation Styles (Add these to your global CSS or directly in the component for a quick demo) */}
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
        `}
      </style>
    </div>
  );
};

export default Home; // Export Home as the default component

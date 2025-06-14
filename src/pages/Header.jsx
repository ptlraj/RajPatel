import { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle smooth scrolling
  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      // Close mobile menu after a slight delay for better UX
      if (isOpen) {
        setTimeout(() => setIsOpen(false), 300);
      }
    }
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];
      // Offset for header height (96px) to ensure content clears the fixed header
      const scrollPosition = window.scrollY + 96;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full m-0 top-0 z-50 backdrop-blur-lg bg-gray-950/70 rounded-b-lg shadow-[rgba(0,0,0,0.6)_15px_0_15px_-5px,_rgba(0,0,0,0.6)_-15px_0_15px_-5px]">
      <nav className="flex items-center justify-between py-4 px-4 sm:px-6 md:px-8 lg:px-12">
        {" "}
        {/* Adjusted nav padding for better mobile spacing */}
        <div className="text-2xl font-bold text-white pr-4">
          {" "}
          {/* Removed left padding, added right padding for spacing from hamburger */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            className="hover:text-blue-400 transition duration-300"
            aria-label="Navigate to Home section"
          >
            Raj Patel
          </a>
        </div>
        <div className="hidden md:flex space-x-8">
          {" "}
          {/* Removed px from here, as nav handles it */}
          {["home", "about", "skills", "experience", "projects", "contact"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(section);
                }}
                className={`relative text-white py-2 transition duration-300 ${
                  activeSection === section
                    ? "text-blue-400 font-semibold"
                    : "hover:text-blue-400"
                }`}
                aria-current={activeSection === section ? "page" : undefined}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full transition-all duration-300"></span>
                )}
              </a>
            )
          )}
        </div>
        <div className="md:hidden pl-4">
          {" "}
          {/* Removed right padding, added left padding for spacing from logo */}
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-white p-2 rounded-md hover:bg-gray-800 transition duration-200"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-gray-950/90 backdrop-blur-md transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {["home", "about", "skills", "experience", "projects", "contact"].map(
            (section, index) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(section);
                }}
                className={`block py-3 px-6 text-white transition duration-300 transform ${
                  activeSection === section
                    ? "text-blue-400 font-semibold bg-gray-800/60"
                    : "hover:bg-gray-800/60 hover:text-blue-400"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  transform: isOpen ? "translateY(0)" : "translateY(-20px)",
                }}
                aria-current={activeSection === section ? "page" : undefined}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            )
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;

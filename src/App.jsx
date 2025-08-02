import Main from "./components/Main";
import { useEffect, useState } from "react";
import "./config/i18n/i18n";
import Header from "./components/Sections/Header";

const App = () => {
  const currentYear = new Date().getFullYear();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    setTimeout(scrollToSection, 100);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = () => {
    const section = document.querySelector(window.location.hash);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div
      className={`bg-gray-100 min-h-screen dark:bg-black transition-all duration-300 bg-blend-luminosity`}
    >
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className={`${isMenuOpen ? "blur-sm pointer-events-none" : ""}`}>
        <Main isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <footer className="w-full dark:border-gray-700 mt-10 py-4 px-6 text-sm text-center text-gray-500 dark:text-gray-400">
          <p>
            &copy; {currentYear} Romantiezer Rodríguez Pérez. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;

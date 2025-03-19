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
      className={`bg-white min-h-screen dark:bg-black transition-all duration-300 bg-[url('./assets/images/bluelight.webp')] bg-no-repeat bg-[length:600px_600px] bg-[left_-16em_bottom_-15rem] bg-fixed bg-blend-luminosity`}
    >
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className={`${isMenuOpen ? "blur-sm pointer-events-none" : ""}`}>
        <Main isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <footer className="text-gray-500 transition-all duration-500 dark:text-white mt-5 p-3 flex justify-end">
          <p>Copyright &copy; {currentYear} Romantiezer Rodríguez Pérez </p>
        </footer>
      </div>
    </div>
  );
};

export default App;

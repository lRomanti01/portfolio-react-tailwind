import { useState, useEffect } from "react";
import IconMenu from "../icons/IconMenu";
import Icon from "../icons/Icon";
import { useTranslation } from "react-i18next";
import { LanguageButton } from "../LanguageButton";
import { ThemeButton } from "../ThemeButton";
import {
  FaTimes,
  FaUserAlt,
  FaBriefcase,
  FaStar,
  FaCode,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ setIsMenuOpen, isMenuOpen }) => {
  const [activeButton, setActiveButton] = useState(null);
  const { t } = useTranslation();

  const HeaderButtonsList = [
    {
      title: t("about"),
      href: "#about",
      icon: <FaUserAlt className="text-primary dark:text-gray-300" />,
    },
    {
      title: t("experiences"),
      href: "#experiences",
      icon: <FaBriefcase className="text-primary dark:text-gray-300" />,
    },
    {
      title: t("skills"),
      href: "#skills",
      icon: <FaStar className="text-primary dark:text-gray-300" />,
    },
    {
      title: t("projects"),
      href: "#projects",
      icon: <FaCode className="text-primary dark:text-gray-300" />,
    },
  ];
useEffect(() => {
  const handleScroll = () => {
    let currentSection = null;

    HeaderButtonsList.forEach((item) => {
      const section = document.getElementById(item.href.replace("#", ""));
      if (section) {
        const rect = section.getBoundingClientRect();

        // Puedes ajustar el umbral aquí
        if (rect.top <= 200 && rect.bottom >= 100) {
          currentSection = item.href;
        }
      }
    });

    if (currentSection !== activeButton) {
      setActiveButton(currentSection);
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // ejecutarlo una vez al montar

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [activeButton]);


  const handleClick = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-10">
      <div
        className={`bg-white/30 backdrop-blur-md mx-5 rounded-md border-b md:rounded-none md:m-0 border-slate-900/10 dark:border-gray-500 dark:bg-black/30 transition-all duration-300 h-16 px-3 sm:px-10 text-white flex justify-between ${
          isMenuOpen ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#about");
          }}
          className="text-black dark:text-white transition-all duration-500 px-2 py-5 font-bold text-xl uppercase cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 flex items-center"
        >
          <Icon className="mr-3" />
          <span className="hidden md:block">{t("portfolio")}</span>
        </a>

        <div className="flex items-center">
          {/* Desktop nav */}
          <nav className="flex-row items-center hidden md:flex">
            {HeaderButtonsList.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.href);
                }}
                className={`text-black md:mr-5 mb-6 p-1 cursor-pointer transition-all duration-75 font-bold hover:text-gray-500 dark:hover:text-[#86b6e9] dark:md:hover:text-gray-300 md:mb-0 md:font-normal dark:text-white ${
                  activeButton === item.href
                    ? "md:border-b-2 border-gray-700 dark:border-white"
                    : ""
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>

          <ThemeButton />
          <LanguageButton />

          {/* Mobile menu icon */}
          <div
            className="inline-flex items-center p-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setIsMenuOpen(true)}
          >
            <IconMenu className="fill-gray-500 cursor-pointer hover:fill-gray-400 dark:fill-white" />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg p-6 flex flex-col"
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="self-end mb-6 text-gray-700 dark:text-gray-200 hover:text-red-500 transition text-xl"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>

              <nav className="flex flex-col gap-4 w-full">
                {HeaderButtonsList.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      activeButton === item.href
                        ? "bg-gray-200 dark:bg-gray-700"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => handleClick(item.href)}
                  >
                    {item.icon}
                    <span className="text-lg font-medium text-black dark:text-white">
                      {item.title}
                    </span>
                  </div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

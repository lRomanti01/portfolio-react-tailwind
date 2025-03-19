import { useState, useEffect } from "react";
import HeaderButtons from "../HeaderButtons";
import IconMenu from "../icons/IconMenu";
import Icon from "../icons/Icon";
import { useTranslation } from "react-i18next";
import { LanguageButton } from "../LanguageButton";
import { ThemeButton } from "../ThemeButton";

const Header = ({ setIsMenuOpen, isMenuOpen }) => {
  const [activeButton, setActiveButton] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Configurar IntersectionObserver para actualizar el botón activo
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveButton(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observar las secciones
    HeaderButtonsList.forEach((item) => {
      const section = document.getElementById(item.href.replace("#", ""));
      if (section) observer.observe(section);
    });

    // Cleanup observer al desmontar
    return () => observer.disconnect();
  }, []);

  const handleClickClose = () => {
    setIsMenuOpen(false);
  };

  const HeaderButtonsList = [
    { title: t("about"), href: "#about" },
    { title: t("experiences"), href: "#experiences" },
    { title: t("skills"), href: "#skills" },
    { title: t("projects"), href: "#projects" },
  ];

  return (
    <header className="sticky top-0 z-10">
      <div
        className={`bg-white/30 backdrop-blur-md mx-5 rounded-md border-b md:rounded-none md:m-0 border-slate-900/10 dark:border-gray-500 dark:bg-black/30 transition-all duration-300 h-16 px-3 sm:px-10 text-white flex justify-between sticky top-0 z-10  ${
          isMenuOpen ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <a
          href="#about"
          className="text-black dark:text-white transition-all duration-500 px-2 py-5 font-bold text-xl uppercase cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 flex items-center fill-gray-500 hover:fill-gray-400 dark:hover:fill-gray-300 dark:fill-white"
        >
          <Icon className="mr-3" />{" "}
          <span className="hidden md:block">{t("portfolio")}</span>
        </a>

        <div className="flex items-center">
          {/* Menú visible solo en pantallas grande */}
          <nav className="flex-row items-center hidden md:flex">
            {HeaderButtonsList.map((item, index) => (
              <HeaderButtons
                key={index}
                onClick={handleClickClose}
                title={item.title}
                href={item.href}
                className={`text-black md:mr-5 mb-6 p-1 cursor-pointer transition-all duration-75 font-bold hover:text-gray-500 dark:hover:text-[#86b6e9] dark:md:hover:text-gray-300 md:mb-0 md:font-normal dark:text-white ${
                  activeButton === item.href
                    ? "md:border-b-2 border-gray-700 dark:border-white"
                    : ""
                }`}
              />
            ))}
          </nav>

          {/* Botones de tema e idioma */}
          <ThemeButton />
          <LanguageButton />

          {/* Icono de menú hamburguesa solo en móviles */}
          <div
            className="inline-flex items-center p-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setIsMenuOpen(true)}
          >
            <IconMenu className="fill-gray-500 cursor-pointer rounded-md hover:fill-gray-400 dark:hover:fill-gray-300 dark:fill-white" />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed top-3 right-3 p-8 flex flex-col bg-white dark:bg-gray-800 rounded-lg z-10 shadow-lg md:hidden">
          <span
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-2 right-3 cursor-pointer text-black text-xl hover:text-gray-500 dark:text-white dark:hover:text-gray-300"
          >
            X
          </span>

          <nav className="flex flex-col items-center">
            {HeaderButtonsList.map((item, index) => (
              <HeaderButtons
                key={index}
                onClick={item.href}
                title={item.title}
                href={item.href}
                className={`text-black md:mr-5 mb-6 p-1 cursor-pointer transition-all duration-75 font-bold hover:text-gray-500 dark:hover:text-[#86b6e9] dark:md:hover:text-gray-300 md:mb-0 md:font-normal dark:text-white ${
                  activeButton === item.href
                    ? "md:border-b-2 border-gray-700 dark:border-white"
                    : ""
                }`}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

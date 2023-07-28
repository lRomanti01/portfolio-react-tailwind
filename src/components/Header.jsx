import { useRef, useState, useEffect } from "react";
import HeaderButtons from "./HeaderButtons";
import IconMenu from "./icons/IconMenu";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";
import Icon from "./icons/Icon";

const inialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = ({ mainRef, footerRef }) => {
  const [darkMode, setDarkMode] = useState(inialStateDarkMode);
  const [activeButton, setActiveButton] = useState(null);

  //Ref that add an blur when opened the menu

  const menu = useRef(null);
  const title = useRef(null);
  const darkModeIcon = useRef(null);
  const menuIcon = useRef(null);
  const header = useRef(null);

  //Function that change to dark mode manually

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  //Function that activate the header buttons when gets to the section

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition <= bottom) {
          setActiveButton(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 768) {
        mainRef.current.classList.remove("blur-sm");
        footerRef.current.classList.remove("blur-sm");
        title.current.classList.remove("blur-sm");
        darkModeIcon.current.classList.remove("blur-sm");
        menuIcon.current.classList.remove("blur-sm");
        menu.current.classList.add("hidden");
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    menu.current.classList.remove("hidden");
    mainRef.current.classList.add("blur-sm");
    footerRef.current.classList.add("blur-sm");
    title.current.classList.add("blur-sm");
    darkModeIcon.current.classList.add("blur-sm");
    menuIcon.current.classList.add("blur-sm");
  };

  const handleClickClose = () => {
    menu.current.classList.add("hidden");
    mainRef.current.classList.remove("blur-sm");
    footerRef.current.classList.remove("blur-sm");
    title.current.classList.remove("blur-sm");
    darkModeIcon.current.classList.remove("blur-sm");
    menuIcon.current.classList.remove("blur-sm");
  };

  return (
    <header
      ref={header}
      className="bg-white mx-5 rounded-md border-b md:rounded-none md:m-0 border-slate-900/10 dark:border-gray-500 dark:bg-black transition-all duration-500 h-16 px-3 sm:px-20 text-white flex justify-between sticky top-0 z-10"
    >
      <a
        ref={title}
        href="#about"
        className="text-black dark:text-white transition-all duration-500 px-2 py-5 font-bold text-xl uppercase cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 flex items-center fill-gray-500 hover:fill-gray-400 dark:hover:fill-gray-300 dark:fill-white"
      >
       <Icon className="mr-3"/> <span className="hidden md:block">Portfolio</span>
      </a>
      <div className="flex items-center">
        <div
          ref={menu}
          className="h-60 w-60 shadow-lg shadow-gray-600 fixed top-0 right-0 m-3 p-8 flex flex-col hidden bg-white dark:bg-gray-800 dark:md:bg-transparent rounded-lg z-10 md:shadow-none md:rounded-none md:flex md:relative md:bg-transparent md:flex-row md:p-2 md:border-r md:h-auto"
        >
          <div
            onClick={handleClickClose}
            className="absolute top-5 right-5 cursor-pointer md:hidden text-black text-xl hover:text-gray-500 dark:text-white dark:hover:text-gray-300"
          >
            X
          </div>
          <HeaderButtons
            onClick={handleClickClose}
            title="About"
            href="#about"
            className={`text-black md:mr-5 mb-6 p-1 cursor-pointer transition-all duration-75 font-bold hover:text-gray-500 dark:hover:text-[#86b6e9] dark:md:hover:text-gray-300 md:mb-0  md:font-normal
      dark:text-white ${
        activeButton === "about"
          ? "md:border-b-2 border-gray-700 dark:border-white"
          : ""
      }`}
          />
          <HeaderButtons
            onClick={handleClickClose}
            title="Skills"
            href="#skills"
            className={`text-black md:mr-5 mb-6 p-1 cursor-pointer transition-all duration-75 font-bold hover:text-gray-500 dark:hover:text-[#86b6e9] dark:md:hover:text-gray-300 md:mb-0  md:font-normal
            dark:text-white ${
              activeButton === "skills"
                ? "md:border-b-2 border-gray-700 dark:border-white"
                : ""
            }`}
          />
          <HeaderButtons
            onClick={handleClickClose}
            title="Projects"
            href="#projects"
            className={`text-black md:mr-5 mb-6 p-1 cursor-pointer transition-all duration-75 font-bold hover:text-gray-500 dark:hover:text-[#86b6e9] dark:md:hover:text-gray-300 md:mb-0  md:font-normal
      dark:text-white ${
        activeButton === "projects"
          ? "md:border-b-2 border-gray-700 dark:border-white"
          : ""
      }`}
          />
          <hr className="border-1 md:border-0" />
        </div>
        <button
          ref={darkModeIcon}
          className="p-5 transition-all duration-500"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <IconSun className="fill-white hover:fill-gray-300" />
          ) : (
            <IconMoon className="fill-gray-500 hover:fill-gray-400" />
          )}
        </button>
        <div
          ref={menuIcon}
          className="block md:hidden transition-all duration-500"
          onClick={handleClick}
        >
          <IconMenu className="fill-gray-500 cursor-pointer rounded-md hover:fill-gray-400 dark:hover:fill-gray-300 dark:fill-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;

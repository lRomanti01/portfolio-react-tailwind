import Main from "./components/Main";
import { useEffect, useRef } from "react";
import "./config/i18n/i18n";
import { useTranslation } from "react-i18next";
import i18n from "./config/i18n/i18n";

const App = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const { t } = useTranslation();
  // const { lang } = useParams();

  // useEffect(() => {
  //   // Detectar el idioma en la URL y actualizar en i18n
  //   const pathLang = window.location.pathname.split("/")[1];
  //   if (pathLang && ["en", "es"].includes(pathLang)) {
  //     i18n.changeLanguage(pathLang);
  //   } else {
  //     // Si no hay idioma en la URL, redirigir a "/en"
  //     window.history.replaceState(null, "", "/en/");
  //     i18n.changeLanguage("en");
  //   }
  // }, []);


  return (
    <div className="bg-white min-h-screen dark:bg-black transition-all duration-500 bg-[url('./assets/images/bluelight.webp')] bg-no-repeat bg-[length:600px_600px] bg-[left_-16em_bottom_-15rem] bg-fixed bg-blend-luminosity">
      <Main footerRef={footerRef} />
      <footer
        ref={footerRef}
        className="text-gray-500 transition-all duration-500 dark:text-white mt-5 p-3 flex justify-end"
      >
        <p>
          Copyright &copy; {currentYear} Romantiezer Rodríguez Pérez{" "}
        </p>
      </footer>
    </div>
  );
};

export default App;

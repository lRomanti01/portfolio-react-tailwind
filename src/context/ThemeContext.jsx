import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark"); // Se inicia en null para esperar la lectura de localStorage

//   useEffect(() => {
//     // Recupera el valor guardado de localStorage al montar el componente
//     const savedTheme = localStorage.getItem("theme");

//     if (savedTheme) {
//       setDarkMode(savedTheme === "dark");
//     } else {
//       // Si no existe en localStorage, verificamos la preferencia del sistema
//       const systemPreference = window.matchMedia(
//         "(prefers-color-scheme: dark)"
//       ).matches;
//       setDarkMode(systemPreference); // Usamos la preferencia del sistema si no hay valor en localStorage
//     }
//   }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

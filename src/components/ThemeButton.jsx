import React, { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { gsap } from "gsap";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

export const ThemeButton = () => {
  const { darkMode, setDarkMode } = useTheme();
  const iconRef = useRef(null);

  useEffect(() => {
    if (iconRef.current) {
      gsap.fromTo(
        iconRef.current,
        { scale: -.3, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.2, ease: "power2.out" }
      );
    }
  }, [darkMode]);

  return (
    <button
      ref={iconRef}
      className="p-2 transition-all duration-75 hover:scale-110"
      onClick={() => setDarkMode(!darkMode)}
    >
      <span>
        {darkMode ? (
          <IconSun className="fill-white hover:fill-gray-300" />
        ) : (
          <IconMoon className="fill-gray-500 hover:fill-gray-500" />
        )}
      </span>
    </button>
  );
};

import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { LanguageContext } from "../context/LanguageProvider";
import { uk, spain } from "../data/TechImageIndex";

export const LanguageButton = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const buttonRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  const handleClick = () => {
    gsap.to(buttonRef.current, {
      scale: 0.9,
      duration: 0.1,
      ease: "power2.out",
    });
    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.2,
      delay: 0.1,
      ease: "power2.out",
    });

    gsap.fromTo(
      imgRef.current,
      { rotationY: 0 },
      { rotationY: 180, duration: 0.5, ease: "power2.out" }
    );

    changeLanguage(language === "es" ? "en" : "es");
  };

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.1,
      duration: 0.1,
      ease: "power2.out",
    });
    gsap.to(imgRef.current, {
      rotation: 10,
      duration: 0.1,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, { scale: 1, duration: 0.1, ease: "power2.out" });
    gsap.to(imgRef.current, { rotation: 0, duration: 0.1, ease: "power2.out" });
  };

  return (
    <button
      ref={buttonRef}
      className="p-2 flex items-center gap-2 rounded-lg transition-all duration-75"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imgRef}
        className="w-6 h-6 rounded-full"
        src={language === "es" ? spain : uk}
        alt={language === "es" ? "Spanish Flag" : "UK Flag"}
      />
      <span className="font-medium text-black dark:text-white">
        {language === "es" ? "ES" : "EN"}
      </span>
    </button>
  );
};

import Imagen from "../assets/images/devices.webp";
import IconButton from "./IconButton";
import IconGithub from "./icons/IconGithub";
import IconEmail from "./icons/IconEmail";
import IconLinkedin from "./icons/IconLinkedin";
import IconInstagram from "./icons/IconInstagram";
import { useContext, useRef } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/LanguageProvider";
import { AboutMeSquare } from "./About/AboutMeSquare";
import { CVButton } from "./CVButton";

export default function About() {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  const socialMedia = [
    {
      link: "https://github.com/lRomanti01",
      title: "Github",
      icon: (
        <IconGithub className="mb-3 fill-[#32475b] dark:fill-[#6c8097] rounded-full transition-all duration-100 hover:scale-110" />
      ),
    },
    {
      link: "mailto:romanti159@gmail.com?Subject=Message%20from%20portfolio",
      title: "Email",
      icon: (
        <IconEmail className="mb-3 fill-[#32475b] dark:fill-[#6c8097] rounded-full transition-all duration-100 hover:scale-110" />
      ),
    },
    {
      link: "https://www.linkedin.com/in/romantiezer-rodriguez/",
      title: "Linked In",
      icon: (
        <IconLinkedin className="mb-3 fill-[#32475b] dark:fill-[#6c8097] rounded-full transition-all duration-100 hover:scale-110" />
      ),
    },
    {
      link: "https://www.instagram.com/romantiezerz/",
      title: "Instagram",
      icon: (
        <IconInstagram className="fill-[#32475b] dark:fill-[#6c8097] rounded-full transition-all duration-100 hover:scale-110" />
      ),
    },
  ];

  return (
    <section
      id="about"
      className="flex md:min-h-screen scroll-mt-16 justify-center"
    >
      <div className="flex flex-col md:flex-row">
        <div className="px-20 pt-20 md:mr-0 xl:mr-10 2xl:mr-32">
          <h1 className="text-black dark:text-white transition-all duration-500 mb-3 text-4xl font-medium lg:text-5xl xl:text-6xl">
            Romantiezer <br />
            <span className="text-[#6c8097]">Rodríguez</span> <br />
            <span className="text-[#4f6378]">Pérez</span>
          </h1>
          <h1
            className={`animate-typingInfinite ${
              language == "en" ? "w-[22ch]" : "w-[26ch]"
            } whitespace-nowrap overflow-hidden border-r-2 text-black dark:text-white transition-all duration-500 text-xl md:text-2xl font-mono uppercase`}
          >
            {t("fullstack")}
          </h1>
          <p className="text-black dark:text-white transition-all duration-500">
            {t("description")}
          </p>
          <div className="mt-5">
            {socialMedia.map((item, index) => (
              <IconButton
                key={index}
                link={item.link}
                title={item.title}
                svg={item.icon}
              />
            ))}
          </div>

          <AboutMeSquare />

          <CVButton />
        </div>

        <div className="pb-10 md:py-10 md:block">
          <img
            src={Imagen}
            alt="Imagen"
            className="my-auto hidden text-white md:flex md:h-[350px] xl:h-[500px] transition-all duration-150 hover:scale-105 animate-pulse"
          />
          <br />
        </div>
      </div>
    </section>
  );
}

import SkillsSetIcons from "../SkillsSetIcons";
import skillsData from "../../data/SkillsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Skills = () => {
  const { t } = useTranslation();
  const main = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");
      boxes.forEach((box) => {
        gsap.fromTo(
          box,
          { x: "-100vw", opacity: 0 }, // Comienza fuera de pantalla e invisible
          {
            x: 0, // Se centra
            opacity: 1, // Se hace visible
            ease: "power3.out", // Movimiento más natural
            scrollTrigger: {
              trigger: box,
              start: "top 90%", // Inicia cuando el box está en el 80% de la pantalla
              end: "top 60%", // Termina cuando está más cerca del centro
              // scrub: true,
              // markers: true, // Activa para ver los puntos de inicio/fin
            },
          }
        );
      });
    },
    { scope: main }
  );

  return (
    <section
      id="skills"
      className="scroll-mt-32 text-black dark:text-white flex flex-col items-center mt-5 mb-5 xl:min-h-screen"
    >
      <h1 className="uppercase font-bold text-2xl md:text-4xl mb-10">
       {t("skillSet")}
      </h1>
      <div ref={main} className="grid grid-cols-3 gap-5 md:gap-14 xl:gap-y-32">
        {skillsData.map((item, index) => (
          <SkillsSetIcons key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

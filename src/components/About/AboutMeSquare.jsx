import { useRef } from "react";
import { useTranslation } from "react-i18next";

export const AboutMeSquare = () => {
  const { t } = useTranslation();
  const point = useRef(null);

  const handleOver = () => {
    point.current.classList.add("animate-pulse");
  };

  const handleOut = () => {
    point.current.classList.remove("animate-pulse");
  };

  return (
    <div
      onMouseOver={handleOver}
      onMouseOut={handleOut}
      className="border-black border-2 text-black dark:text-white duration-500 relative dark:border-white mt-10 p-5 md:p-8 rounded-xl cursor-pointer hover:scale-105 transition-all md:w-[350px] lg:w-[450px] xl:h-48 xl:w-[500px]"
    >
      <h1 className="font-bold text-2xl uppercase mb-2">{t("aboutMeTitle")}</h1>
      <span
        ref={point}
        className="absolute top-5 right-5 bg-black dark:bg-white h-4 w-4 rounded-full"
      />
      <p>{t("aboutMeDescription")}</p>
    </div>
  );
};

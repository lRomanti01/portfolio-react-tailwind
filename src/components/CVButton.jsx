import React from "react";
import { useTranslation } from "react-i18next";
import CV from "../assets/downloads/Romantiezer - CV.pdf";
import IconVC from "./icons/IconVC";

export const CVButton = () => {
  const { t } = useTranslation();

  return (
    <button
      className="mx-auto mt-5 bg-[#32475b] dark:bg-[#4f6378] p-3 text-white rounded-xl shadow-lg flex items-center gap-2 transition-all duration-100
            hover:shadow-gray-500 dark:hover:shadow-white hover:scale-105 hover:bg-[#4f6378] dark:hover:bg-[#6c8097]"
    >
      <IconVC fill="white" />
      <a className="font-bold" href={CV} download>
        {t("downloadCV")}
      </a>
    </button>
  );
};

import React from "react";
import { useTranslation } from "react-i18next";
import IconVC from "./icons/IconVC";
import CvEN from "../assets/downloads/Romantiezer-CV-EN.pdf";
import CvES from "../assets/downloads/Romantiezer-CV-ES.pdf";

export const CVButton = () => {
  const { t, i18n } = useTranslation();
  const CV = i18n.language === "es" ? CvES : CvEN;

  return (
    <a
      href={CV}
      download
      className="group mx-auto mt-6 flex w-fit items-center gap-3 rounded-xl bg-gradient-to-r from-[#3b5b79] to-[#4f6378] px-5 py-3 text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:from-[#4f6378] dark:to-[#6c8097]"
    >
      <div className="flex h-6 w-6 items-center justify-center transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
        <IconVC fill="white" />
      </div>
      <span className="text-base font-semibold tracking-wide">
        {t("downloadCV")}
      </span>
    </a>
  );
};

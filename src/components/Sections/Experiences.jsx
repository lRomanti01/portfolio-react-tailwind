import React from "react";
import { useTranslation } from "react-i18next";

export const Experiences = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: "Fullstack Developer - Blue Technology Solution",
      date: "Since Oct. 2022",
      description:
        "I am currently working as a Fullstack Developer at Blue Technology Solution, where I am responsible for developing and maintaining web and mobile applications.",
      latest: true,
    },
    {
      title: "Flowbite Figma v1.3.0",
      date: "Released on December 7th, 2021",
      description:
        "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
      latest: false,
    },
    {
      title: "Esperando que la vida me traiga más cosas...",
      date: "El futuro dirá",
      description: "",
      latest: false,
      skeleton: true,
    },
  ];

  return (
    <section
      id="experiences"
      className="px-10 scroll-mt-32 text-black dark:text-white flex flex-col items-center mt-5 mb-5"
    >
      <h1 className="uppercase font-bold text-2xl md:text-4xl mb-10">
        {t("Experiences")}
      </h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experiences.map((exp, index) => (
          <li key={index} className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {exp.title}
              {exp.latest && (
                <span className="bg-blue-100 text-blue-800 text-sm font-medium ms-3 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                  Latest
                </span>
              )}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {exp.date}
            </time>
            {exp.skeleton ? (
              <div className="w-full h-20 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md"></div>
            ) : (
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {exp.description}
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

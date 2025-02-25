import Imagen from "../assets/images/devices.webp";
import IconButton from "./IconButton";
import IconGithub from "./icons/IconGithub";
import IconEmail from "./icons/IconEmail";
import IconVC from "./icons/IconVC";
import IconLinkedin from "./icons/IconLinkedin";
import IconInstagram from "./icons/IconInstagram";
import CV from "../assets/downloads/Romantiezer - CV.pdf";
import { useRef } from "react";

const About = () => {
  const point = useRef(null);

  const handleOver = () => {
    point.current.classList.add("animate-pulse");
  };

  const handleOut = () => {
    point.current.classList.remove("animate-pulse");
  };

  const socialMediaButtons = [
    {
      link: "https://github.com/lRomanti01",
      title: "github",
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
        <IconInstagram className="mb-3 fill-[#32475b] dark:fill-[#6c8097] rounded-full transition-all duration-100 hover:scale-110" />
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
          <h1 className="animate-typingInfinite w-[20ch] whitespace-nowrap overflow-hidden border-r-2 text-black dark:text-white transition-all duration-500 text-xl md:text-2xl font-mono uppercase">
            Front-End Developer
          </h1>
          <p className="text-black dark:text-white transition-all duration-500">
            Development of web sites and applications
          </p>
          <div className="mt-5">
            {socialMediaButtons.map((item) => (<IconButton
              link={item.link}
              title={item.title}
              svg=
                {item.icon}

            />))}
   
          </div>
          <div
            onMouseOver={handleOver}
            onMouseOut={handleOut}
            className="border-black border-2 text-black dark:text-white duration-500 relative dark:border-white mt-10 p-10 rounded-xl cursor-pointer hover:scale-105 transition-all md:w-[350px] lg:w-[450px] xl:h-48 xl:w-[500px]"
          >
            <h1 className="font-bold text-2xl uppercase mb-2">About me</h1>
            <span
              ref={point}
              className="absolute top-5 right-5 bg-black dark:bg-white h-4 w-4 rounded-full"
            ></span>
            <p>
              I am passionate about web programming and problem solving. My
              passion has allowed me to be self-taught and adapt to any
              situation.
            </p>
          </div>
        </div>
        <div className="pb-10 md:py-10 md:block">
          <img
            src={Imagen}
            alt="Imagen"
            className="my-auto hidden text-white md:flex md:h-[350px] xl:h-[500px] transition-all duration-150 hover:scale-105 animate-pulse"
          />
          <br />
          <button
            className="mx-auto md:mt-5 bg-[#32475b] dark:bg-[#4f6378] p-3 text-white rounded-xl shadow-lg flex items-center transition-all duration-100
            hover:shadow-gray-500 dark:hover:shadow-white hover:scale-105 hover:bg-[#4f6378] dark:hover:bg-[#6c8097]"
          >
            <IconVC fill="white" />
            <a className="font-bold" href={CV} download>
              Download CV
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function SpeedDial() {
  const dialRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        gsap.to(dialRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(dialRef.current, {
          x: 100,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Para manejar el estado inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialMediaButtons = [
    {
      link: "https://github.com/lRomanti01",
      title: "Github",
      icon: <TbBrandGithubFilled className="text-white w-7 h-7" />,
    },
    {
      link: "mailto:romanti159@gmail.com",
      title: "Email",
      icon: <MdEmail className="text-white w-7 h-7" />,
    },
    {
      link: "https://www.linkedin.com/in/romantiezer-rodriguez/",
      title: "LinkedIn",
      icon: <FaLinkedinIn className="text-white w-5 h-6" />,
    },
    {
      link: "https://www.instagram.com/romantiezerz/",
      title: "Instagram",
      icon: <AiFillInstagram className="text-white w-7 h-7" />,
    },
  ];

  return (
    <div
      ref={dialRef}
      className="fixed end-2 bottom-6 flex flex-col items-center space-y-2 opacity-0"
      style={{ transform: "translateX(100px)" }} // Inicialmente oculto a la derecha
    >
      {socialMediaButtons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          className="cursor-pointer flex justify-center items-center w-10 h-10 rounded-full border border-gray-600 shadow-xs text-gray-400 bg-gray-700 hover:bg-gray-600"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

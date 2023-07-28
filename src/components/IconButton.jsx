import { useRef } from "react";

const IconButton = ({ svg, link, title }) => {
  const titleB = useRef(null);

  const handleOver = () => {
    titleB.current.classList.remove("md:animate-typingOut");
    titleB.current.classList.add("md:animate-typing");
    titleB.current.classList.remove("md:w-[0ch]");
    titleB.current.classList.add("md:w-[11ch]");
  };

  const handleOut = () => {
    titleB.current.classList.remove("md:animate-typing");
    titleB.current.classList.add("md:animate-typingOut");
    titleB.current.classList.remove("md:w-[11ch]");
    titleB.current.classList.add("md:w-[0ch]");
  };

  return (
    <a
      className="text-black dark:text-white flex items-center w-52"
      target="_blank"
      href={link}
    >
      {
        <div
          className="cursor-pointer"
          onMouseOver={handleOver}
          onMouseOut={handleOut}
        >
          {svg}
        </div>
      }
      <p
        ref={titleB}
        className="md:animate-typingOut w-[11ch] md:w-[0ch] whitespace-nowrap overflow-hidden ml-3 border-b-2 border-[#6c8097] font-bold uppercase"
      >
        {title}
      </p>
    </a>
  );
};

export default IconButton;

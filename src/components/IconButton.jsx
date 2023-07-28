import "../stylesheets/animation.css";
import { useRef } from "react";

const IconButton = ({ svg, link, title }) => {
  const titleB = useRef(null);

  const handleOver = () => {
    titleB.current.classList.remove("animationCOut");
    titleB.current.classList.add("animationC");
  };

  const handleOut = () => {
    titleB.current.classList.remove("animationC");
    titleB.current.classList.add("animationCOut");
  };

  return (
    <a
      className="text-black dark:text-white cursor-pointer flex items-center w-52"
      target="_blank"
      href={link}
    >
      {
        <div onMouseOver={handleOver} onMouseOut={handleOut}>
          {svg}
        </div>
      }
      <p
        ref={titleB}
        className="animationCOut ml-3 border-b-2 border-[#6c8097] font-bold uppercase"
      >
        {title}
      </p>
    </a>
  );
};

export default IconButton;

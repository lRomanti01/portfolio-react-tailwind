import { useRef } from "react";

const SkillsSetIcons = ({ title, image, alt, borderColor }) => {
  
  const skillTitle = useRef(null);
  const skillIcon = useRef(null);

  const handleOver = () => {
    skillIcon.current.classList.remove("rotate-0");
    skillIcon.current.classList.add("rotate-12");
    skillTitle.current.classList.remove("animate-typingOut");
    skillTitle.current.classList.add("animate-typing");
    skillTitle.current.classList.remove("w-[0ch]");
    skillTitle.current.classList.add("w-[12ch]");
  };

  const handleOut = () => {
    skillIcon.current.classList.remove("rotate-12");
    skillIcon.current.classList.add("rotate-0");
    skillTitle.current.classList.remove("sanimate-typing");
    skillTitle.current.classList.add("animate-typingOut");
    skillTitle.current.classList.remove("w-[12ch]");
    skillTitle.current.classList.add("w-[0ch]");
  };

  return (
    <div className="box mb-10 w-28 h-24 sm:mb-0 sm:w-40 md:w-60 xl:p-5 xl:w-70 2xl:w-80 cursor-pointer">
      <div className="flex flex-col-reverse justify-center items-center sm:flex-row" onMouseOver={handleOver} onMouseOut={handleOut}>
      <div
        ref={skillTitle}
        style={{ borderColor: `${borderColor}` }}
        className={`animate-typingOut w-[0ch] whitespace-nowrap overflow-hidden mt-3 sm:mt-auto my-auto text-center mr-0 transition-all sm:flex sm:text-xs md:text-[17px] 2xl:text-2xl font-bold font-["Helvetica"] border-b-4`}
      >
        {title}
      </div>
      <div className="mx-auto">
        <img
          src={image}
          alt={alt}
          ref={skillIcon}
          className="h-20 xl:h-24 2xl:h-28 transition-all duration-50000 mx-auto p-1"
        />
      </div>
      </div>
    </div>
  );
};

export default SkillsSetIcons;

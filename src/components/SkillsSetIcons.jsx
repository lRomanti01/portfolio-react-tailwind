import { useRef } from "react";

const SkillsSetIcons = ({ title, image, alt, borderColor }) => {
  
  const skillTitle = useRef(null);
  const skillIcon = useRef(null);

  const handleOver = () => {
    skillIcon.current.classList.remove("rotate-0");
    skillIcon.current.classList.add("rotate-12");
    skillTitle.current.classList.remove("animationBOut");
    skillTitle.current.classList.add("animationB");
  };

  const handleOut = () => {
    skillIcon.current.classList.remove("rotate-12");
    skillIcon.current.classList.add("rotate-0");
    skillTitle.current.classList.remove("animationB");
    skillTitle.current.classList.add("animationBOut");
  };

  return (
    <div className="w-28 h-24 sm:w-40 md:w-60 xl:p-5 xl:w-70 2xl:w-80">
      <div className="flex" onMouseOver={handleOver} onMouseOut={handleOut}>
      <div
        ref={skillTitle}
        style={{ borderColor: `${borderColor}` }}
        className={`animationBOut my-auto mr-0 transition-all hidden sm:flex sm:text-xs md:text-[17px] 2xl:text-2xl font-bold font-["Helvetica"] border-b-4`}
      >
        {title}
      </div>
      <div className="mx-auto">
        <img
          src={image}
          alt={alt}
          ref={skillIcon}
          className="h-20 xl:h-24 2xl:h-28 transition-all duration-50000 mx-auto"
        />
      </div>
      </div>
    </div>
  );
};

export default SkillsSetIcons;

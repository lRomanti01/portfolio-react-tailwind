import { useRef } from "react";
import IconButtonProject from "./IconButtonProject";

const ProjectTemplate = ({ image, projectName, buttons, techIcons }) => {
  const projectBack = useRef(null);

  const handleOver = () => {
    projectBack.current.classList.add("-translate-y-full");
    projectBack.current.classList.remove("opacity-0");
    projectBack.current.classList.add("opacity-60");
  };

  const handleOut = () => {
    projectBack.current.classList.remove("-translate-y-full");
    projectBack.current.classList.remove("opacity-60");
    projectBack.current.classList.add("opacity-0");
  };

  return (
    <div
      className="mb-10 sm:w-96 sm:p-0 transition-all relative overflow-hidden hover:scale-105"
      onMouseOver={handleOver}
      onMouseOut={handleOut}
    >
      <img src={image} alt={projectName} className="rounded-2xl h-[310px] w-full" />
      <div
        ref={projectBack}
        className="bg-black absolute h-full w-full opacity-0 rounded-2xl transition-all flex flex-col justify-between items-center"
      >
        <div className="w-full h-60 flex flex-col justify-center items-center">
          <h1 className="text-white font-bold text-2xl mb-5 text-center">
            {projectName}
          </h1>
          <div className="flex items-center justify-center gap-5 w-full">
            {buttons.map((item, index) => (
              <IconButtonProject key={index} link={item.link} svg={item.icon} />
            ))}
          </div>
        </div>

        <div className="w-full h-10 flex mb-2">
          {techIcons.map((item, index) => (
            <img
              key={index}
              className="ml-2 w-12 h-full"
              src={item.image}
              alt={item.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;

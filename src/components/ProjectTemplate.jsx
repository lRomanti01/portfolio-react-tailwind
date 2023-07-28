import { useRef } from "react";

const ProjectTemplate = ({
  image,
  projectName,
  button1,
  button2,
  techIcons,
  techIconsAlt
}) => {
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
      <img src={image} alt="TodoApp" className="rounded-2xl" />
      <div
        ref={projectBack}
        className="bg-black absolute h-full w-full opacity-0 rounded-2xl transition-all flex flex-col justify-between items-center"
      >
        <div className="w-1/2 h-60 flex flex-col justify-center items-center">
          <h1 className="text-white font-bold text-2xl mb-5">{projectName}</h1>
          <div className="flex justify-between items-center w-28">
            {button1}
            {button2}
          </div>
        </div>
        <div className="w-full h-10">
          <img className="ml-2 w-12 h-full" src={techIcons} alt={techIconsAlt} />
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;

import React from "../assets/images/React.png";
import "../stylesheets/animation.css";
import ProjectTemplate from "./ProjectTemplate";
import TodoApp from "../assets/images/todoApp.png";
import IconGithub from "./icons/IconGithub";
import IconDemo from "./icons/IconDemo";
import IconButtonProject from "./IconButtonProject";

const Proyects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-32 text-black dark:text-white flex flex-col items-center mt-5 min-h-screen"
    >
      <h1 className="uppercase font-bold text-2xl md:text-4xl mb-10">
        PROJECTS
      </h1>
      <div className="grid p-10 md:gap-10 md:grid-cols-2 xl:grid-cols-3">
        <ProjectTemplate
          image={TodoApp}
          projectName="ToDo APP"
          techIcons={React}
          button1={
            <IconButtonProject
              link={
                "https://github.com/lRomanti01/vite-react-tailwind-todoApp-frontendMentor.git"
              }
              svg={
                <IconGithub className="fill-[#6c8097] shadow-md rounded-full transition-all duration-100 hover:scale-110" />
              }
            />
          }
          button2={
            <IconButtonProject
              link={"https://todo-list-app-react-tailwind.netlify.app"}
              svg={
                <IconDemo className="fill-[#6c8097] shadow-md rounded-full transition-all duration-100 hover:scale-110" />
              }
            />
          }
        />
      </div>
    </section>
  );
};

export default Projects;

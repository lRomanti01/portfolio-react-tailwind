import ProjectTemplate from "./ProjectTemplate";
import { projectsArray } from "../../data/ProjectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-32 text-black dark:text-white flex flex-col items-center mt-5 min-h-screen"
    >
      <h1 className="uppercase font-bold text-2xl md:text-4xl mb-10">
        PROJECTS
      </h1>
      <div className="grid p-10 md:gap-10 md:grid-cols-2 xl:grid-cols-3">
        {projectsArray.map((item, index) => (
          <ProjectTemplate
            key={index}
            image={item.image}
            projectName={item.projectName}
            techIcons={item.techIcons}
            buttons={item.buttons}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

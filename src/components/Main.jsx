import About from "./Sections/About";
import { Experiences } from "./Sections/Experiences";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import SpeedDial from "./SpeedDial";

const Main = () => {
  return (
    <main>
      <About />
      <div className="bg-[#32475b] w-2/3 h-2 mx-auto my-12"></div>
      <Experiences />
      <div className="bg-[#32475b] w-2/3 h-2 mx-auto my-12"></div>
      <Skills />
      <div className="bg-[#32475b] w-2/3 h-2 mx-auto my-12"></div>
      <Projects />
      <SpeedDial />
    </main>
  );
};

export default Main;

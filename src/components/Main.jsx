import About from "./Sections/About";
import { Experiences } from "./Sections/Experiences";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import SpeedDial from "./SpeedDial";

const Main = () => {
  return (
    <main className="flex flex-col items-center ">
      <About />
      <div className="bg-[#32475b] w-1/2 h-1 mx-auto my-8" />
      <Experiences />
      <div className="bg-[#32475b] w-1/2 h-1 mx-auto my-8"></div>
      <Skills />
      <div className="bg-[#32475b] w-1/2 h-1 mx-auto my-8"></div>
      <Projects />
      <SpeedDial />
    </main>
  );
};

export default Main;

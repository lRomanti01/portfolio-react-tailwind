import { useRef } from "react";
import Header from "../components/Header";
import About from "./About";
import Projects from "./projects/Projects";
import Skills from "./Skills";

const Main = ({ footerRef }) => {
  const mainRef = useRef(null);

  return (
    <div>
      <Header mainRef={mainRef} footerRef={footerRef} />
      <main ref={mainRef} className="transition-all duration-500">
        <About />
        <div className="bg-[#32475b] w-2/3 h-2 mx-auto my-12"></div>
        <Skills />
        <div className="bg-[#32475b] w-2/3 h-2 mx-auto my-12"></div>
        <Projects />
      </main>
    </div>
  );
};

export default Main;

import Html from "../assets/images/html.png";
import Css from "../assets/images/css.png";
import Js from "../assets/images/js.png";
import ReactIcon from "../assets/images/react.png";
import Tailwind from "../assets/images/tailwind.png";
import Firebase from "../assets/images/firebase.png";
import Git from "../assets/images/git.png";
import Java from "../assets/images/java.png";
import Mysql from "../assets/images/mysql.png";
import "../stylesheets/animation.css";
import SkillsSetIcons from "./SkillsSetIcons";

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-32 text-black dark:text-white flex flex-col items-center mt-5 mb-5 xl:min-h-screen"
    >
      <h1 className="uppercase font-bold text-2xl md:text-4xl mb-10">
        Skills set
      </h1>
      <div className="grid grid-cols-3 gap-5 md:gap-14 xl:gap-y-32">
        <SkillsSetIcons
          title="HTML"
          alt="HTML"
          image={Html}
          borderColor="#e44d26"
        />
        <SkillsSetIcons
          title="CSS"
          alt="CSS"
          image={Css}
          borderColor="#1b73ba"
        />
        <SkillsSetIcons title="JS" alt="JS" image={Js} borderColor="#d6bf01" />
        <SkillsSetIcons
          title="REACT"
          alt="REACT"
          image={ReactIcon}
          borderColor="#61dbfb"
        />
        <SkillsSetIcons
          title="TAILWIND"
          alt="TAILWIND"
          image={Tailwind}
          borderColor="#1caaba"
        />
        <SkillsSetIcons
          title="FIREBASE"
          alt="FIREBASE"
          image={Firebase}
          borderColor="#f5820b"
        />
        <SkillsSetIcons
          title="GIT"
          alt="GIT"
          image={Git}
          borderColor="#de4c36"
        />
        <SkillsSetIcons
          title="JAVA"
          alt="JAVA"
          image={Java}
          borderColor="#1564c0"
        />
        <SkillsSetIcons
          title="MYSQL"
          alt="MYSQL"
          image={Mysql}
          borderColor="#f7941e"
        />
      </div>
    </section>
  );
};

export default Skills;

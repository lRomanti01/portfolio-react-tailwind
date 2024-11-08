import SkillsSetIcons from "./SkillsSetIcons";
import skillsData from "../data/SkillsData";

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
        {skillsData.map((item, index) => (
          <SkillsSetIcons
            key={index}
            {...item}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;

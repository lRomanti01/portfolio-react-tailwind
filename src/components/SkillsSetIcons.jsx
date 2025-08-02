import { motion } from "framer-motion";

const SkillsSetIcons = ({ title, image, alt, borderColor }) => {
  return (
    <motion.div
      className="relative w-24 sm:w-28 md:w-32 xl:w-36 2xl:w-40 cursor-pointer flex flex-col items-center"
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: {},
        hover: {},
      }}
    >
      {/* Imagen con rebote */}
      <motion.img
        src={image}
        alt={alt}
        className="h-12 md:h-14 xl:h-16 2xl:h-18 mx-auto"
        variants={{
          rest: {
            y: 0,
            transition: { type: "spring", stiffness: 200, damping: 20 },
          },
          hover: {
            y: -6,
            transition: { type: "spring", stiffness: 200, damping: 10 },
          },
        }}
      />

      {/* Título */}
      <motion.div
        className="text-sm md:text-base 2xl:text-lg font-semibold mt-2 text-center"
        variants={{
          rest: { opacity: 0, y: 8, transition: { duration: 0.25 } },
          hover: { opacity: 1, y: 0, transition: { duration: 0.25 } },
        }}
      >
        {title}
      </motion.div>

      {/* Underline con fade in/out */}
      <motion.div
        className="w-full h-[3px] mt-1 rounded-full"
        variants={{
          rest: {
            scaleX: 0,
            opacity: 0,
            transition: { duration: 0.4, ease: "easeOut" },
          },
          hover: {
            scaleX: 1,
            opacity: 1,
            transition: { duration: 0.3, ease: "easeIn" },
          },
        }}
        style={{
          backgroundColor: borderColor,
          transformOrigin: "left center",
        }}
      />
    </motion.div>
  );
};

export default SkillsSetIcons;

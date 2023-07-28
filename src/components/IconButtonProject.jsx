const IconButtonProject = ({ svg, link }) => {
  return (
    <a
      className="text-white cursor-pointer flex items-center w-52"
      target="_blank"
      href={link}
    >
      {svg}
    </a>
  );
};

export default IconButtonProject;

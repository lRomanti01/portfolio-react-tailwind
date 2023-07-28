const HeaderButtons = ({ title, href, ...props }) => {
  return (
    <a
      href={href}
      {...props}
    >
      {title}
    </a>
  );
};

export default HeaderButtons;

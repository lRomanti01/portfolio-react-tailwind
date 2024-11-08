import ReactIcon from "../assets/images/react.png";
import Tailwind from "../assets/images/tailwind.png";
import Mysql from "../assets/images/mysql.png";
import NextJs from "../assets/images/nextjs.png";
import Laravel from "../assets/images/laravel.png";

import TodoApp from "../assets/images/todoApp.png";
import got5 from "../assets/images/got5.png";



import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const projectsArray = [
  {
    image: TodoApp,
    projectName: "ToDo APP",
    techIcons: [
      {
        image: ReactIcon,
        alt: "React",
      },
      {
        image: Tailwind,
        alt: "Tailwind",
      },
    ],
    buttons: [
      {
        link: "https://github.com/lRomanti01/vite-react-tailwind-todoApp-frontendMentor.git",
        icon: (
          <FaGithub className="fill-[#6c8097] w-9 h-9 shadow-md rounded-full transition-all duration-100 hover:scale-110" />
        ),
      },
      {
        link: "https://todo-list-app-react-tailwind.netlify.app",
        icon: (
          <TbWorld className="fill-[#6c8097] w-9 h-9 shadow-md rounded-full transition-all duration-100 hover:scale-110" />
        ),
      },
    ],
  },
  {
    image: got5,
    projectName: "GOT5",
    techIcons: [
      {
        image: Laravel,
        alt: "Laravel",
      },
      {
        image: Mysql,
        alt: "Mysql",
      },
      {
        image: NextJs,
        alt: "NextJs",
      },
    ],
    buttons: [
      {
        link: "https://www.got5.org",
        icon: (
          <TbWorld className="fill-[#6c8097] w-9 h-9 shadow-md rounded-full transition-all duration-100 hover:scale-110" />
        ),
      } 
    ],
  },
];

export { projectsArray };

import {
  ReactIcon,
  Tailwind,
  Mysql,
  NextJs,
  Laravel,
  NodeJs,
  MongoDb,
  nextWhite,
  Redux,
  Firebase,
  Vue,
  Quasar,
} from "./TechImageIndex";

import {
  TodoApp,
  got5,
  rossiBrows,
  jcc,
  milly,
  todoFirebase,
  happyTailsFriends,
  vitaBalance
} from "./ProjectsImageIndex";

import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const projectsArray = [
  {
    image: todoFirebase,
    projectName: "TODO firebase",
    techIcons: [
      {
        image: ReactIcon,
        alt: "ReactIcon",
      },
      {
        image: Tailwind,
        alt: "Tailwind",
      },
      {
        image: Redux,
        alt: "Tailwind",
      },
      {
        image: Firebase,
        alt: "Tailwind",
      },
    ],
    buttons: [
      {
        link: "https://github.com/lRomanti01/TODOAPP-REDUX-FIREBASE",
        icon: (
          <FaGithub className="fill-[#6c8097] w-9 h-9 shadow-md rounded-full transition-all duration-100 hover:scale-110" />
        ),
      },
      {
        link: "https://todo-redux-firebase.netlify.app/",
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
        image: nextWhite,
        alt: "NextJs",
      },
    ],
    buttons: [
      {
        link: "https://www.got5.org",
        icon: (
          <TbWorld className="fill-[#6c8097] w-9 h-9 shadow-md rounded-full transition-all duration-100 hover:scale-110" />
        ),
      },
    ],
  },
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
    image: rossiBrows,
    projectName: "Rossi Brows",
    techIcons: [
      {
        image: ReactIcon,
        alt: "ReactIcon",
      },
      {
        image: Tailwind,
        alt: "Tailwind",
      },
    ],
    buttons: [
      {
        link: "https://github.com/lRomanti01/rossi_brows",
        icon: (
          <FaGithub className="fill-[#6c8097] w-9 h-9 shadow-md rounded-full transition-all duration-100 hover:scale-110" />
        ),
      },
      {
        link: "https://rossi-brows.netlify.app/",
        icon: (
          <TbWorld className="fill-[#6c8097] w-9 h-9 shadow-md rounded-full transition-all duration-100 hover:scale-110" />
        ),
      },
    ],
  },
  {
    image: jcc,
    projectName: "JCC",
    techIcons: [
      {
        image: nextWhite,
        alt: "NextJs",
      },
      {
        image: NodeJs,
        alt: "NodeJs",
      },
      {
        image: MongoDb,
        alt: "MongoDb",
      },
    ],
    buttons: [
      {
        link: "https://student.juegacomocampeon.org/",
        icon: (
          <TbWorld className="fill-[#6c8097] w-9 h-9 shadow-md rounded-full transition-all duration-100 hover:scale-110" />
        ),
      },
    ],
  },
  {
    image: milly,
    projectName: "Soluciones Milly",
    techIcons: [
      {
        image: ReactIcon,
        alt: "ReactIcon",
      },
      {
        image: Tailwind,
        alt: "Tailwind",
      },
    ],
    buttons: [
      {
        link: "https://github.com/lRomanti01/soluciones_milly",
        icon: (
          <FaGithub className="fill-[#6c8097] w-9 h-9 shadow-md rounded-full transition-all duration-100 hover:scale-110" />
        ),
      },
      {
        link: "https://soluciones-milly.netlify.app/",
        icon: (
          <TbWorld className="fill-[#6c8097] w-9 h-9 shadow-md rounded-full transition-all duration-100 hover:scale-110" />
        ),
      },
    ],
  },
  {
    image: happyTailsFriends,
    projectName: "Happy Tails Friends",
    techIcons: [
      {
        image: Vue,
        alt: "VueIcon",
      },
      {
        image: Quasar,
        alt: "Quasar",
      },
    ],
    buttons: [
      {
        link: "https://www.happytailsfriends.com/",
        icon: (
          <TbWorld className="fill-[#6c8097] w-9 h-9 shadow-md rounded-full transition-all duration-100 hover:scale-110" />
        ),
      },
    ],
  },
  {
    image: vitaBalance,
    projectName: "Vita Balance",
    techIcons: [
      {
        image: Vue,
        alt: "VueIcon",
      },
      {
        image: Quasar,
        alt: "Quasar",
      },
    ],
    buttons: [
      {
        link: "https://www.myvitabalance.com/",
        icon: (
          <TbWorld className="fill-[#6c8097] w-9 h-9 shadow-md rounded-full transition-all duration-100 hover:scale-110" />
        ),
      },
    ],
  },
];

export { projectsArray };

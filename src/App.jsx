import Main from "./components/Main";
import { useRef } from "react";

const App = () => {

  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  return (
    <div className="bg-white min-h-screen dark:bg-black transition-all duration-500 bg-[url('./assets/images/bluelight.webp')] bg-no-repeat bg-[length:600px_600px] bg-[left_-16em_bottom_-15rem] bg-fixed bg-blend-luminosity">
      <Main footerRef={footerRef}/>
      <footer ref={footerRef} className="text-gray-500 transition-all duration-500 dark:text-white mt-5 p-3 flex justify-end">
        <p>Copyright &copy; {currentYear} Romantiezer Rodríguez Pérez</p>
      </footer>
    </div>
  );
};

export default App;

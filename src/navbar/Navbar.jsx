import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useEffect, useRef } from "react";
import mainStore from "../store/mainStore";

export default function Navbar() {
  const store = mainStore();

  let menuRef = useRef();

  useEffect(() => {
    if (store.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [store.theme]);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        store.navClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div
      ref={menuRef}
      className="w-full fixed z-50 top-0 left-0 backdrop-blur-md bg-white/20 dark:bg-white/5 hover:shadow-sm"
    >
      <ul className="main-container p-3 flex justify-between items-center ">
        <li>
          <svg
            className="h-10 fill-cyan-800 dark:fill-sky-400 cursor-pointer"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 428.89 517.59"
          >
            <defs></defs>
            <path
              className="cls-1"
              d="M426.1,96.7c0-9.14-.53-17.19-1.07-24.18a330,330,0,0,1-45.13,12.9V33.84c-17.19,0-30.62-14-30.62-31.15H80.14a30.42,30.42,0,0,1-9.13,22,31.72,31.72,0,0,1-22,9.13V85.42A329.78,329.78,0,0,1,3.86,72.52c-.54,7-.54,15-1.07,24.18C1.71,160.09,8.69,267,57,361.54c2.69,5.37,5.91,11.28,9.14,16.65,20.41,35.46,47.27,68.77,82.19,96.16a198.4,198.4,0,0,0,17.19,12.36c5.37,3.76,11.28,7.52,17.19,11.28,10.21,5.91,20.41,11.82,31.69,16.65,12.36-5.91,24.18-12.35,34.92-18.8h0c6.45-4.3,12.9-8.06,18.8-12.89A99.34,99.34,0,0,0,280,473.82a338.29,338.29,0,0,0,82.2-96.16c3.22-5.38,5.91-11.29,9.13-16.66C420.19,267,427.18,160.09,426.1,96.7Zm-130,259.47c-4.84,9.67-14,17.73-27.94,24.17S238.62,390,220.35,390c-19.87,0-37.06-3.76-51-11.28s-23.1-17.19-27.94-29q-6.44-17.73-6.44-50V281h69.3v35.45c0,10.75,1.07,17.73,2.68,21,2.15,3.22,5.38,4.83,10.21,4.83a13.29,13.29,0,0,0,11.28-5.91c2.69-3.76,3.76-9.67,3.76-17.19,0-16.65-2.15-27.93-7-33.31s-16.66-14-34.92-26.32c-18.8-12.36-30.62-21.49-37.07-26.86-5.91-5.37-11.28-13.43-15-23.1s-5.91-22.56-5.91-37.6c0-22,2.69-38.15,8.6-48.35s14.5-18.27,27.39-23.64c12.36-5.91,27.94-8.59,45.67-8.59,19.34,0,36,3.22,49.42,9.66s22.56,14,26.86,23.64,6.45,25.79,6.45,48.35v11.28h-69.3V162.77c0-9.67-1.08-16.11-2.69-18.8s-4.83-4.3-9.13-4.3-8.06,1.62-10.21,5.38-3.22,9.13-3.22,16.65c0,9.67,1.07,16.65,3.76,21.49s9.67,10.74,21,17.73c33.31,19.87,54.26,36,62.85,48.88s12.9,33.31,12.9,61.24Q303.34,341.67,296.1,356.17Z"
            />
          </svg>
        </li>
        <ul className="flex justify-between items-center gap-5">
          <li
            className="text-cyan-800 hover:scale-105 duration-100 cursor-pointer dark:text-sky-400 "
            onClick={() => {
              store.theme == "light" ? store.darkMode() : store.lightMode();
            }}
          >
            {store.theme == "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </li>
          <li className="nav-open" onClick={() => store.navToggle()}>
            <div
              className={`${
                store.navOpen ? "opacity-0 " : "opacity-100"
              } duration-300`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              className={`${
                store.navOpen
                  ? "scale-10 opacity-100 delay-100 duration-300"
                  : "scale-50 opacity-0"
              }  top-0 left-0 w-full h-full `}
            >
              <span></span>
              <span></span>
            </div>
          </li>
        </ul>
      </ul>
      <ul
        className={`main-container flex justify-center items-center h-0 overflow-hidden duration-300
         ${store.navOpen ? "h-36 py-10" : ""}`}
      >
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
        <li> </li>
      </ul>
    </div>
  );
}

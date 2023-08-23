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
      className={`          ${
        store.navOpen ? " shadow-lg duration-200" : ""
      } w-full fixed z-50 top-0 left-0 backdrop-blur-md bg-white/20 dark:bg-white/5 `}
    >
      <ul className=" main-container p-3 flex justify-between items-center ">
        <li>
          <a href="#header" onClick={() => store.navClose()}>
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
          </a>
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
        className={`main-container flex flex-col gap-2 laptop:flex-row justify-around items-center h-0 overflow-hidden duration-300
         ${store.navOpen ? "h-96 laptop:h-36 py-14" : ""}`}
      >
        <li>
          <a
            className="py-2 cursor-pointer px-8 flex gap-4 justify-center items-center"
            href="#about"
            onClick={() => store.navClose()}
          >
            <svg
              className="h-8 fill-sky-700 dark:fill-sky-500"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 497.51 491.45"
            >
              <path
                className="cls-1"
                d="M154.33,383.31,437.12,149.62A128.9,128.9,0,0,0,474.81,93l21.08-49.22c8.35-25-17.07-50.46-42.11-42.11L404.56,22.7a128.91,128.91,0,0,0-56.67,37.68l-229,277.1-95.64-3.25A23.06,23.06,0,0,0,6,340.87L1.92,345c-3.55,3.55-2,9.84,3,11.8l77,30.6a20.5,20.5,0,0,0,6,16.16l3,3,3,3a20.79,20.79,0,0,0,12.49,6l28.21,70.95c2,4.93,8.25,6.52,11.8,3l4.11-4.11a23,23,0,0,0,6.64-17.23Z"
              />
              <path
                className="cls-1"
                d="M283.05,102.81,60,60.55a25.59,25.59,0,0,0-23,6.8l-9.09,9.09c-3.39,3.39-2.17,9.35,2.38,11.64l187.16,94.11Z"
              />
              <path
                className="cls-1"
                d="M435.29,435.84,393.4,214.73,314.45,280l93.32,185.59c2.29,4.55,8.25,5.77,11.64,2.38l9.09-9.09A25.56,25.56,0,0,0,435.29,435.84Z"
              />
            </svg>{" "}
            <span className=" font-main text-sky-700 dark:text-sky-500 font-bold text-2xl">
              About
            </span>
          </a>
        </li>
        <li>
          <a
            className="py-2 cursor-pointer px-8 flex gap-4 justify-center items-center"
            href="#skills"
            onClick={() => store.navClose()}
          >
            <svg
              className="h-8 fill-sky-700 dark:fill-sky-500"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 517.7 517.7"
            >
              <polygon
                className="cls-1"
                points="93.65 0 93.65 79.76 381.54 79.76 0 461.3 56.4 517.7 437.94 136.16 437.94 424.05 517.7 424.05 517.7 0 93.65 0"
              />
            </svg>
            <span className=" font-main text-sky-700 dark:text-sky-500 font-bold text-2xl justify-center items-center">
              Skills
            </span>
          </a>
        </li>
        <li>
          <a
            className="py-2 cursor-pointer px-8 flex gap-4 justify-center items-center"
            href="#projects"
            onClick={() => store.navClose()}
          >
            <svg
              className="h-8 fill-sky-700 dark:fill-sky-500"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 517.7 517.7"
            >
              <polygon
                className="cls-1"
                points="93.65 0 93.65 79.76 381.54 79.76 0 461.3 56.4 517.7 437.94 136.16 437.94 424.05 517.7 424.05 517.7 0 93.65 0"
              />
            </svg>
            <span className=" font-main text-sky-700 dark:text-sky-500 font-bold text-2xl justify-center items-center">
              Projects
            </span>
          </a>
        </li>
        <li>
          <a
            className="py-2 cursor-pointer px-8 flex gap-4 justify-center items-center"
            href="#contact"
            onClick={() => store.navClose()}
          >
            <svg
              className="h-8 fill-sky-700 dark:fill-sky-500"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 520 482.71"
            >
              <polygon
                className="cls-1"
                points="278.64 0 217.02 61.63 353.18 197.78 0 197.78 0 284.93 353.18 284.93 217.02 421.09 278.64 482.71 520 241.36 278.64 0"
              />
            </svg>{" "}
            <span className=" font-main text-sky-700 dark:text-sky-500 font-bold text-2xl">
              Contact
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

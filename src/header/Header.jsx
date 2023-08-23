import HeaderContent from "./HeaderContent";
import { useState } from "react";

export default function Header() {
  const [scroll, setScroll] = useState("");

  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener(
    "scroll",
    function handleScroll() {
      const scrollTopPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      scrollTopPosition > lastScrollTop
        ? setScroll("scrolling-down")
        : setScroll("scrolling-up");
      lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
    },
    false
  );

  return (
    <div
      id="header"
      style={{ height: "780px" }}
      className="bg-gradient-to-t from-sky-600 to-sky-300 dark:from-slate-950 dark:to-slate-900 relative"
    >
      <img
        src="/assets/cloud.svg"
        alt=""
        className="cloud1 absolute dark:hidden"
      />
      <img
        src="/assets/cloud.svg"
        alt=""
        className="cloud2 absolute dark:hidden"
      />{" "}
      <img
        src="/assets/moon.svg"
        alt=""
        className="w-12 top-24 right-20 tablet:w-16 laptop:top-28 laptop:right-48 invisible dark:visible absolute drop-shadow-xl shadow-white "
      />{" "}
      <img
        src="/assets/star.svg"
        alt=""
        className="star1 invisible dark:visible absolute drop-shadow-xl shadow-white "
      />{" "}
      <img
        src="/assets/star.svg"
        alt=""
        className="star2 invisible dark:visible absolute drop-shadow-xl shadow-white "
      />{" "}
      <img
        src="/assets/star.svg"
        alt=""
        className="star3 invisible dark:visible absolute drop-shadow-xl shadow-white "
      />{" "}
      <img
        src="/assets/star.svg"
        alt=""
        className="star4 invisible dark:visible absolute drop-shadow-xl shadow-white "
      />{" "}
      <img
        src="/assets/plane2.svg"
        alt=""
        className="plane2 absolute dark:brightness-75"
      />{" "}
      <img
        src="/assets/plane.svg"
        alt=""
        className="plane absolute dark:brightness-50"
      />{" "}
      <div className="main-container relative h-full">
        <img
          src="/assets/aeroport.svg"
          alt=""
          className="absolute right-10 tablet:right-20 bottom-0 w-3/4 tablet:w-2/4 laptop:right-0 laptop:w-1/3 dark:brightness-75"
        />
        <img
          src="/assets/pilot.svg"
          alt=""
          className="image-size absolute bottom-0 right-2/4 laptop:right-48  "
        />
        <HeaderContent />
      </div>
      <svg
        style={{ transitionProperty: "left" }}
        className={`absolute fill-white dark:fill-slate-700
      ${scroll == "scrolling-down" ? "-left-6 tablet:-left-16 " : "-left-0"}
       -bottom-1 w-8/12 tablet:w-7/12 duration-1000 delay-150 ease-out 
      `}
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1363 259.96"
      >
        <defs></defs>
        <path
          className="cls-1"
          d="M1363,260h-96.66c13.89-12.12,30.49-19.17,48.33-19.17S1349.11,247.84,1363,260Z"
        />
        <path
          className="cls-1"
          d="M1298.38,260H547.18a63.39,63.39,0,0,1,62.42-8.45,55.2,55.2,0,0,1,54.7-49.29,54.46,54.46,0,0,1,27.76,7.58,73.09,73.09,0,0,1,139.08,0,58.72,58.72,0,0,1,56,13.91,71.8,71.8,0,0,1,60.78-41.62c1.41-.09,2.85-.13,4.28-.13A71.64,71.64,0,0,1,1015,219.26c1,1.83,2,3.73,2.81,5.66a73.2,73.2,0,0,1,12.28-1.06,71.12,71.12,0,0,1,44.46,15.55,75.45,75.45,0,0,1,61.52-31.78c1.41,0,2.83,0,4.23.13A76.05,76.05,0,0,1,1201.82,246,65.39,65.39,0,0,1,1297,242.9"
        />
        <path
          className="cls-1"
          d="M817.25,259.64a60.1,60.1,0,0,0-56.17-52.81A83.17,83.17,0,0,0,749,187.37c-14.25-29.47-44.07-49.82-78.65-49.82a85.7,85.7,0,0,0-46.63,13.71,129.46,129.46,0,0,0-193.47-1c-.21.2-.4.41-.59.62-.38-.47-.74-.92-1.14-1.37v0a116.41,116.41,0,0,0-173.41-6.6A99.49,99.49,0,0,0,136.13,117C129.26,51.24,74.33,0,7.57,0,5,0,2.5.07,0,.23V259.64Z"
        />
      </svg>
      <svg
        style={{ transitionProperty: "right" }}
        className={`absolute fill-white  dark:fill-slate-700
       ${
         scroll == "scrolling-down"
           ? "right-28 tablet:right-52 "
           : "right-16 tablet:right-28"
       }
       duration-1000 delay-150 ease-out
       -bottom-1 w-6/12 tablet:w-4/12 
      `}
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1366.07 138.97"
      >
        <defs></defs>
        <path
          className="cls-1"
          d="M1366.07,139H0a78.5,78.5,0,0,1,93.41-28c3.71-33.24,32.21-59.07,66.8-59.07A67.56,67.56,0,0,1,194.12,61a89.64,89.64,0,0,1,169.86,0,73.12,73.12,0,0,1,19.18-2.55A72.26,72.26,0,0,1,432.38,77.6,88.1,88.1,0,0,1,592,79.11a90.45,90.45,0,0,1,15-1.28,87.94,87.94,0,0,1,54.3,18.64,93.14,93.14,0,0,1,155.43,7.86,80.91,80.91,0,0,1,116.2-3.68C943.09,51.54,987.05,14.6,1039.7,14.6a109.16,109.16,0,0,1,95.65,56.08,78.06,78.06,0,0,1,19.93-2.57,76.87,76.87,0,0,1,75.08,59.12A98.25,98.25,0,0,1,1366.07,139Z"
        />
      </svg>
      <svg
        style={{ transitionProperty: "right" }}
        className={`absolute fill-white  dark:fill-slate-700
        ${
          scroll == "scrolling-down" ? "-right-6 tablet:-right-10 " : "-right-0"
        }
        -bottom-1 w-2/5 laptop:w-1/5 duration-1000 delay-100 ease-out       
       `}
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1356.12 392.81"
      >
        <defs></defs>
        <path
          className="cls-1"
          d="M1356.12,11.8v381H276.32a67.77,67.77,0,0,1,2.22-7.26,70.4,70.4,0,0,1,2.94-6.84,71.22,71.22,0,0,1,31.7-31.95c-.12-1.33-.23-2.66-.3-4-.14-1.9-.21-3.82-.21-5.74a92.78,92.78,0,0,1,150-73A89.78,89.78,0,0,1,632,303.75a100.88,100.88,0,0,1,133.86,35.38,70.27,70.27,0,0,1,62.86-47.43,94.49,94.49,0,0,1,174-70.63,98.37,98.37,0,0,1,169.44-91.42,129.88,129.88,0,0,1,184-117.85Z"
        />
        <path
          className="cls-1"
          d="M314.1,392.81H0c48.73-23.89,101.39-36.94,156.35-36.94a352.56,352.56,0,0,1,85.89,10.58h0a359.07,359.07,0,0,1,39.23,12.26q8.5,3.19,16.88,6.84Q306.29,389,314.1,392.81Z"
        />
        <path
          className="cls-1"
          d="M434.7,385.54H216.35c31.37-27.39,68.87-43.3,109.18-43.3S403.33,358.15,434.7,385.54Z"
        />
      </svg>
    </div>
  );
}

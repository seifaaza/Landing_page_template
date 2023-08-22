import mainStore from "../store/mainStore";

export default function Projects() {
  const store = mainStore();
  return (
    <div className=" bg-gradient-to-b from-sky-200 to-white dark:from-slate-900 dark:to-slate-950 flex flex-col py-14">
      <div className="p-3  main-container flex flex-col gap-8 tablet:gap-10 laptop:gap-16 justify-center items-center">
        <h1
          style={{ lineHeight: "1.1" }}
          className=" text-5xl tablet:text-6xl laptop:text-7xl font-main font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-sky-600"
        >
          My Projects
        </h1>
        <div className="projects w-full grid grid-cols-3 gap-4">
          <div className="col-span-2 rounded-md tablet:rounded-xl laptop:rounded-2xl hover:shadow-2xl duration-300">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.figma.com/community/file/1221881365303551452/E-Commerce-Website-Design"
              className="project-icon w-fit absolute top-full right-10 duration-300"
            >
              <img src="/ressource/figma.svg" className="w-6 tablet:w-8 " />
            </a>
          </div>

          <div className=" row-span-2 rounded-md tablet:rounded-xl laptop:rounded-2xl hover:shadow-2xl duration-300">
            <a
              style={{ right: "30%" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://peaceful-fudge-ce5bca.netlify.app/"
              className="project-icon w-fit absolute top-full  duration-300"
            >
              <img src="/ressource/web.svg" className="w-6 tablet:w-8 " />
            </a>
            <a
              style={{ right: "20%" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/seifaaza/E-commerce"
              className="project-icon w-fit absolute top-full  duration-300 delay-100"
            >
              <img src="/ressource/github.svg" className="w-6 tablet:w-8 " />
            </a>
            <a
              style={{ right: "10%" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.figma.com/community/file/1240447308822868611/Landing-Page-Design"
              className="project-icon w-fit absolute top-full right-10 duration-300 delay-200"
            >
              <img src="/ressource/figma.svg" className="w-6 tablet:w-8 " />
            </a>
          </div>
          <div className="row-span-2  rounded-md tablet:rounded-xl laptop:rounded-2xl hover:shadow-2xl duration-300">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.figma.com/community/file/1221545581891965129/business-agency-website-(community)"
              className="project-icon w-fit absolute top-full right-10 duration-300"
            >
              <img src="/ressource/figma.svg" className="w-6 tablet:w-8 " />
            </a>
          </div>

          <div className=" rounded-md tablet:rounded-xl laptop:rounded-2xl hover:shadow-2xl  duration-300">
            <a
              style={{ right: "20%" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://peaceful-fudge-ce5bca.netlify.app/"
              className="project-icon w-fit absolute top-full duration-300"
            >
              <img src="/ressource/web.svg" className="w-6 tablet:w-8 " />
            </a>
            <a
              style={{ right: "10%" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/seifaaza/freelance-web-app"
              className="project-icon w-fit absolute top-full duration-300 delay-100"
            >
              <img src="/ressource/github.svg" className="w-6 tablet:w-8 " />
            </a>
          </div>
          <div className="col-span-2  rounded-md tablet:rounded-xl laptop:rounded-2xl hover:shadow-2xl duration-300">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.figma.com/community/file/1222645122420183621/Sign-In-and-Sign-Up"
              className="project-icon w-fit absolute top-full right-10 duration-300"
            >
              <img src="/ressource/figma.svg" className="w-6 tablet:w-8 " />
            </a>
          </div>
        </div>
        <div className=" flex justify-evenly flex-nowrap w-full">
          {store.theme == "light" ? (
            <>
              <div className="relative overflow-hidden w-20 tablet:w-32">
                <span className="window absolute top-0 left-0 h-full w-full bg-gradient-to-tl from-sky-600 to-sky-200"></span>
                <img
                  src="/assets/cloud.svg"
                  alt=""
                  className="w-16 cloud-window absolute"
                />
                <img
                  src="/assets/window.svg"
                  alt=""
                  className="w-52 overflow-hidden z-10 relative"
                />
              </div>
              <div className="relative overflow-hidden w-20 tablet:w-32">
                <span className="window absolute top-0 left-0 h-full w-full bg-gradient-to-tl from-sky-600 to-sky-200"></span>
                <img
                  src="/assets/cloud.svg"
                  alt=""
                  className="cloud-window absolute delay1"
                />
                <img
                  src="/assets/window2.svg"
                  alt=""
                  className="w-52 overflow-hidden z-10 relative "
                />
              </div>
              <div className="relative overflow-hidden w-20 tablet:w-32">
                <span className="window absolute top-0 left-0 h-full w-full bg-gradient-to-tl from-sky-600 to-sky-200"></span>
                <img
                  src="/assets/cloud.svg"
                  alt=""
                  className="w-16 cloud-window absolute delay2"
                />
                <img
                  src="/assets/window3.svg"
                  alt=""
                  className="w-52 overflow-hidden z-10 relative"
                />
              </div>
            </>
          ) : (
            <>
              <div className="relative overflow-hidden w-20 tablet:w-32">
                <span className="window absolute top-0 left-0 h-full w-full bg-black"></span>
                <img
                  src="/assets/star.svg"
                  alt=""
                  className="w-2 star-window top-2/4 left-2/3 absolute "
                />
                <img
                  src="/assets/window-dark.svg"
                  alt=""
                  className="w-52 overflow-hidden z-10 relative"
                />
              </div>
              <div className="relative overflow-hidden w-20 tablet:w-32">
                <span className="window absolute top-0 left-0 h-full w-full bg-black"></span>
                <img
                  src="/assets/star.svg"
                  alt=""
                  className="w-4 star-window top-3/4 left-1/3 absolute"
                />
                <img
                  src="/assets/window-dark.svg"
                  alt=""
                  className="w-52 overflow-hidden z-10 relative"
                />
              </div>
              <div className="relative overflow-hidden w-20 tablet:w-32">
                <span className="window absolute top-0 left-0 h-full w-full bg-black"></span>
                <img
                  src="/assets/star.svg"
                  alt=""
                  className="w-3 star-window top-1/4 left-2/4 absolute"
                />
                <img
                  src="/assets/window-dark.svg"
                  alt=""
                  className="w-52 overflow-hidden z-10 relative"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import mainStore from "./store/mainStore";

function WindowsAnimation() {
  const store = mainStore();
  return (
    <div className="bg-sky-50 dark:bg-slate-950 flex justify-evenly flex-nowrap w-full py-4 tablet:py-10">
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
  );
}

export default WindowsAnimation;

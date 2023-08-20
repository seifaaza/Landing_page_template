import HeaderContent from "./HeaderContent";

export default function Header() {
  return (
    <div className="bg-gradient-to-t from-sky-600 to-sky-300 dark:from-slate-950 dark:to-slate-900 h-screen ">
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
          className="absolute right-10 tablet:right-20 bottom-0 w-3/4 tablet:w-2/4 laptop:right-0 laptop:w-1/3  dark:brightness-75"
        />
        <img
          src="/assets/pilot.svg"
          alt=""
          className="image-size absolute bottom-0 right-2/4 laptop:right-56  "
        />
        <HeaderContent />
      </div>
    </div>
  );
}

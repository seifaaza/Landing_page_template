export default function Trips() {
  return (
    <div
      id="plans"
      className=" bg-gradient-to-b to-white from-sky-50 dark:from-slate-950 dark:to-slate-900 flex flex-col py-4 tablet:py-10"
    >
      <div className="p-3  main-container flex flex-col gap-8 tablet:gap-10 laptop:gap-16 justify-center items-center">
        <h1
          style={{ lineHeight: "1.1" }}
          className=" text-5xl tablet:text-6xl laptop:text-7xl font-main font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-sky-500 capitalize"
        >
          Plan an unforgettable trip
        </h1>
        <div className="trips w-full grid grid-cols-3 gap-4">
          <div className="col-span-2 rounded-md tablet:rounded-xl hover:shadow-2xl ">
            <span className="icon text-white text-bold text-lg tablet:text-2xl laptop:text-3xl absolute top-full right-10 duration-300">
              7500 MAD
            </span>
          </div>

          <div className=" row-span-2 rounded-md tablet:rounded-xl hover:shadow-2xl ">
            <span className="icon text-white text-bold text-lg tablet:text-2xl laptop:text-3xl absolute top-full right-10 duration-300">
              8300 MAD
            </span>
          </div>
          <div className="row-span-2  rounded-md tablet:rounded-xl hover:shadow-2xl duration-300">
            <span className="icon text-white text-bold text-lg tablet:text-2xl laptop:text-3xl absolute top-full right-10 duration-300">
              6300 MAD
            </span>
          </div>

          <div className=" rounded-md tablet:rounded-xl hover:shadow-2xl  duration-300">
            <span className="icon text-white text-bold text-lg tablet:text-2xl laptop:text-3xl absolute top-full right-10 duration-300">
              4300 MAD
            </span>
          </div>
          <div className="col-span-2  rounded-md tablet:rounded-xl hover:shadow-2xl duration-300">
            <span className="icon text-white text-bold text-lg tablet:text-2xl laptop:text-3xl absolute top-full right-10 duration-300">
              5200 MAD
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className=" bg-gradient-to-b from-sky-200 to-sky-100 dark:to-slate-800 dark:from-slate-900 flex flex-col py-8 tablet:py-20">
      <div className="p-3  main-container flex flex-col gap-8 tablet:gap-10 laptop:gap-16 justify-center items-center">
        <div className="flex flex-col tablet:flex-row justify-around w-full items-center gap-8">
          <div className="flex flex-col justify-center gap-2 items-center">
            <img src="/logo2.svg" className="w-16" alt="" />
            <h1 className="text-xs laptop:text-xl font-title text-sky-600 text-center">
              Seif Airways
            </h1>
          </div>
          <div className="flex gap-4">
            <img className="h-8" src="/assets/github.png" alt="" />
            <img className="h-8" src="/assets/linkedin.png" alt="" />
            <img className="h-8" src="/assets/figma.png" alt="" />
            <img className="h-8" src="/assets/dribbble.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

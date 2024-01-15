export default function Footer() {
  return (
    <div className="bg-sky-50 dark:bg-slate-900 flex flex-col py-8 tablet:py-20">
      <div className="p-3  main-container flex flex-col gap-8 tablet:gap-10 laptop:gap-16 justify-center items-center">
        <div className="flex flex-col tablet:flex-row justify-around w-full items-center gap-8">
          <div className="flex flex-col justify-center gap-2 items-center">
            <img src="/logo2.svg" className="w-16" alt="" />
            <h1 className="text-xs laptop:text-xl font-title text-sky-600 text-center">
              Sky Airways
            </h1>
          </div>
          <div className="flex gap-4">
            <a className="cursor-pointer">
              <img className="h-8" src="/ressource/facebook.png" alt="" />
            </a>
            <a className="cursor-pointer">
              <img className="h-8" src="/ressource/instagram.png" alt="" />
            </a>
            <a className="cursor-pointer">
              <img className="h-8" src="/ressource/youtube.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

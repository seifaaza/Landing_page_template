import { ArrowRightOutlined } from "@ant-design/icons";

export default function HeaderContent() {
  return (
    <div className="absolute w-9/12 left-2/4 top-32 tablet:top-40 laptop:items-start laptop:text-start laptop:w-6/12 laptop:top-56 laptop:left-10 desktop:w-6/12 -translate-x-2/4 laptop:translate-x-0 flex flex-col items-center text-center gap-5 tablet:gap-6 laptop:gap-8">
      <h1 className="font-bold font-title text-white text-5xl tablet:text-6xl laptop:text-7xl desktop:text-8xl">
        Seif Airways
      </h1>
      <p className=" font-medium text-small-heading laptop:max-w-xl font-main text-white dark:text-slate-300 ">
        I am AAZA Seifeddine, a full-stack web developer based in morocco
      </p>

      <a href="mailto:seifeddine.aaza@gmail.com">
        <button
          href="mailto:seifeddine.aaza@gmail.com"
          className="main-btn text-center laptop:text-left text-white border border-white hover:bg-white hover:text-sky-500 dark:hover:text-black"
        >
          <span>Let{"'"}s Talk</span>
          <ArrowRightOutlined />
        </button>
      </a>
    </div>
  );
}

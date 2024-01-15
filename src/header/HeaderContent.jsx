import { ArrowRightOutlined } from "@ant-design/icons";

export default function HeaderContent() {
  return (
    <div className="p-4 absolute w-full tablet:w-10/12 left-2/4 top-24 laptop:items-start laptop:text-start laptop:w-full laptop:top-52 laptop:left-10 desktop:w-6/12 -translate-x-2/4 laptop:translate-x-0 flex flex-col items-center text-center gap-5 tablet:gap-6 laptop:gap-8">
      <h1 className="font-bold font-title text-white text-4xl tablet:text-6xl">
        Sky Airways
      </h1>
      <p className="font-medium text-small-heading laptop:max-w-lg font-main text-white dark:text-slate-300 ">
        Experience seamless travel with Sky Airways, your one-stop solution for
        effortless booking
      </p>

      <button className="main-btn text-center laptop:text-left text-white border border-white hover:bg-white hover:text-sky-500 dark:hover:text-black">
        <span>Book Now </span>
        <ArrowRightOutlined />
      </button>
    </div>
  );
}

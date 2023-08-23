export default function Contact() {
  return (
    <div
      id="contact"
      className="h-screen bg-gradient-to-b to-sky-200 from-sky-100 dark:to-slate-800 dark:from-slate-900 flex flex-col py-4 tablet:py-14"
    >
      <div className="p-3  main-container flex flex-col gap-8 tablet:gap-10 laptop:gap-16 justify-center items-center">
        <h1
          style={{ lineHeight: "1.1" }}
          className="text-5xl tablet:text-6xl laptop:text-7xl font-main font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-sky-600"
        >
          My Contact
        </h1>
        -
      </div>
    </div>
  );
}

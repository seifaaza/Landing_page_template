export default function Header() {
  return (
    <div className="bg-gradient-to-t from-sky-600 to-sky-300 dark:from-slate-950 dark:to-slate-900 h-screen ">
      <img
        src="/assets/aeroport.svg"
        alt=""
        className="absolute right-0 bottom-0 w-3/6"
      />
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
        src="/assets/pilot.svg"
        alt=""
        className="w-96 absolute bottom-0 right-48 "
      />
    </div>
  );
}

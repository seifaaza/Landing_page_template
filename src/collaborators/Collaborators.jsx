import collaboratorsData from "./CollaboratorsData";

export default function Collaborators() {
  const brands = collaboratorsData.map((item) => item);
  return (
    <div
      id="collaborators"
      className="bg-sky-50 dark:bg-slate-950 flex flex-col tablet:py-10"
    >
      <div className="p-3  main-container flex flex-col gap-8 tablet:gap-10 laptop:gap-16 justify-center items-center">
        <div className="w-full flex flex-wrap gap-6 tablet:gap-10 laptop:gap-16 desktop:gap-20 justify-center items-center ">
          {brands}
        </div>
      </div>
    </div>
  );
}

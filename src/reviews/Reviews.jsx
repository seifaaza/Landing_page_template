import ReviewsItem from "./ReviewsItem";
import ReviewsData from "./ReviewsData";
import Rating from "@mui/material/Rating";

export default function Reviews() {
  const ReviewsItems = () => {
    return ReviewsData.map((item, index) => {
      return (
        <ReviewsItem
          key={index}
          name={item.name}
          city={item.city}
          photo={item.photo}
          rating={item.rating}
          review={item.review}
          delay={index * 100}
        />
      );
    });
  };
  return (
    <div
      id="reviews"
      className="bg-gradient-to-b to-sky-100 from-white dark:from-slate-800 dark:to-slate-950 flex flex-col py-4 tablet:py-14"
    >
      <div className="p-3  main-container flex flex-col gap-8 tablet:gap-10 laptop:gap-16 justify-center items-center">
        <h1
          style={{ lineHeight: "1.1" }}
          className="text-5xl tablet:text-6xl laptop:text-7xl font-main font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-sky-600"
        >
          What Our Clients Say
        </h1>
        <div className="flex flex-col gap-5 laptop:flex-row laptop:gap-8">
          <ReviewsItems />
        </div>
      </div>
    </div>
  );
}

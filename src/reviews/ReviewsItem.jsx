import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";

const ReviewsItem = (props) => {
  return (
    <div className="laptop:w-1/3 flex flex-col gap-3 p-4 bg-orange-opacity text-slate-700 rounded-xl tablet:max-w-lg tablet:p-5 bg-sky-100 dark:bg-slate-900">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center ">
          <Avatar
            alt={props.name}
            src={`/images/${props.photo}`}
            sx={{ width: 45, height: 45 }}
          />
          <div className="flex flex-col">
            <h3 className="font-medium text-lg laptop:max-w-lg font-main dark:text-slate-300 ">
              {props.name}
            </h3>
            <p className="text-slate-500 text-sm dark:text-slate-400">
              {props.city}
            </p>
          </div>
        </div>
        <div className="flex gap-1 ">
          <StarIcon className="text-yellow-400" />
          <p className="dark:text-white">{props.rating}</p>
        </div>
      </div>
      <p className="text-slate-600 text-lg dark:text-white">{props.review}</p>
    </div>
  );
};

ReviewsItem.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  city: PropTypes.string,
  rating: PropTypes.string,
  review: PropTypes.string,
};

export default ReviewsItem;

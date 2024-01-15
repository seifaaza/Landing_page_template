import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";

const ReviewsItem = (props) => {
  return (
    <div className="flex flex-col gap-3 p-4 bg-orange-opacity text-slate-700 rounded tablet:max-w-lg tablet:p-5">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <Avatar
            alt={props.name}
            src={`/assets/images/${props.photo}`}
            sx={{ width: 24, height: 24 }}
          />
          <div className="flex flex-col">
            <h3 className="font-medium text-small-heading laptop:max-w-lg font-main dark:text-slate-300 ">
              {props.name}
            </h3>
            <p className="text-slate-500 text-sm dark:text-slate-400">
              {props.city}
            </p>
          </div>
        </div>
        <div className="flex gap-1 ">
          <StarIcon className="text-orange-main" />
          <p className="dark:text-white">{props.rating}</p>
        </div>
      </div>
      <p className="text-small dark:text-slate-300">{props.review}</p>
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

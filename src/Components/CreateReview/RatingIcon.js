import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function RatingIcon(props) {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      {hoverRating >= index ? (
        <StarIcon />
      ) : !hoverRating && rating >= index ? (
        <StarIcon />
      ) : (
        <StarBorderIcon />
      )}
    </div>
  );
}

export default RatingIcon;

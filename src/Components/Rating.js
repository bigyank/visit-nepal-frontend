import { Grid } from "@material-ui/core";
import { Star, StarHalf, StarBorder } from "@material-ui/icons/";

const Rating = ({ rating, numReviews }) => {
  const isFloat = function (n) {
    return parseInt(n) !== n;
  };

  if (typeof rating !== "number") {
    return null;
  }

  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item>
        {/* number of full stars */}
        {[...Array(Math.floor(rating))].map((_, index) => (
          <Star key={index} />
        ))}

        {/* add halfstar if needed */}
        {isFloat(rating) && <StarHalf />}

        {/* remaining empty star out of 5 */}
        {[...Array(5 - Math.ceil(rating))].map((_, index) => (
          <StarBorder key={index} />
        ))}
      </Grid>
      <Grid item>
        {numReviews} {numReviews <= 1 ? "review" : "reviews"}
      </Grid>
    </Grid>
  );
};

export default Rating;

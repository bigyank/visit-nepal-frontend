import { Box, Grid } from "@material-ui/core";
import ReviewCard from "./ReviewCard";

const ReviewList = ({ currentReviews, placeId }) => {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item xs={12}>
        {currentReviews.map((review) => (
          <Box key={review.id} mb={4}>
            <ReviewCard
              comment={review.comment}
              rating={review.rating}
              createdAt={review.createdAt}
              user={review.user}
              img={review.img}
              title={review.title}
              placeId={placeId}
            />
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default ReviewList;

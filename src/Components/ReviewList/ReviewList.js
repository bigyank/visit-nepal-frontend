import { Box, Grid } from "@material-ui/core";
import ReviewCard from "./ReviewCard";

const ReviewList = ({ currentReviews, placeId }) => {
  // const [currentPage, setCurrentPage] = useState(1);

  // const postsPerPage = 2;
  // const indexOfLastReview = currentPage * postsPerPage;
  // const indexOfFirstReview = indexOfLastReview - postsPerPage;
  // const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <Grid container direction="column" spacing={4}>
      <Grid item xs={12}>
        {currentReviews.map((review) => (
          <Box key={review.id} mb={2}>
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

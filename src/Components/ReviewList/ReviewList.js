import { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import ReviewCard from "./ReviewCard";

const ReviewList = ({ reviews }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 2;
  const indexOfLastReview = currentPage * postsPerPage;
  const indexOfFirstReview = indexOfLastReview - postsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <Grid container direction="column" spacing={2}>
      {currentReviews.map((review) => (
        <Grid item xs={12} key={review.id}>
          <Box key={review.id} mb={2}>
            <ReviewCard
              comment={review.comment}
              rating={review.rating}
              createdAt={review.createdAt}
              user={review.user}
              img={review.img}
              title={review.title}
            />
          </Box>
        </Grid>
      ))}

      <Grid item>
        <Pagination
          color="primary"
          count={Math.ceil(reviews.length / postsPerPage)}
          page={currentPage}
          onChange={(_event, pnumber) => setCurrentPage(pnumber)}
        />
      </Grid>
    </Grid>
  );
};

export default ReviewList;

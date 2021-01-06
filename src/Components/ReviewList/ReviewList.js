import { useState } from "react";
import { Box } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import ReviewCard from "./ReviewCard";

const ReviewList = ({ reviews }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 2;
  const indexOfLastReview = currentPage * postsPerPage;
  const indexOfFirstReview = indexOfLastReview - postsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <Box>
      {currentReviews.map((review) => (
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
      ))}

      <Pagination
        color="primary"
        count={Math.ceil(reviews.length / postsPerPage)}
        page={currentPage}
        onChange={(event, pnumber) => setCurrentPage(pnumber)}
      />
    </Box>
  );
};

export default ReviewList;

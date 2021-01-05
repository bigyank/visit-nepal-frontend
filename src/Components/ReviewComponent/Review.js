import { useState } from "react";
import { useMutation, queryCache } from "react-query";
import { toast } from "react-toastify";
import {
  Box,
  Grid,
  Typography,
  Button,
  LinearProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Editor from "./Editor";
import StarRating from "./StarRating";

import { makeReview } from "../../services/place";

const useStyles = makeStyles({
  itemStyle: {
    width: "80%",
  },
});

const Review = ({ id }) => {
  const [rating, setRating] = useState(0);
  const [value, setValue] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const classes = useStyles();

  const [mutateMakeReview] = useMutation(makeReview, {
    onSuccess: () => {
      queryCache.refetchQueries("placeDetail");
      toast.info("Review added sucessfully");
      setValue("");
      setRating(0);
    },

    onError: (error) => {
      const errMessage =
        error.response && error.response.data.error
          ? error.response.data.error.message
          : error.message;

      toast.error(errMessage);
    },
  });

  const handleReviewSubmit = async () => {
    setSubmitting(true);
    await mutateMakeReview({ id, review: { rating, comment: value } });
    setSubmitting(false);
  };

  return (
    <Box mt={2}>
      <Typography variant="h5" align="center" color="secondary">
        Write a Review
      </Typography>

      <Grid container alignItems="center" direction="column">
        <Grid item>
          <StarRating {...{ rating, setRating }} />
        </Grid>

        <Grid item className={classes.itemStyle}>
          <Editor {...{ value, setValue }} />
        </Grid>

        <Grid item>
          <Box p={2}>
            {isSubmitting && <LinearProgress />}
            <Button
              variant="outlined"
              color="secondary"
              disabled={isSubmitting}
              onClick={handleReviewSubmit}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Review;

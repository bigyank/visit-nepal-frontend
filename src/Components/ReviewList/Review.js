import { Link } from "react-router-dom";
import { Box, Grid, Typography, Button, Divider } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import ReviewList from "./ReviewList";

const Review = ({ reviews, id }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Grid container justify="center">
      <Box
        m={matches ? 4 : 0}
        p={4}
        width={matches ? "60%" : "100%"}
        bgcolor="white.500"
        border={1}
        borderColor="grey.300"
      >
        <Box mb={4}>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant={matches ? "h4" : "h5"}>Reviews</Typography>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                variant="contained"
                color="primary"
                size={matches ? "large" : "medium"}
                to={`/place/${id}/review`}
              >
                Write a Review
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box mb={4}>
          <Divider />
        </Box>
        {reviews.length !== 0 ? (
          <ReviewList reviews={reviews} />
        ) : (
          <Grid container justify="center">
            <Grid item xs={12} md={8}>
              <img
                src="./images/searching.png"
                alt="searching"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Grid>
          </Grid>
        )}
      </Box>
    </Grid>
  );
};

export default Review;

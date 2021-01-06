import {
  Grid,
  Typography,
  Paper,
  Box,
  CircularProgress,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "react-query";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Review from "../Components/CreateReview/Review";
import { getPlaceDetail } from "../services/place";

const useStyles = makeStyles({
  reviewStyles: {
    width: "60%",
    padding: "2rem",
  },
  imageStyles: {
    width: "100%",
    height: "auto",
  },
});

function PlaceReviewPlace({ match }) {
  const { id } = match.params;
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const { isLoading, data } = useQuery(
    ["placeDetailReview", id],
    getPlaceDetail,
    {
      retry: false,
    }
  );

  if (isLoading) return <CircularProgress />;
  if (!data) return <CircularProgress />;

  return (
    <Box mx={matches ? 4 : 0} my={2}>
      <Grid container justify="center">
        <Paper className={classes.reviewStyles}>
          <Grid container justify="flex-start" spacing={2}>
            <Grid item xs={12} md={4}>
              <img
                src={data.image}
                alt={data.name}
                className={classes.imageStyles}
              />
            </Grid>
            <Grid item>
              <Typography variant={matches ? "h5" : "h6"}>
                {data.name}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {data.type}
              </Typography>
            </Grid>
          </Grid>
          <Box m={2}>
            <Divider />
          </Box>
          <Review id={id} />
        </Paper>
      </Grid>
    </Box>
  );
}

export default PlaceReviewPlace;

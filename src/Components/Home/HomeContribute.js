import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  Hidden,
  Paper,
  Typography,
} from "@material-ui/core";

const styles = {
  contributeContainer: {
    height: 250,
    backgroundImage: `url(${"./images/map.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
};

const HomeContribute = () => {
  return (
    <Paper>
      <Grid container>
        <Hidden xsDown>
          <Grid item xs={6}>
            <Box style={styles.contributeContainer}></Box>
          </Grid>
        </Hidden>
        <Grid
          item
          container
          xs={12}
          sm={6}
          direction="column"
          spacing={2}
          justify="center"
          style={{ padding: "20px" }}
        >
          <Grid item>
            <Typography variant="h5">
              Start sharing your travel ideas
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Create a Destination to save and share all of your travel
              destinations, and see them on a map
            </Typography>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to="/contribute"
              variant="contained"
              color="primary"
            >
              Create a Destination
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HomeContribute;
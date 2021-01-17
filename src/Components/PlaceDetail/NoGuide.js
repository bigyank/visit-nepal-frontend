import {
  Box,
  Button,
  Grid,
  Hidden,
  Paper,
  Typography,
} from "@material-ui/core";

import missing from "../../images/missing.png";

const styles = {
  contributeContainer: {
    height: "40vh",
    backgroundImage: `url(${missing})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
};

const NoGuide = ({ beGuideHnadler }) => {
  return (
    <Box m={4}>
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
            alignItems="center"
            style={{ padding: "20px" }}
          >
            <Grid item>
              <Typography align="center" variant="h5">
                No Guides available
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" align="center">
                We coud not find any guides for this destination. Do you want to
                be one?
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={beGuideHnadler}
              >
                Guide this Destination
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default NoGuide;

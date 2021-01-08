import {
  Paper,
  Grid,
  Box,
  Typography,
  Hidden,
  Button,
} from "@material-ui/core";

const HomeGuide = () => {
  const styles = {
    searchContainer: {
      height: "40vh",
      backgroundImage: `url(${"./images/guide.png"})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
    },
  };

  return (
    <Box mb={6}>
      <Paper style={{ padding: "20px" }}>
        <Grid container spacing={4}>
          <Grid
            item
            container
            xs={12}
            sm={6}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Box mb={2}>
                <Typography align="center" variant="h5">
                  Want to be a Guide?
                </Typography>
                <Typography align="center" variant={"body1"}>
                  Be a guide and share what you have in you
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Be a Guide
              </Button>
            </Grid>
          </Grid>
          <Hidden xsDown>
            <Grid item xs={6}>
              <Box style={styles.searchContainer}></Box>
            </Grid>
          </Hidden>
        </Grid>
      </Paper>
    </Box>
  );
};

export default HomeGuide;

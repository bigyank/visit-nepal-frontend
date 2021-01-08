import {
  Paper,
  Grid,
  Box,
  TextField,
  Typography,
  InputAdornment,
  Hidden,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const styles = {
  searchContainer: {
    height: 400,
    backgroundImage: `url(${"./images/explore.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
};

const HeaderSearch = ({ matches }) => {
  return (
    <Box mb={20}>
      <Paper style={{ padding: "20px" }}>
        <Grid container spacing={4}>
          <Grid
            item
            container
            xs={12}
            sm={6}
            direction="column"
            justify="center"
          >
            <Grid item>
              <Box mb={2}>
                <Typography align="center" variant={matches ? "h5" : "body1"}>
                  Find your next Destination
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <TextField
                id="header-search"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Hidden xsDown>
            <Grid item xs={6}>
              {/* <img
                src="./images/explore.png"
                alt="header"
                style={{ width: "100%" }}
              /> */}
              <Box style={styles.searchContainer}></Box>
            </Grid>
          </Hidden>
        </Grid>
      </Paper>
    </Box>
  );
};

export default HeaderSearch;

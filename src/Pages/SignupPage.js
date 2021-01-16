import { Grid, Typography, Paper, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GTranslate } from "@material-ui/icons/";

import SignupForm from "../Components/SignupForm";
import DividerWithText from "../Components/DividerWithText";

const useStyles = makeStyles({
  paperStyles: {
    padding: "2rem 3rem",
    marginTop: "1.5rem",
  },
  loginStyles: {
    marginTop: "2rem",
  },
});

const Signup = () => {
  const classes = useStyles();

  const handleGoogleOauth = () => {
    window.location.href =
      process.env.REACT_APP_ENV === "development"
        ? "http://localhost:4000/api/auth/google"
        : "http://app.vnepal.me/api/auth/google";
  };

  return (
    <Grid
      className={classes.loginStyles}
      container
      justify="center"
      alignContent="center"
    >
      <Grid item xs={10} md={6} lg={5}>
        <Paper className={classes.paperStyles}>
          <Box mb={2} fontWeight="fontWeightBold">
            <Typography variant="h5" component="h1" align="center">
              Ready To Explore?
            </Typography>
            <Typography component="h2" align="center" color="textSecondary">
              Beautiful destinations are right around the corner!
            </Typography>
          </Box>
          <Box mb={2}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<GTranslate />}
              fullWidth
              onClick={handleGoogleOauth}
            >
              Sign up with Google
            </Button>
          </Box>
          <Box mb={1}>
            <DividerWithText>
              <Typography>Or</Typography>
            </DividerWithText>
          </Box>
          <SignupForm />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Signup;

import { Link as RouterLink } from "react-router-dom";

import { Grid, Typography, Button, Link, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GTranslate } from "@material-ui/icons/";

import FormikForm from "../Components/LoginForm";
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

const Login = () => {
  const classes = useStyles();

  const handleGoogleOauth = () => {
    window.location.href =
      process.env.REACT_APP_ENV === "development"
        ? "http://localhost:4000/api/auth/google"
        : "http://app.vnepal.me/api/auth/google";
  };

  return (
    <>
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
                Welcome Back!
              </Typography>
              <Typography component="h2" align="center" color="textSecondary">
                Lets complete that bucketlist!
              </Typography>
            </Box>
            <Box mb={2}>
              <Button
                onClick={handleGoogleOauth}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<GTranslate />}
                fullWidth
              >
                Continue with Google
              </Button>
            </Box>
            <Box mb={1}>
              <DividerWithText>
                <Typography>Or</Typography>
              </DividerWithText>
            </Box>

            <FormikForm />

            <Link to={`/password/request`} component={RouterLink}>
              <Typography align="center">I forgot my password</Typography>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;

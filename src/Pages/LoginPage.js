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

  const preventDefault = (event) => event.preventDefault();

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
              Welcome Back!
            </Typography>
            <Typography component="h2" align="center" color="textSecondary">
              Lets complete that bucketlist!
            </Typography>
          </Box>
          <Box mb={2}>
            <Button
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

          <Link href="#" onClick={preventDefault}>
            <Typography align="center">I forgot my password</Typography>
          </Link>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
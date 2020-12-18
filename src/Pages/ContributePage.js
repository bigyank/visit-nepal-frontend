import { Grid, Typography, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ContributeForm from "../Components/ContributeForm";

const useStyles = makeStyles({
  paperStyles: {
    padding: "2rem 3rem",
    margin: "1.5rem 0",
  },
  loginStyles: {
    marginTop: "2rem",
  },
});

const Contribute = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.loginStyles}
      container
      justify="center"
      alignContent="center"
    >
      <Grid item xs={10} md={6}>
        <Paper className={classes.paperStyles}>
          <Box mb={2} fontWeight="fontWeightBold">
            <Typography variant="h5" component="h1" align="center">
              Contribute
            </Typography>
            <Typography component="h2" align="center" color="textSecondary">
              Share your secrets!
            </Typography>
          </Box>

          <ContributeForm />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Contribute;
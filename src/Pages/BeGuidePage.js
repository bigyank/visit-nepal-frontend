import {
  Grid,
  Paper,
  Typography,
  IconButton,
  TextField,
  Box,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    width: "50%",
    padding: "2rem",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      padding: "1rem",
    },
  },
}));

const BeGuidePage = () => {
  const classes = useStyles();

  return (
    <Box mt={4}>
      <Box mb={2} p={4}>
        <Alert severity="warning" align="center">
          Login with atleast one of the following portal and provide a short
          description
        </Alert>
      </Box>
      <Grid container xs={12} justify="center">
        <Paper className={classes.paperStyle}>
          <Grid container direction="column" justify="center" spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                Be a guide
              </Typography>
            </Grid>
            <Grid item container justify="center" xs={12}>
              <IconButton aria-label="share">
                <TwitterIcon style={{ fontSize: "60px" }} />
              </IconButton>
              <IconButton aria-label="share">
                <FacebookIcon style={{ fontSize: "60px" }} />
              </IconButton>
              <IconButton aria-label="share">
                <LinkedInIcon style={{ fontSize: "60px" }} />
              </IconButton>
              <IconButton aria-label="share">
                <InstagramIcon style={{ fontSize: "60px" }} />
              </IconButton>
              <IconButton aria-label="share">
                <MailIcon style={{ fontSize: "60px" }} />
              </IconButton>
            </Grid>
            <Grid xs={12} item>
              <Box px={2}>
                <Typography variant="body1">Description</Typography>
                <TextField variant="outlined" fullWidth multiline rows={2} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box px={2}>
                <Button variant="contained" color="primary">
                  Be a guide
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
};

export default BeGuidePage;

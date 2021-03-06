import { useHistory } from "react-router-dom";
import { useQuery, useMutation, queryCache } from "react-query";
import { toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";

import {
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  LinearProgress,
  InputAdornment,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

import LoadingIndicator from "../Components/LoadingIndicator";

import { getUser } from "../services/user";
import { beGuide } from "../services/guide";

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

const BeGuidePage = ({ location }) => {
  const redirect = location.search ? location.search.split("=")[1] : null;
  const history = useHistory();
  const classes = useStyles();

  const { isLoading, error, data } = useQuery("userInfo", getUser);
  const [beGuideMutation] = useMutation(beGuide, {
    onSuccess: () => {
      data.role !== "guide"
        ? toast.success("you are now a guide")
        : toast.info("profile updated");
      queryCache.refetchQueries("userInfo");
      if (redirect) history.push(redirect);
    },
    onError: (error) => {
      const errMessage =
        error.response && error.response.data.error
          ? error.response.data.error.message
          : error.message;

      toast.error(errMessage);
    },
  });

  if (isLoading) return <LoadingIndicator />;
  if (error) history.push("/error");

  const formInitValues = {
    instagram: data ? (data.guideInfo ? data.guideInfo.instagram : "") : "",
    facebook: data ? (data.guideInfo ? data.guideInfo.facebook : "") : "",
    twitter: data ? (data.guideInfo ? data.guideInfo.twitter : "") : "",
    linkedin: data ? (data.guideInfo ? data.guideInfo.linkedin : "") : "",
    description: data ? (data.guideInfo ? data.guideInfo.description : "") : "",
  };

  return (
    <Formik
      initialValues={formInitValues}
      // validationSchema={validator}
      onSubmit={async (values, { setSubmitting }) => {
        await beGuideMutation(values);
        setSubmitting(false);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Box mt={4}>
          <Grid container xs={12} justify="center">
            <Paper className={classes.paperStyle}>
              <Grid container direction="column" justify="center" spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h4" align="center">
                    Be a guide
                  </Typography>
                </Grid>
                <Form>
                  <Box mb={3}>
                    <Field
                      component={TextField}
                      variant="outlined"
                      name="instagram"
                      label="instagram"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <InstagramIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                  <Box mb={3}>
                    <Field
                      component={TextField}
                      variant="outlined"
                      label="facebook"
                      name="facebook"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FacebookIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>

                  <Box mb={3}>
                    <Field
                      component={TextField}
                      variant="outlined"
                      label="twitter"
                      name="twitter"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <TwitterIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>

                  <Box mb={3}>
                    <Field
                      component={TextField}
                      variant="outlined"
                      label="linkedin"
                      name="linkedin"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LinkedInIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>

                  <Box mb={3}>
                    <Field
                      component={TextField}
                      variant="outlined"
                      label="description"
                      name="description"
                      fullWidth
                      multiline
                      rows={2}
                    />
                  </Box>

                  {isSubmitting && <LinearProgress />}

                  <Box mb={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      disabled={isSubmitting}
                      onClick={submitForm}
                    >
                      {data.role !== "guide" ? "submit" : "update"}
                    </Button>
                  </Box>
                </Form>
              </Grid>
            </Paper>
          </Grid>
        </Box>
      )}
    </Formik>
  );
};

export default BeGuidePage;

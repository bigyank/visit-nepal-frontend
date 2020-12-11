import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "formik-material-ui";

const validator = yup.object({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const useStyles = makeStyles({
  textFeildStyles: {
    width: "100%",
  },
});

const SignupForm = () => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      }}
      validationSchema={validator}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Box mb={3}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Field
                  className={classes.textFeildStyles}
                  component={TextField}
                  variant="outlined"
                  name="firstname"
                  type="text"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  className={classes.textFeildStyles}
                  component={TextField}
                  variant="outlined"
                  name="lastname"
                  type="text"
                  label="Last Name"
                />
              </Grid>
            </Grid>
          </Box>

          <Box mb={3}>
            <Field
              component={TextField}
              variant="outlined"
              name="email"
              type="email"
              label="Email"
              fullWidth
            />
          </Box>
          <Box mb={3}>
            <Field
              component={TextField}
              variant="outlined"
              type="password"
              label="Password"
              name="password"
              fullWidth
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
              Sign Up
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;

import { useRef } from "react";
import { useMutation } from "react-query";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";

import { Button, LinearProgress, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "formik-material-ui";

import { signupUser } from "../services/auth";

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

const formInitValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const SignupForm = () => {
  const formRef = useRef();
  const classes = useStyles();

  const [mutateSignupUser] = useMutation(signupUser, {
    onSuccess: () => {
      formRef.current.resetForm();
      toast.info("Please Comfirm your email");
    },
    onError: (error) => {
      const errMessage =
        error.response && error.response.data.error
          ? error.response.data.error.message
          : error.message;

      toast.error(errMessage);
    },
  });

  return (
    <Formik
      innerRef={formRef}
      initialValues={formInitValues}
      validationSchema={validator}
      onSubmit={async (values, { setSubmitting }) => {
        await mutateSignupUser(values);
        setSubmitting(false);
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

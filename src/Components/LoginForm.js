import { useMutation } from "react-query";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress, Box } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { loginUser } from "../services/auth";

const LoginForm = () => {
  const [mutateLoginUser] = useMutation(loginUser);

  const validator = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const loginFormHandler = async (values, { setSubmitting }) => {
    await mutateLoginUser(values);
  };

  const formInitValues = {
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={formInitValues}
      validationSchema={validator}
      onSubmit={loginFormHandler}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
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
              Continue
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

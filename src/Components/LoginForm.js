import { useRef } from "react";
import { useMutation } from "react-query";
import ReCAPTCHA from "react-google-recaptcha";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { useHistory } from "react-router-dom";
import { useAuth } from "../user-contex";
import { toast } from "react-toastify";
import { Button, LinearProgress, Box } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { loginUser } from "../services/auth";

const validator = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const formInitValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const reRef = useRef();
  const history = useHistory();
  const [, userDispatch] = useAuth();
  const [mutateLoginUser] = useMutation(loginUser, {
    onSuccess: (data) => {
      userDispatch({ type: "login", payload: { user: data } });
      history.push("/");
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
      initialValues={formInitValues}
      validationSchema={validator}
      onSubmit={async (values, { setSubmitting }) => {
        const token = await reRef.current.executeAsync();
        reRef.current.reset();
        await mutateLoginUser({ ...values, token });
        setSubmitting(false);
      }}
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
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA}
            size="invisible"
            ref={reRef}
          />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

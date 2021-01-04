import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { Button, LinearProgress, Box } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { confirmPassReset } from "../services/auth";

const validator = yup.object({
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required("confirm password is a required feild")
    .oneOf([yup.ref("password")], "Passwords does not match"),
});

const formInitValues = {
  password: "",
  confirmPassword: "",
};

const ResetPassForm = ({ id }) => {
  const history = useHistory();

  const [mutatePassReset] = useMutation(confirmPassReset, {
    onSuccess: () => {
      toast.info("password reset sucessful");
      history.push("/login");
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
        await mutatePassReset({ id, credentials: values });
        setSubmitting(false);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Box mb={3}>
            <Field
              component={TextField}
              variant="outlined"
              name="password"
              type="password"
              label="Password"
              fullWidth
            />
          </Box>
          <Box mb={3}>
            <Field
              component={TextField}
              variant="outlined"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
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
              Reset Password
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ResetPassForm;
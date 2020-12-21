import { useMutation } from "react-query";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { Button, LinearProgress, Box } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { requestPassReset } from "../services/auth";

const validator = yup.object({
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const formInitValues = {
  password: "",
  confirmPassword: "",
};

const ResetPassForm = () => {
  const [mutatePassRequest] = useMutation(requestPassReset, {
    onSuccess: () => {
      toast.info("confirm your email");
    },
    onError: (error) => {
      const errMessage = error.response.data.error.message;
      toast.error(errMessage);
    },
  });

  return (
    <Formik
      initialValues={formInitValues}
      validationSchema={validator}
      onSubmit={async (values, { setSubmitting }) => {
        // await mutatePassRequest(values);
        console.log(values);
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
              Email Me
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ResetPassForm;

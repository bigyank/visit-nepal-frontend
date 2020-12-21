import { useRef } from "react";
import { useMutation } from "react-query";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { Button, LinearProgress, Box } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { requestPassReset } from "../services/auth";

const validator = yup.object({
  email: yup.string().email().required(),
});

const formInitValues = {
  email: "",
};

const ForgotPassForm = () => {
  const formRef = useRef();

  const [mutatePassRequest] = useMutation(requestPassReset, {
    onSuccess: () => {
      formRef.current.resetForm();
      toast.info("confirm your email");
    },
    onError: (error) => {
      const errMessage = error.response.data.error.message;
      toast.error(errMessage);
    },
  });

  return (
    <Formik
      innerRef={formRef}
      initialValues={formInitValues}
      validationSchema={validator}
      onSubmit={async (values, { setSubmitting }) => {
        await mutatePassRequest(values);
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

export default ForgotPassForm;

import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import {
  Button,
  LinearProgress,
  Box,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Select } from "formik-material-ui";
import ContributeMap from "./ContributeMap";

const validator = yup.object({
  firstname: yup.string().required(),
  email: yup.string().email().required(),
});

const useStyles = makeStyles({
  textFeildStyles: {
    width: "100%",
  },
});

const ContributeForm = () => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        firstname: "",
        email: "",
        type: "",
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
            <Field
              className={classes.textFeildStyles}
              component={TextField}
              variant="outlined"
              name="firstname"
              type="text"
              label="First Name"
            />
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
            <InputLabel htmlFor="type">Type</InputLabel>
            <Field
              style={{ height: "2rem" }}
              component={Select}
              name="type"
              inputProps={{
                id: "age-simple",
              }}
              fullWidth
            >
              <MenuItem value="religious">Religious</MenuItem>
              <MenuItem value="landmark">Landmark</MenuItem>
              <MenuItem value="shopping">Shopping</MenuItem>
            </Field>
          </Box>

          <Box mb={2}>
            <ContributeMap />
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
              Add
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ContributeForm;

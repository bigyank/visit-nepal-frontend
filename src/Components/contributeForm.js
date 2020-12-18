import { useState } from "react";
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
import SearchFeild from "./PlacesSearch";

const validator = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
});

const useStyles = makeStyles({
  textFeildStyles: {
    width: "100%",
  },
});

const ContributeForm = () => {
  const [location, setLocation] = useState([27.7172, 85.324]);
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        type: "landmark",
        location: [27.7172, 85.324],
      }}
      validationSchema={validator}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting, setValues, values }) => (
        <Form>
          <Box mb={3}>
            <Field
              className={classes.textFeildStyles}
              component={TextField}
              variant="outlined"
              name="name"
              type="text"
              label="First Name"
            />
          </Box>

          <Box mb={3}>
            <Field
              component={TextField}
              variant="outlined"
              multiline
              name="description"
              type="text"
              label="Description"
              fullWidth
            />
          </Box>
          <Box mb={4}>
            <Box mb={1}>
              <InputLabel htmlFor="type">Type</InputLabel>
            </Box>
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
            <SearchFeild />
          </Box>

          <Box mb={2}>
            <ContributeMap setValues={setValues} values={values} />
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

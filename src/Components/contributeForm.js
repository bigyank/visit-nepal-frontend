import { useState } from "react";
import { app } from "../firebaase";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import {
  Button,
  LinearProgress,
  Box,
  MenuItem,
  InputLabel,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Select } from "formik-material-ui";

import ContributeMap from "./ContributeMap";
import PlacesSearch from "./PlacesSearch";
import UploadButton from "./UploadButton";

const validator = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
});

const useStyles = makeStyles({
  textFeildStyles: {
    width: "100%",
  },
});

const uploadImage = async (img) => {
  try {
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(img.name);
    await fileRef.put(img);
    return fileRef.getDownloadURL();
  } catch (error) {
    console.log(error);
  }
};

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
        img: "/images/sample.jpg",
      }}
      validationSchema={validator}
      onSubmit={async (values, { setSubmitting }) => {
        if (typeof values.img !== "string") {
          const uploadedImg = await uploadImage(values.img);
          values.img = uploadedImg;
        }
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
              label="Name"
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

          <Box mb={4}>
            <Grid
              container
              justify="space-around"
              alignItems="center"
              spacing={2}
            >
              <Grid item md={4}>
                <UploadButton setValues={setValues} values={values} />
              </Grid>
              <Grid item md={4}>
                <PlacesSearch setLocation={setLocation} />
              </Grid>
            </Grid>
          </Box>

          <Box mb={2}>
            <ContributeMap
              setValues={setValues}
              values={values}
              location={location}
              setLocation={setLocation}
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
              Add
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ContributeForm;

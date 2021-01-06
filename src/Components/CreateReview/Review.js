import { useState } from "react";
import { useMutation, queryCache } from "react-query";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Box,
  Grid,
  Typography,
  Button,
  LinearProgress,
  TextField,
  IconButton,
} from "@material-ui/core";
import Editor from "./Editor";
import StarRating from "./StarRating";

import { makeReview } from "../../services/place";
import { PhotoCamera } from "@material-ui/icons";
import { app } from "../../firebaase";

const Review = ({ id }) => {
  const history = useHistory();

  const [rating, setRating] = useState(0);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setSubmitting] = useState(false);

  const [mutateMakeReview] = useMutation(makeReview, {
    onSuccess: (data) => {
      queryCache.refetchQueries("placeDetail");
      toast.info("Review added sucessfully");
      setValue("");
      setRating(0);
      history.push(`/place/${data.id}`);
    },

    onError: (error) => {
      const errMessage =
        error.response && error.response.data.error
          ? error.response.data.error.message
          : error.message;

      toast.error(errMessage);
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

  const handleReviewSubmit = async () => {
    setSubmitting(true);
    const reviewToAdd = { rating, comment: value };
    if (file) {
      const uploadedImg = await uploadImage(file);
      reviewToAdd.img = uploadedImg;
    }
    if (title !== "") {
      reviewToAdd.title = title;
    }
    await mutateMakeReview({ id, review: { ...reviewToAdd } });
    setSubmitting(false);
  };

  const chooseFile = ({ target }) => setFile(target.files[0]);

  return (
    <Box mt={2}>
      <Box>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="body1" color="secondary">
              Rate your experience
            </Typography>

            <StarRating {...{ rating, setRating }} />
          </Grid>
          <Grid item>
            <Box textAlign="center">
              <Typography variant="body1" color="secondary">
                Upload a photo
              </Typography>
              <input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                hidden
                onChange={chooseFile}
              />
              <label htmlFor="contained-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera fontSize="large" />
                </IconButton>
              </label>
              {file && <Typography>{file.name}</Typography>}
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1" color="secondary">
            Give your review a title
          </Typography>
          <Box mt={2}>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              fullWidth
              value={title}
              onChange={({ target }) => setTitle(target.value)}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" color="secondary">
            Leave a review
          </Typography>
          <Editor {...{ value, setValue }} />
        </Grid>

        <Grid item>
          <Box>
            {isSubmitting && <LinearProgress />}
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              disabled={isSubmitting}
              onClick={handleReviewSubmit}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Review;

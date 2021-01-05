import { useState } from "react";
import { useMutation } from "react-query";
import ReactQuill from "react-quill";
import { Grid, Box, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "react-quill/dist/quill.snow.css";
import "../styles/quill.css";

const useStyles = makeStyles({
  itemStyle: {
    width: "80%",
  },
});

function Editor() {
  const [value, setValue] = useState("");
  const classes = useStyles();

  return (
    <Box m={4}>
      <Box py={2}>
        <Typography variant="h5" align="center" color="secondary">
          Write a Review
        </Typography>
      </Box>
      <Grid container justify="space-around">
        <Grid item className={classes.itemStyle}>
          <Paper>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Editor;

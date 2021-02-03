import { useState } from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../user-contex";
import { toast } from "react-toastify";

import {
  Paper,
  Box,
  Grid,
  Typography,
  Divider,
  Avatar,
  TableContainer,
  makeStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import Rating from "../Rating";
import DialogBox from "../DialogBox";
import BucketListBtn from "./BucketListBtn";

import { deletePlace } from "../../services/place";

const useStyles = makeStyles({
  paperStyles: {
    padding: "2rem 3rem",
    margin: "1.5rem 0",
  },
  imageStyles: {
    width: "100%",
    height: "auto",
  },
  typographyStyles: {
    padding: "0.5rem 0rem",
  },
});

const PlaceDetailHeader = ({ data }) => {
  const history = useHistory();
  const [{ user: userInfo }] = useAuth();
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [mutateDeletePlace] = useMutation(deletePlace, {
    onSuccess: () => {
      toast.warn("place deleted");
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

  const pushToEdit = () => history.push(`/place/edit/${data.id}`);

  // for dialog
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    mutateDeletePlace(data.id);
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box m={matches ? 4 : 0}>
      <DialogBox
        open={open}
        handleClose={handleClose}
        handleConfirm={handleDelete}
        headerMessage="Delete this Place?"
        bodyMessage="You will not be able to recover this place. Are you sure about this action?"
      />
      <Paper className={classes.paperStyles}>
        <Grid container alignContent="center" spacing={4}>
          <Grid item xs={12} md={6}>
            <img
              src={data.image}
              alt={data.name}
              className={classes.imageStyles}
            />
          </Grid>
          <Grid container item xs={12} md={6} direction="column" spacing={1}>
            <Grid item container direction="column">
              <Grid
                item
                container
                justify="space-between"
                alignItems="center"
                style={{ marginBottom: "1rem" }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    color="primary"
                    className={classes.typographyStyles}
                  >
                    {data.name}
                  </Typography>
                </Box>
                {userInfo && userInfo.user.id === data.author.id && (
                  <Box>
                    <ButtonGroup
                      variant="outlined"
                      color="secondary"
                      aria-label="place action button group"
                    >
                      <Button onClick={pushToEdit}>Edit</Button>
                      <Button onClick={handleClickOpen}>Delete</Button>
                    </ButtonGroup>
                  </Box>
                )}
              </Grid>
              <Box>
                <Divider />
              </Box>
              <Grid
                item
                container
                justify="space-between"
                alignItems="center"
                style={{ margin: "0.5em 0" }}
              >
                <Typography
                  variant="h6"
                  color="textSecondary"
                  className={classes.typographyStyles}
                >
                  {data.type}
                </Typography>
                <BucketListBtn
                  inBucketList={data.inBucketList}
                  placeId={data.id}
                />
              </Grid>

              <Divider style={{ marginBottom: "0.5em" }} />

              <Rating
                rating={data.rating}
                numReviews={data.numReviews}
                fontSize="large"
              />

              <Typography
                variant="subtitle1"
                className={classes.typographyStyles}
              >
                {data.description}
              </Typography>
            </Grid>

            <Grid item>
              <Box display={{ xs: "none", sm: "block" }}>
                <Typography className={classes.typographyStyles}>
                  Created By
                </Typography>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Display Picture</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Created At</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          <Avatar
                            alt={data.author.displayName}
                            src={data.author.displayPicture}
                          />
                        </TableCell>
                        <TableCell>{data.author.displayName}</TableCell>
                        <TableCell>{data.createdAt}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default PlaceDetailHeader;

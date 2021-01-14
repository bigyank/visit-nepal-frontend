import { useHistory } from "react-router-dom";
import { useMutation, queryCache } from "react-query";
import ReactHtmlParser from "react-html-parser";
import { useAuth } from "../../user-contex";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { red } from "@material-ui/core/colors";

import Rating from "../Rating";
import { CardActions, IconButton, Typography } from "@material-ui/core";

import { deleteReview } from "../../services/place";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 300,
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 400,
    },
  },
  media: {
    paddingTop: "56.25%", // 16:9
  },
  icon: {
    color: red[400],
  },
  typo: {
    marginBottom: "0.5rem",
  },
}));

export default function ReviewCard({
  createdAt,
  comment,
  rating,
  img,
  user,
  title,
  placeId,
}) {
  const history = useHistory();
  const [{ user: userInfo }] = useAuth();
  const classes = useStyles();

  const [mutateDeleteReview] = useMutation(deleteReview, {
    onSuccess: () => {
      queryCache.refetchQueries("placeDetail");
    },
    onError: (error) => {
      const errMessage =
        error.response && error.response.data.error
          ? error.response.data.error.message
          : error.message;

      toast.error(errMessage);
    },
  });

  const pointToEdit = () => history.push(`/place/${placeId}/edit/review`);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={user.displayPicture} />}
        title={user.displayName}
        subheader={createdAt}
      />
      {img && (
        <CardMedia
          className={classes.media}
          image={img}
          alt="user img"
          height="140"
        />
      )}
      <CardContent>
        <Rating rating={rating} />
        {title && (
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        )}

        {ReactHtmlParser(comment)}
      </CardContent>
      {userInfo && userInfo.user.id === user.id && (
        <CardActions disableSpacing>
          <IconButton aria-label="edit review" onClick={pointToEdit}>
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete review"
            onClick={() => {
              mutateDeleteReview(placeId);
              toast.warning("review deleted");
            }}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
}

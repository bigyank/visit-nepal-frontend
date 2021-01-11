import ReactHtmlParser from "react-html-parser";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { red } from "@material-ui/core/colors";

import Rating from "../Rating";
import { Typography } from "@material-ui/core";

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
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={user.displayPicture} />}
        action={
          <IconButton aria-label="add to favorites">
            <FavoriteIcon className={classes.icon} />
          </IconButton>
        }
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
    </Card>
  );
}

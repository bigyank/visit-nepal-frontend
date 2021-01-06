import ReactHtmlParser from "react-html-parser";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { red } from "@material-ui/core/colors";

import Rating from "../Rating";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "100%",
  },
  icon: {
    color: red[400],
  },
  typo: {
    marginBottom: "0.5rem",
  },
}));

export default function ReviewCard({ createdAt, comment, rating, user }) {
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
      <CardContent>
        <Rating rating={rating} />
        {ReactHtmlParser(comment)}
      </CardContent>
    </Card>
  );
}

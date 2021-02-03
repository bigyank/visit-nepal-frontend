import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "../Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "400px",
  },

  media: {
    height: 200,
    width: "100%",
    objectFit: "cover",
  },
}));

const BucketCard = ({ data }) => {
  console.log(data);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/place/${data.id}`}>
        <CardHeader title={data.name} subheader={data.type} />
        <CardMedia className={classes.media} image={data.image} />
      </CardActionArea>
      <CardContent>
        <Rating rating={data.rating} numReviews={data.numReviews} />
      </CardContent>
    </Card>
  );
};

export default BucketCard;

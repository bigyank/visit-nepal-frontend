import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Box, CardActionArea } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

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
  icon: {
    color: red[400],
  },
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CardSlider = ({ editorData }) => {
  const classes = useStyles();

  return (
    <Carousel responsive={responsive}>
      {editorData.map((data) => (
        <Box key={data.id} p={2}>
          <Card className={classes.root}>
            <CardActionArea component={Link} to={`/place/${data.id}`}>
              <CardHeader
                title={data.name}
                subheader={data.type}
                action={
                  <IconButton aria-label="settings">
                    <FavoriteIcon className={classes.icon} />
                  </IconButton>
                }
              />
              <CardMedia className={classes.media} image={data.image} />
            </CardActionArea>
            <CardContent>
              <Rating rating={data.rating} numReviews={data.numReviews} />
            </CardContent>
          </Card>
        </Box>
      ))}
    </Carousel>
  );
};

export default CardSlider;

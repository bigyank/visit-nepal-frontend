import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

import pattern from "../../images/pattern.svg";

const useStyles = makeStyles((theme) => ({
  center: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  card: {
    paddingTop: "20px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    width: "90%",
    maxHeight: "550px",
    backgroundImage: `url(${pattern})`,
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
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

const GuideCard = ({ data, userGuide, beGuideHandler, optOutHandler }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box px={4} mt={4}>
      <Typography variant={matches ? "h4" : "h5"}>Guides</Typography>
      <Carousel responsive={responsive}>
        {data.map((guide) => (
          <Box key={guide.id} py={2} ml={2}>
            <Card className={classes.card}>
              <Box className={classes.center}>
                <Avatar
                  alt="Profile Image"
                  src={guide.displayPicture}
                  style={{ height: "90px", width: "90px" }}
                  className={classes.avatar}
                />
              </Box>
              <CardContent>
                <Typography
                  align="center"
                  gutterBottom
                  variant="h5"
                  component="h2"
                  style={{
                    width: "100%",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {guide.displayName}
                </Typography>
                <Typography
                  variant="body2"
                  // color="textSecondary"
                  component="p"
                  align="center"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica. Lizards are a widespread group of squamate
                  reptiles, with over 6,000 species, ranging across all
                  continents except Antarctica. Lizards are a widespread group
                  of squamate reptiles, with over 6,000 species, ranging across.
                </Typography>
              </CardContent>
              <CardActions>
                <Box className={classes.icons}>
                  <IconButton aria-label="add to favorites">
                    <MailIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <InstagramIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <TwitterIcon />
                  </IconButton>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Carousel>
      <Box my={2}>
        {userGuide ? (
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            onClick={optOutHandler}
          >
            Opt Out
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={beGuideHandler}
          >
            Guide this place
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default GuideCard;

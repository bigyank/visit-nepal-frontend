import { useState } from "react";
import { useQuery } from "react-query";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import BucketLayout from "../Components/BucketList/BucketLayout";
import EmptyBucketListPage from "./EmptyBucketListPage";
import LoadingIndicator from "../Components/LoadingIndicator";

import ExploreIcon from "@material-ui/icons/Explore";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import { getAllBucketList } from "../services/bucketlist";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  stickToBottom: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    zIndex: 2,
    maxWidth: 500,
  },
});

const PlaceDetail = () => {
  const classes = useStyles();
  const [value, setValue] = useState("all");
  const [places, setPlaces] = useState([]);

  const { isLoading, data } = useQuery("bucketListItems", getAllBucketList, {
    onSuccess: (data) => setPlaces(data),
  });

  const handleChange = (_event, newValue) => {
    setValue(newValue);
    if (newValue === "all") return setPlaces(data);
    const filteredPlaces = data.filter((place) => place.status === newValue);
    setPlaces(filteredPlaces);
  };

  if (isLoading || !data) return <LoadingIndicator />;

  if (data.length === 0) return <EmptyBucketListPage />;

  return (
    <Box>
      <Box mb={8}>
        <BucketLayout bucketListItems={places} />
      </Box>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.stickToBottom}
      >
        <BottomNavigationAction
          label="All"
          value="all"
          icon={<ExploreIcon />}
        />
        <BottomNavigationAction
          label="complete"
          value={true}
          icon={<CheckCircleOutlineIcon />}
        />
        <BottomNavigationAction
          label="incomplete"
          value={false}
          icon={<HighlightOffIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default PlaceDetail;

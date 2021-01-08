import { useQuery } from "react-query";
import Cards from "./CardSlider";
import { getBestDestinations } from "../../services/place";
import { Box, Typography } from "@material-ui/core";

const BestDestination = () => {
  const { isLoading, data, isError } = useQuery(
    "bestDestination",
    getBestDestinations
  );

  if (isLoading) return null;
  if (isError) return null;

  return (
    <Box mb={4}>
      <Box px={2}>
        <Typography variant="h5">Top Rated Destinations</Typography>
      </Box>
      <Cards editorData={data} />
    </Box>
  );
};

export default BestDestination;

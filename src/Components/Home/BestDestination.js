import { useQuery } from "react-query";
import Cards from "./CardSlider";
import { getBestDestinations } from "../../services/place";
import { Box, CircularProgress, Typography } from "@material-ui/core";

const BestDestination = () => {
  const { isLoading, data, isError } = useQuery(
    "bestDestination",
    getBestDestinations
  );

  if (isLoading)
    return (
      <div
        style={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
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

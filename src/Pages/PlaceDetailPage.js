import { useQuery } from "react-query";
import { CircularProgress } from "@material-ui/core";
import PlaceDetailHeader from "../Components/PlaceDetailHeader";
import { getPlaceDetail } from "../services/place";

const PlaceDetail = ({ match }) => {
  const { id } = match.params;

  const { isLoading, data } = useQuery(["placeDetail", id], getPlaceDetail, {
    retry: false,
  });

  if (isLoading) return <CircularProgress />;

  return (
    <>
      <PlaceDetailHeader data={data} />
    </>
  );
};

export default PlaceDetail;

import { useQuery } from "react-query";
import { CircularProgress } from "@material-ui/core";
import PlaceDetailHeader from "../Components/PlaceDetailHeader";
import PlaceDetailMap from "../Components/PlaceDetailMap";
import Review from "../Components/ReviewList/Review";
import { getPlaceDetail } from "../services/place";

const PlaceDetail = ({ match }) => {
  const { id } = match.params;

  const { isLoading, data } = useQuery(["placeDetail", id], getPlaceDetail, {
    retry: false,
  });

  if (isLoading) return <CircularProgress />;
  if (!data) return <CircularProgress />;

  return (
    <>
      <PlaceDetailHeader data={data} />
      <PlaceDetailMap location={data.location} />
      <Review reviews={data.reviews} id={id} />
    </>
  );
};

export default PlaceDetail;

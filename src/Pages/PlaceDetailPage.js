import { useQuery } from "react-query";

import PlaceDetailHeader from "../Components/PlaceDetailHeader";
import PlaceDetailMap from "../Components/PlaceDetailMap";
import Review from "../Components/ReviewList/Review";

import { getPlaceDetail } from "../services/place";

import LoadingIndicator from "../Components/LoadingIndicator";

const PlaceDetail = ({ match }) => {
  const { id } = match.params;

  const { isLoading, data } = useQuery(["placeDetail", id], getPlaceDetail);

  if (isLoading || !data) return <LoadingIndicator />;

  return (
    <>
      <PlaceDetailHeader data={data} />
      <PlaceDetailMap location={data.location} />
      <Review reviews={data.reviews} id={id} />
    </>
  );
};

export default PlaceDetail;

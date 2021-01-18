import { useQuery, useMutation, queryCache } from "react-query";
import { toast } from "react-toastify";

import PlaceDetailHeader from "../Components/PlaceDetail/PlaceDetailHeader";
import PlaceDetailMap from "../Components/PlaceDetail/PlaceDetailMap";
import NoGuide from "../Components/PlaceDetail/NoGuide";
import Review from "../Components/ReviewList/Review";
import LoadingIndicator from "../Components/LoadingIndicator";
import GuideCard from "../Components/PlaceDetail/GuideCard";

import { getPlaceDetail } from "../services/place";
import { guidePlace, guideOptOut } from "../services/guide";

const PlaceDetail = ({ match }) => {
  const { id } = match.params;

  const { isLoading, data } = useQuery(["placeDetail", id], getPlaceDetail);

  const [beGuideMutation] = useMutation(guidePlace, {
    onSuccess: () => {
      queryCache.refetchQueries("placeDetail");
      toast.success("you are now a guide");
    },
    onError: (error) => {
      const errMessage =
        error.response && error.response.data.error
          ? error.response.data.error.message
          : error.message;

      toast.error(errMessage);
    },
  });

  const [guideOptOutMutation] = useMutation(guideOptOut, {
    onSuccess: () => {
      queryCache.refetchQueries("placeDetail");
      toast.warning("you are removed as a guide");
    },
    onError: (error) => {
      const errMessage =
        error.response && error.response.data.error
          ? error.response.data.error.message
          : error.message;

      toast.error(errMessage);
    },
  });

  const beGuideHandler = () => beGuideMutation(data.id);
  const optOutHandler = () => guideOptOutMutation(data.id);

  if (isLoading || !data) return <LoadingIndicator />;

  console.log(data);
  return (
    <>
      <PlaceDetailHeader data={data} />
      <PlaceDetailMap location={data.location} />
      {data.guides.length === 0 && <NoGuide beGuideHandler={beGuideHandler} />}
      <GuideCard
        data={data.guides}
        userGuide={data.userGuide}
        beGuideHandler={beGuideHandler}
        optOutHandler={optOutHandler}
      />
      <Review reviews={data.reviews} id={id} />
    </>
  );
};

export default PlaceDetail;

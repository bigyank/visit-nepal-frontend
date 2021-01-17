import { useQuery, useMutation } from "react-query";
import { toast } from "react-toastify";

import PlaceDetailHeader from "../Components/PlaceDetail/PlaceDetailHeader";
import PlaceDetailMap from "../Components/PlaceDetail/PlaceDetailMap";
import NoGuide from "../Components/PlaceDetail/NoGuide";
import Review from "../Components/ReviewList/Review";
import LoadingIndicator from "../Components/LoadingIndicator";
import GuideCard from "../Components/PlaceDetail/GuideCard";

import { getPlaceDetail } from "../services/place";
import { beGuide } from "../services/guide";

const PlaceDetail = ({ match }) => {
  const { id } = match.params;

  const { isLoading, data } = useQuery(["placeDetail", id], getPlaceDetail);

  const [beGuideMutation] = useMutation(beGuide, {
    onSuccess: () => {
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

  const beGuideHnadler = () => beGuideMutation(data.id);

  if (isLoading || !data) return <LoadingIndicator />;

  console.log(data);
  return (
    <>
      <PlaceDetailHeader data={data} />
      <PlaceDetailMap location={data.location} />
      {data.guides.length === 0 && <NoGuide beGuideHnadler={beGuideHnadler} />}
      <GuideCard data={data.guides} />
      <Review reviews={data.reviews} id={id} />
    </>
  );
};

export default PlaceDetail;

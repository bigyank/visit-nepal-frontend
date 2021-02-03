import { useQuery } from "react-query";

import BucketLayout from "../Components/BucketList/BucketLayout";
import EmptyBucketListPage from "./EmptyBucketListPage";
import LoadingIndicator from "../Components/LoadingIndicator";

import { getAllBucketList } from "../services/bucketlist";

const PlaceDetail = () => {
  const { isLoading, data } = useQuery("bucketListItems", getAllBucketList);

  if (isLoading || !data) return <LoadingIndicator />;

  console.log(data);
  if (data.length === 0) return <EmptyBucketListPage />;

  return <BucketLayout bucketListItems={data} />;
};

export default PlaceDetail;

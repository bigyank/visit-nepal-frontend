import { IconButton } from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { useMutation, queryCache } from "react-query";
import { toast } from "react-toastify";

import {
  addPlaceToBucketList,
  removePlaceFromBucketList,
} from "../../services/bucketlist";

const BucketListBtn = ({ inBucketList, placeId }) => {
  const [mutateAddToBucket] = useMutation(addPlaceToBucketList, {
    onSuccess: () => {
      queryCache.refetchQueries("placeDetail");
      toast.success("place added to bucketlist");
    },
    onError: (error) => {
      const errMessage =
        error.response && error.response.data.error
          ? error.response.data.error.message
          : error.message;

      toast.error(errMessage);
    },
  });

  const [mutateRemoveFromBucket] = useMutation(removePlaceFromBucketList, {
    onSuccess: () => {
      queryCache.refetchQueries("placeDetail");
      toast.warn("place removed from bucketlist");
    },
    onError: (error) => {
      const errMessage =
        error.response && error.response.data.error
          ? error.response.data.error.message
          : error.message;

      toast.error(errMessage);
    },
  });

  if (inBucketList) {
    return (
      <IconButton
        color="primary"
        aria-label="add to bucketlist"
        onClick={() => mutateRemoveFromBucket(placeId)}
      >
        <BookmarkIcon style={{ fontSize: "35px" }} />
      </IconButton>
    );
  }

  return (
    <IconButton
      color="primary"
      aria-label="add to bucketlist"
      onClick={() => mutateAddToBucket(placeId)}
    >
      <BookmarkBorderIcon style={{ fontSize: "35px" }} />
    </IconButton>
  );
};

export default BucketListBtn;

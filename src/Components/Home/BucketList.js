import AlternateCard from "../AlternateCard";

import img from "../../images/bucket.svg";
const title = "Create your bucketlist";
const body =
  "Add destinations to you bucketlist and customize your travelling experience";
const btn = "Checkout Bucketlist";
const btnLink = "/bucketlist";

const BucketList = () => {
  return <AlternateCard {...{ img, title, body, btn, btnLink }} />;
};

export default BucketList;

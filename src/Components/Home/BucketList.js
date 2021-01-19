import AlternateCard from "../AlternateCard";

import img from "../../images/bucket.svg";
const title = "Want to be a Guide?";
const body = "Be a guide and share what you have in you";
const btn = "Be a Guide";
const btnLink = "/beguide";

const BucketList = () => {
  return <AlternateCard {...{ img, title, body, btn, btnLink }} />;
};

export default BucketList;

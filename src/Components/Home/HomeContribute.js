import AlternateCard from "../AlternateCard";

import img from "../../images/map.png";
const title = "Start sharing your travel ideas";
const body =
  "Create a Destination to save and share all of your travel destinations, and see them on a map";
const btn = "Create a Destination";
const btnLink = "/contribute";
const dir = "row-reverse";

const HomeContribute = () => {
  return <AlternateCard {...{ img, title, body, btn, btnLink, dir }} />;
};

export default HomeContribute;

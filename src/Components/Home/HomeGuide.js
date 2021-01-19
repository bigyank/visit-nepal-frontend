import AlternateCard from "../AlternateCard";

import img from "../../images/guide.png";
const title = "Want to be a Guide?";
const body = "Be a guide and share what you have in you";
const btn = "Be a Guide";
const btnLink = "/beguide";

const HomeGuide = () => {
  return <AlternateCard {...{ img, title, body, btn, btnLink }} />;
};

export default HomeGuide;

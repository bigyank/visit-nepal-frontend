import { Box } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import HeaderSearch from "../Components/Home/HeaderSearch";
import HomeContribute from "../Components/Home/HomeContribute";
import HomeGuide from "../Components/Home/HomeGuide";
import EditorChoice from "../Components/Home/EditorChoice";
import BestDestination from "../Components/Home/BestDestination";

const Home = () => {
  const theme = useTheme();
  const smMatch = useMediaQuery(theme.breakpoints.up("sm"));
  const mdMatch = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box mx={smMatch ? 4 : 1.5} my={8}>
      <HeaderSearch smMatch={smMatch} mdMatch={mdMatch} />
      <EditorChoice />
      <HomeContribute />
      <HomeGuide />
      <BestDestination />
    </Box>
  );
};

export default Home;

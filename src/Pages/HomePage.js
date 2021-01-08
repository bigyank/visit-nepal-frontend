import { Box } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import HeaderSearch from "../Components/Home/HeaderSearch";
import HomeContribute from "../Components/Home/HomeContribute";

const Home = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box mx={matches ? 4 : 1.5} my={8}>
      <HeaderSearch matches={matches} />
      <HomeContribute />
    </Box>
  );
};

export default Home;

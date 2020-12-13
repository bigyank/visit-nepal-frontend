import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();

  useEffect(() => {
    history.push("/login");
  }, [history]);

  return null;
};

export default Home;

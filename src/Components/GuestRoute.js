import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { useAuth } from "../user-contex";

const GuestRoute = ({ component: Component, ...rest }) => {
  const [userState, userDispatch] = useAuth();

  // set query according to the user contex
  const { error, isLoading, data, refetch } = useQuery(
    "fetchUsers",
    async () => (await axios("/api/user", { withCredentials: true })).data,
    { retry: false, enabled: !userState.user }
  );

  // only fetch user if user is null in user contex
  useEffect(() => {
    if (!userState.user) {
      refetch();
    }
  }, [userState, refetch]);

  // after sucessful fetch update the user contex
  useEffect(() => {
    if (data) {
      userDispatch({ type: "login", payload: data });
    }
  }, [data, userDispatch]);

  // redirect if user fetching fails
  // return null instead of loading screen
  return (
    <Route
      {...rest}
      render={() => {
        if (isLoading) return null;
        if (error) return <Component />;
        if (data) return <Redirect to="/" />;
      }}
    />
  );
};

export default GuestRoute;

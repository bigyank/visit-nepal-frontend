import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { useAuth } from "../user-contex";

export const AuthRoute = ({ component: Component, ...rest }) => {
  const [userState, userDispatch] = useAuth();

  // set query according to the user contex
  const { error, isLoading, data, refetch } = useQuery(
    "fetchUsers",
    async () => await axios("/api/user", { withCredentials: true }),
    { retry: false, enabled: !userState.user }
  );

  // only fetch user if user is null in user contex
  useEffect(() => {
    if (!userState.user) {
      // refetch user
      refetch();
    }
  }, [userState, refetch]);

  // after sucessful fetch update the user contex
  useEffect(() => {
    if (data) {
      userDispatch({ type: "login", payload: data });
    }
  }, [data, userDispatch]);

  // if there is user in contex then render component
  if (userState.user) {
    return <Route {...rest} component={Component} />;
  }

  // redirect if user fetching fails
  // return null instead of loading screen
  return (
    <Route
      {...rest}
      render={() => {
        if (isLoading) return null;
        if (error) return <Redirect to="/login" />;
      }}
    />
  );
};

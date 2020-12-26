import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { useAuth } from "../user-contex";

const AuthRoute = ({ component: Component, ...rest }) => {
  const [{ user }, userDispatch] = useAuth();

  // turned off by default, manual refetch is needed
  const { error, isLoading, data, refetch } = useQuery(
    "fetchUsers",
    async () => (await axios("/api/user", { withCredentials: true })).data,
    { retry: false }
  );

  // // go to auth route if user is present
  // useEffect(() => {
  //   if (user) {
  //     console.log("here");
  //     <Route {...rest} component={Component} />;
  //   }
  // }, [user, refetch, Component, rest]);

  // // only fetch user if user is null in user contex
  // useEffect(() => {
  //   if (!user) {
  //     refetch();
  //   }
  // }, [user, refetch]);

  // // after sucessful fetch update the user contex
  // useEffect(() => {
  //   if (data) {
  //     userDispatch({ type: "login", payload: data });
  //   }
  // }, [data, userDispatch]);

  // redirect if user fetching fails
  // return null instead of loading screen
  return (
    <Route
      {...rest}
      render={() => {
        if (isLoading) return null;
        if (error) return <Redirect to="/login" />;
        if (data) return <Route {...rest} component={Component} />;
      }}
    />
  );
};

export default AuthRoute;

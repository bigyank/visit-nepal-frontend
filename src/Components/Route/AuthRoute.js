import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useQuery } from "react-query";

import { useAuth } from "../../user-contex";
import { getUser } from "../../services/user";

import LoadingIndicator from "../LoadingIndicator";

const AuthRoute = ({ component: Component, ...rest }) => {
  const [userState, userDispatch] = useAuth();

  // turned off by default, manual refetch is needed
  const { error, isLoading, data, refetch } = useQuery("fetchUsers", getUser, {
    retry: false,
    enabled: false,
  });

  // only fetch user if user is null in user contex
  useEffect(() => {
    if (!userState.user) {
      refetch();
    }
  }, [userState, refetch]);

  // after sucessful fetch update the user contex
  useEffect(() => {
    if (data) {
      userDispatch({ type: "login", payload: { user: data } });
    }
  }, [data, userDispatch]);

  return (
    <Route
      {...rest}
      render={() => {
        if (isLoading) return <LoadingIndicator />;
        if (error) return <Redirect to="/login" />;
        return <Route {...rest} component={Component} />;
      }}
    />
  );
};

export default AuthRoute;

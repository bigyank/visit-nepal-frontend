import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useQuery } from "react-query";

import { useAuth } from "../../user-contex";
import { getUser } from "../../services/user";

import LoadingIndicator from "../LoadingIndicator";

const GuestRoute = ({ component: Component, ...rest }) => {
  const [, userDispatch] = useAuth();
  const { error, isLoading, data } = useQuery("fetchUsers", getUser, {
    retry: false,
  });

  useEffect(() => {
    if (error) {
      userDispatch({ type: "login", payload: { user: false } });
    }
  }, [error, userDispatch]);

  return (
    <Route
      {...rest}
      render={() => {
        if (isLoading) return <LoadingIndicator />;
        if (data) return <Redirect to="/" />;
        if (error) return <Route {...rest} component={Component} />;
      }}
    />
  );
};

export default GuestRoute;

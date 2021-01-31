import { useEffect } from "react";
import ReactGA from "react-ga";
import { Route, Redirect, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { useAuth } from "../../user-contex";

import LoadingIndicator from "../LoadingIndicator";

import { getUser } from "../../services/user";

const AuthRoute = ({ component: Component, ...rest }) => {
  const [, userDispatch] = useAuth();
  const history = useHistory();

  useEffect(() => {
    history.listen((location) => {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    });
  }, [history]);

  // turned off by default, manual refetch is needed
  const { error, isLoading, data } = useQuery("fetchUsers", getUser, {
    retry: false,
    // enabled: false,
  });

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

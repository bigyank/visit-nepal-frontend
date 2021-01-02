import { Route, Redirect } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const AuthRoute = ({ component: Component, ...rest }) => {
  // turned off by default, manual refetch is needed
  const { error, isLoading, data } = useQuery(
    "fetchUsers",
    async () => (await axios("/api/user", { withCredentials: true })).data,
    { retry: false }
  );

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

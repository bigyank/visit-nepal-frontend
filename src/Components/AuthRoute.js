import { Route, Redirect } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

export const AuthRoute = ({ component: Component, ...rest }) => {
  const { error, isSuccess, isLoading } = useQuery(
    "fetchUsers",
    async () => await axios("/api/user", { withCredentials: true }),
    { retry: false }
  );

  return (
    <Route
      {...rest}
      render={() => {
        if (isLoading) return null;
        if (error) return <Redirect to="/login" />;
        if (isSuccess) return <Component />;
      }}
    />
  );
};

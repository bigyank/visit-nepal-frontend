import { CircularProgress } from "@material-ui/core";

const LoadingIndicator = () => {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default LoadingIndicator;

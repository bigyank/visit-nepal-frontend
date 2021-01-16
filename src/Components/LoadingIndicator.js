import traveller from "../images/traveler.gif";

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
      <img
        src={traveller}
        style={{ width: "auto", height: "200px" }}
        alt="traveller"
      />
    </div>
  );
};

export default LoadingIndicator;

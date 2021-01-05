import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Box, Paper } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const PlaceDetailMap = ({ location }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box m={matches ? 4 : 0}>
      <Paper>
        <MapContainer
          style={{ height: "40vh", width: "100%" }}
          center={location}
          zoom={16}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
            url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAPBOX_USERNAME}/${process.env.REACT_APP_MAPBOX_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`}
          />
          <Marker position={location} />
        </MapContainer>
      </Paper>
    </Box>
  );
};

export default PlaceDetailMap;

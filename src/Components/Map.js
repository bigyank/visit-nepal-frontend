import { Link as RouterLink } from "react-router-dom";
import { useQuery } from "react-query";
import { CircularProgress, Link } from "@material-ui/core";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import { getAllPlaces } from "../services/place";

const Map = () => {
  function SetViewOnClick() {
    const map = useMapEvent("click", (e) => {
      map.setView(e.latlng, map.getZoom(), {
        animate: true,
      });
    });

    return null;
  }

  const { isLoading, data } = useQuery("places", getAllPlaces, {
    retry: false,
  });

  if (isLoading) return <CircularProgress />;

  // seems like data becomes undefined just for a second after login
  if (!data) return <CircularProgress />;

  return (
    <div>
      <MapContainer
        style={{ height: "90vh", width: "100%" }}
        center={[27.7172, 85.324]}
        zoom={13}
      >
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAPBOX_USERNAME}/${process.env.REACT_APP_MAPBOX_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`}
        />
        {data.map((info, index) => (
          <Marker key={index} position={info.location}>
            <Popup>
              <div style={{ width: "250px", height: "auto" }}>
                <h2>{info.name}</h2>
                <h4>{info.type}</h4>
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={info.image}
                  alt={info.name}
                />
                <p>{info.description}</p>
                <p>
                  <Link component={RouterLink} to={`/place/${info.id}`}>
                    View
                  </Link>
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
        <SetViewOnClick />
      </MapContainer>
    </div>
  );
};

export default Map;

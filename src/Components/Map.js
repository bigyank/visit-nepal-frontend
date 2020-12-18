import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import data from "../data.json";

const Map = () => {
  function SetViewOnClick() {
    const map = useMapEvent("click", (e) => {
      map.setView(e.latlng, map.getZoom(), {
        animate: true,
      });
    });

    return null;
  }

  return (
    <div>
      <MapContainer
        style={{ height: "90vh", width: "100%" }}
        center={[27.7172, 85.324]}
        zoom={13}
      >
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url="https://api.mapbox.com/styles/v1/notauser/ckiu5pj582km519s3ey4hwl1b/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoibm90YXVzZXIiLCJhIjoiY2tpdTVydzB6MnV0dDJxbGIyczBlaHB1dCJ9.xlDmN1f-Pec6BoR6PQywTg"
        />
        {data.map((info, index) => (
          <Marker key={index} position={[info.lat, info.lon]}>
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
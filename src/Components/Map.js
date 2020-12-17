import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../styles/map.css";
import data from "../data.json";

const Map = () => {
  return (
    <div>
      <MapContainer
        center={[27.7172, 85.324]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
      </MapContainer>
    </div>
  );
};

export default Map;

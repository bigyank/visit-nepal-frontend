import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../styles/map.css";

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
        <Marker position={[27.712, 85.324]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

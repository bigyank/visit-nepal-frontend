import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "../styles/map.css";

const ContributeMap = () => {
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
      },
    });

    return position === null ? null : <Marker position={position}></Marker>;
  }

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
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default ContributeMap;

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvent } from "react-leaflet";

const ContributeMap = ({ setValues, values, location, setLocation }) => {
  const [position, setPosition] = useState([27.7172, 85.324]);

  useEffect(() => {
    setValues({ ...values, location: position });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  function LocationMarker() {
    useMapEvent("click", (e) => {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
    });

    return <Marker position={position}></Marker>;
  }

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
        style={{ height: "40vh", width: "100%" }}
        center={position}
        zoom={13}
      >
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url="https://api.mapbox.com/styles/v1/notauser/ckiu5pj582km519s3ey4hwl1b/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoibm90YXVzZXIiLCJhIjoiY2tpdTVydzB6MnV0dDJxbGIyczBlaHB1dCJ9.xlDmN1f-Pec6BoR6PQywTg"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default ContributeMap;

// mapbox://styles/notauser/ckiu5pj582km519s3ey4hwl1b
// pk.eyJ1Ijoibm90YXVzZXIiLCJhIjoiY2tpdTVydzB6MnV0dDJxbGIyczBlaHB1dCJ9.xlDmN1f-Pec6BoR6PQywTg
// https://api.mapbox.com/styles/v1/notauser/ckiu5pj582km519s3ey4hwl1b/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoibm90YXVzZXIiLCJhIjoiY2tpdTVydzB6MnV0dDJxbGIyczBlaHB1dCJ9.xlDmN1f-Pec6BoR6PQywTg

// https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png

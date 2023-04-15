import { useState } from "react";
import { MapContainer, TileLayer, Marker, Polygon } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./style.css";

function Establishments() {
  const [polygonCoords, setPolygonCoords] = useState([]);
  const [markerCoords, setMarkerCoords] = useState([-14.85, -40.8399]);

  function handleMapClick(e) {
    setMarkerCoords([e.latlng.lat, e.latlng.lng]);
    setPolygonCoords([...polygonCoords, [e.latlng.lat, e.latlng.lng]]);
  }

  return (
    <div className="map-container">
      <MapContainer
        center={markerCoords}
        zoom={13}
        scrollWheelZoom={false}
        onClick={handleMapClick}
        style={{ height: "500px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={markerCoords} />
        {polygonCoords.length > 0 && (
          <Polygon positions={[...polygonCoords, polygonCoords[0]]} />
        )}
      </MapContainer>
    </div>
  );
}

export default Establishments;

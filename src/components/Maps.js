import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import customIcon from "./Icon";
import "../styles/map.scss";
import { useEffect, useMemo, useState } from "react";

export default function Maps({ data }) {
  if (data) {
    let position = [data.location.lat, data.location.lng];
    let ip = data.ip;
    return <MapContent position={position} ip={ip} />;
  }
  return <MapContent position={[0, 10]} ip={null} noMark />;
}

function MapContent({ position, ip, noMark }) {
  const [map, setMap] = useState(null);

  // re-render map when ip data changed
  useEffect(() => {
    if (map) map.setView(position, 13);
  }, [map, position]);

  const displayMap = useMemo(
    () => (
      <MapContainer
        id="map"
        center={position}
        zoom={13}
        zoomControl={false}
        ref={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {!noMark && (
          <Marker position={position} icon={customIcon}>
            <Popup>{ip}</Popup>
          </Marker>
        )}
      </MapContainer>
    ),
    [ip, position, noMark]
  );
  return displayMap;
}

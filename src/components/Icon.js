import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "/images/icon-location.svg",
  iconRetinaUrl: "/images/icon-location.svg",
  popupAnchor: [-0, -56],
  iconAnchor: [23, 56],
  // iconSize: [32, 45],
});

export default customIcon;

import { Icon, type LatLngExpression } from "leaflet";
import type { FC } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapPage.css";
import iconImg from "../../assets/icon.png";
import { useOutletContext } from "react-router";
import useEmployeeMarker from "./useEmployeeMarker";
import type { employee } from "../../modules";

const ISRAEL_COORDINATES: LatLngExpression = { lat: 31.4061, lng: 34.8516 };
const MAP_ZOOM = 8;

const icon = new Icon({
  iconUrl: iconImg,
  iconSize: [38, 38],
});

export const MapPage: FC = () => {
  const employees: employee[] = useOutletContext();
  const { markers } = useEmployeeMarker(employees);

  return (
    <MapContainer center={ISRAEL_COORDINATES} zoom={MAP_ZOOM}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers?.map((marker) => (
        <Marker position={marker.position} icon={icon}>
          <Popup>{marker.popup}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

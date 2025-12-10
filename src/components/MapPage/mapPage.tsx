import { Icon, type LatLngExpression } from "leaflet";
import type { FC } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapPage.css";
import iconImg from "../../assets/icon.png";
import { useLoaderData } from "react-router";
import useEmployeeMarker from "./useEmployeeMarker";

const ISRAEL_CORDINETS: LatLngExpression = [31.4061, 34.8516];
const MAP_ZOOM = 8;

const icon = new Icon({
  iconUrl: iconImg,
  iconSize: [38, 38],
});

export const MapPage: FC = () => {
  const employees = useLoaderData();
  const { markers } = useEmployeeMarker(employees);

  return (
    <MapContainer center={ISRAEL_CORDINETS} zoom={MAP_ZOOM}>
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

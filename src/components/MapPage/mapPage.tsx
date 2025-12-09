import type { LatLngExpression } from "leaflet";
import type { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapPage.css";

const ISRAEL_CORDINETS: LatLngExpression = [31.4061, 34.8516];
const MAP_ZOOM = 8;

const MapPage: FC = () => {
  return (
    <MapContainer center={ISRAEL_CORDINETS} zoom={MAP_ZOOM}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default MapPage;

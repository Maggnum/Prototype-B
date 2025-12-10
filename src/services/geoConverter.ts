import axios from "axios";
import type { LatLngExpression } from "leaflet";

const geoApi = axios.create({
  baseURL: "https://api.api-ninjas.com/v1/city",
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": "65i/KhSGhz8f5qrRkK4wTg==6rMi0BQXKjMKEtk5",
  },
});

export const fetchPosition = async (
  city: string
): Promise<LatLngExpression> => {
  const { data } = await geoApi.get(`?name=${city}`);
  return [data[0].latitude, data[0].longitude];
};

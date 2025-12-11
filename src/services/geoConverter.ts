import axios from "axios";
import type { LatLngExpression } from "leaflet";

const geoApi = axios.create({
  baseURL: "https://api.api-ninjas.com/v1/city",
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": "kqby8OllyXMAB0Hbj/hUXg==kUtCt9YxTXMiT20K",
  },
});

export const fetchPosition = async (
  city: string
): Promise<LatLngExpression> => {
  const { data } = await geoApi.get(`?name=${city}`);
  return { lat: data[0].latitude, lng: data[0].longitude };
};

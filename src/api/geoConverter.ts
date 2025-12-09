import type { LatLngExpression } from "leaflet";
import { geoApi } from "./client";

export const fetchPosition = async (
  city: string
): Promise<LatLngExpression> => {
  const { data } = await geoApi.get(`?name=${city}`);
  return [data[0].latitude, data[0].longitude];
};

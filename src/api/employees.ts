import { api } from "./client";

export const fetchEmployees = async () => {
  const { data } = await api.get("/employees");
  return data;
};

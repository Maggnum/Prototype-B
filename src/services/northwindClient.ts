import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchEmployees = async () => {
  const { data } = await api.get("/employees");
  return data;
};

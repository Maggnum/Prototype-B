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

export const geoApi = axios.create({
  baseURL: "https://api.api-ninjas.com/v1/city",
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": "65i/KhSGhz8f5qrRkK4wTg==6rMi0BQXKjMKEtk5",
  },
});

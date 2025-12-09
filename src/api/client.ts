import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3030/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const geoApi = axios.create({
  baseURL: "https://api.api-ninjas.com/v1/city",
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": "65i/KhSGhz8f5qrRkK4wTg==6rMi0BQXKjMKEtk5",
  },
});

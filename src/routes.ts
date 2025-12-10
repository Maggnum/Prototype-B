import { createBrowserRouter } from "react-router";
import { fetchEmployees } from "./api";
import { Homepage } from "./components/Homepage/homepage";
import { App } from "./App";
import { EmployeesPage } from "./components/EmployeesPage/employeesPage";
import { MapPage } from "./components/MapPage/mapPage";

const route = {
  path: "/",
  Component: App,
  children: [
    {
      path: "/",
      Component: Homepage,
    },
    {
      path: "/employees",
      Component: EmployeesPage,
      loader: fetchEmployees,
    },
    {
      path: "/map",
      Component: MapPage,
      loader: fetchEmployees,
    },
  ],
};

const router = createBrowserRouter([route]);

export default router;

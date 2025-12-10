import { createBrowserRouter } from "react-router";
import { Homepage } from "./components/Homepage/homepage";
import { App } from "./App";
import { EmployeesPage } from "./components/EmployeesPage/employeesPage";
import { fetchEmployees } from "./services";
import { ErrorPage } from "./components/ErrorPage/errorPage";
import { LoadingPage } from "./components/LoadingPage copy/loadingPage";
import { MapPage } from "./components/MapPage/mapPage";

const route = {
  path: "/",
  Component: App,
  children: [
    { index: true, Component: Homepage },
    {
      path: "employees",
      Component: LoadingPage,
      loader: fetchEmployees,
      ErrorBoundary: ErrorPage,
      children: [
        {
          index: true,
          Component: EmployeesPage,
        },
      ],
    },
    {
      path: "/map",
      Component: MapPage,
      loader: fetchEmployees,
      ErrorBoundary: ErrorPage,
      children: [
        {
          index: true,
          Component: EmployeesPage,
        },
      ],
    },
  ],
};

export const router = createBrowserRouter([route]);

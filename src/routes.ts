import {
  createBrowserRouter,
  // UNSAFE_WithHydrateFallbackProps,
} from "react-router";
import Homepage from "./components/Homepage/homepage";
import App from "./App";
import EmployeesPage from "./components/EmployeesPage/employeesPage";
import { fetchEmployees } from "./api";

const route = {
  path: "/",
  Component: App,
  children: [
    { path: "/", Component: Homepage },
    {
      path: "/employees",
      Component: EmployeesPage,
      loader: fetchEmployees,
    },
  ],
};

const router = createBrowserRouter([route]);

export default router;

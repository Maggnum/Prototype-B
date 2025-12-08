import { createBrowserRouter } from "react-router";
import Homepage from "./components/Homepage/homepage";
import App from "./App";

const route = {
  path: "/",
  Component: App,
  children: [{ index: true, Component: Homepage }],
};

const router = createBrowserRouter([route]);

export default router;

import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar/navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar/navbar";
import type { FC } from "react";

export const App: FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

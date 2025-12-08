import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;

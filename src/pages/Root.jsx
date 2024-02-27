import { Outlet } from "react-router-dom/dist";
import Nav from "../components/Nav";
export default function Root() {
  return (
    <>
      <Nav/>
      <Outlet />
    </>
  );
}

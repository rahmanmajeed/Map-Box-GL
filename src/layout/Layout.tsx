import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Sidebar from "../components/shared/Sidebar";

export default function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
}

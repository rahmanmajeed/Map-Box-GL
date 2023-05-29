import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Sidebar from "../components/shared/Sidebar";

export default function Layout() {
  return (
    <div id="container">
      <Sidebar />
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="area-list-wrapper">jfkdjfd</div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

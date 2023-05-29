import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <aside>
        <div className="sidebar-container">
          <div className="logo-box">
            <img src="./logo.png" alt="logo" className="logo" />
          </div>
          <div className="sidebar-links">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </aside>
    </>
  );
}

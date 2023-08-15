import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navcontainer">
      <NavLink className="nav_item" a to="/">
        DashBoard
      </NavLink>
      <NavLink className="nav_item" to="/department">
        DepartMent
      </NavLink>
      <NavLink className="nav_item" to="/products">
        Product
      </NavLink>
    </nav>
  );
}

import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">ProductShop</NavLink>
        </li>
        <li>
          <NavLink to="/product">Products</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

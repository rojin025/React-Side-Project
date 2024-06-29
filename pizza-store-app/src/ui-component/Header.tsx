import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Pizza Co.</Link>
      <SearchOrder />

      <p>Rojin</p>
    </header>
  );
}

export default Header;

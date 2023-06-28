import { Link, NavLink } from "react-router-dom";
import { BiSearchAlt, BiLogoReact } from "react-icons/bi";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav>
        <div className="navigation_bar">
          <div className="logo">
            <Link>
              <BiLogoReact className="Link" />
            </Link>
          </div>
          <ul className="links">
            <li>
              <NavLink to={"/"} className={"Navlink"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} className={"Navlink"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} className={"Navlink"}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} className={"Navlink"}>
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} className={"Navlink"}>
                Contacts
              </NavLink>
            </li>
          </ul>
          <div>
            <form action="" method="post">
              <input type="text" placeholder="Search Products here ..." />
              <button className="button_style">
                <BiSearchAlt className="button_logo" />
              </button>
            </form>
            <AiOutlineShoppingCart />
          </div>
          <div className="cart_div"></div>
          <div className="toggle_button">
            <HiMiniBars3CenterLeft />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

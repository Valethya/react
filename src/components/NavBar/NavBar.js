import React, { useContext, useState } from "react";
import CartWidget from "./CartWidget";
import Badge from "../Badge/Badge";
import { Menu } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import NavSide from "./NavSide";

// const pages = ["Plush", "Poleras", "Blog"];

function NavBar() {
  const { cart } = useContext(cartContext);
  let inCart = cart.length;

  const [show, setShow] = useState("none");

  function handleClick() {
    show === "none" ? setShow("block") : setShow("none");
  }

  return (
    <div className="navBar">
      <nav>
        <Menu className="hamburger-menu" onClick={handleClick} />
        <Link to="/react">
          <h1 className="logo">Omori Store</h1>
        </Link>

        <ul>
          <li>
            <Link to="/category/plush">Plush</Link>
          </li>
          <li>
            <Link to="/category/poleras">poleras</Link>
          </li>

          <li>
            <Link to="#">
              <CartWidget />
              {inCart > 0 && <Badge />}
            </Link>
          </li>
        </ul>
        <Link to="#" className="cartWidget">
          <CartWidget />
          {inCart > 0 && <Badge />}
        </Link>
      </nav>
      <NavSide display={show} />
    </div>
  );
}

export default NavBar;

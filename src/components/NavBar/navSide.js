import React from "react";
import { Link } from "react-router-dom";

function NavSide({ display }) {
  return (
    <div className="navSide" style={{ display: display }}>
      <ul>
        <li>
          <Link to="/category/plush">Plush</Link>
        </li>
        <li>
          <Link to="/category/poleras">poleras</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavSide;

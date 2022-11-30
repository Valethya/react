import { Close } from "@material-ui/icons";
import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function Toastify() {
  const { show, hiddenToastify } = useContext(cartContext);
  return (
    <div className="toastify" style={{ display: show }}>
      <p>
        <b>Tu producto ha sido agregado al carrito</b>
      </p>
      <Close onClick={hiddenToastify} />
    </div>
  );
}

export default Toastify;

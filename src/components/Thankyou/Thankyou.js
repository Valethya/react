import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

function Thankyou() {
  const idOrder = useParams().idOrder;
  const { data } = useContext(cartContext);
  data;
  return (
    <div className="Thankyou">
      <h1>
        <span>{data.name}</span> gracias por tu compra
      </h1>
      <h3>
        {" "}
        el id de tu compra es: <span> {idOrder}</span>
      </h3>
      <p>para mas informacion escribenos a:</p>
      <p>omorisotore@gmail.com</p>
    </div>
  );
}

export default Thankyou;

import React from "react";
import { useParams } from "react-router-dom";

function Thankyou() {
  const idOrder = useParams().idOrder;
  return (
    <div>
      <h1>Gracias por tu compra</h1>
      <h3> el id de tu compra es:{idOrder}</h3>
    </div>
  );
}

export default Thankyou;

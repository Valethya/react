import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Close, RemoveShoppingCart, ArrowBack } from "@material-ui/icons";
import ItemCartSide from "./ItemCartSide";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

function CartSide() {
  const { cart, display, setDisplay, priceInCart, clear } =
    useContext(cartContext);

  function hiddenCartSide() {
    console.log("hace click");
    setDisplay("none");
  }
  console.log(cart);

  if (cart.length > 0) {
    return (
      <div className="CartSide" style={{ display: display }}>
        <div className="goRemove">
          <Link
            to="/cart"
            onClick={() => {
              setDisplay("none");
            }}
            className=""
          >
            <ArrowBack></ArrowBack>Ir al detalle
          </Link>
          <Close style={{ padding: ".5em" }} onClick={hiddenCartSide}></Close>
        </div>

        <ul className="listItemCartSide">
          {cart.map((item) => {
            return <ItemCartSide item={item} cart={cart} key={item.id} />;
          })}
          <li className="total">
            <b>Total:</b> {priceInCart()}{" "}
            <RemoveShoppingCart
              style={{ padding: ".5em" }}
              onClick={clear}
            ></RemoveShoppingCart>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="CartSide" style={{ display: display }} key={"total"}>
        <div className="goRemove">
          <Close style={{ padding: ".5em" }} onClick={hiddenCartSide}></Close>
        </div>
        <div className="cartEmpty">
          <Loader></Loader>
          <h2> esperando a que pase algo</h2>
        </div>
      </div>
    );
  }
}
export default CartSide;

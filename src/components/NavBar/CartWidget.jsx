
import React, { useContext } from "react";
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { cartContext } from "../../context/cartContext";


function CartWidget() {
  const {setDisplay}= useContext(cartContext)
  function showCartSide() {
    setDisplay("flex")
  }
  return (
    <>
      <ShoppingCart onClick={showCartSide} />
    </>
   
  );
}

export default CartWidget;
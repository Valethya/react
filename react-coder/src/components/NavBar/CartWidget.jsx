
import React from "react";
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Badge from '@mui/material/Badge';



function CartWidget() {
  return (
    <Badge badgeContent={1} color="secondary" >
    <ShoppingCart/>
  </Badge>
  );
}

export default CartWidget;
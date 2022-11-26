import React ,{useContext} from "react";
import { cartContext} from "../../context/cartContext";


function Badge() {
    const miContext = useContext(cartContext);
    return <sup>
 {miContext.itemsInCart()}
    </sup>
}

export default Badge
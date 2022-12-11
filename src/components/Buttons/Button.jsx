
import React, { useContext } from "react";
import { useState } from "react";
import { cartContext } from "../../context/cartContext";



function Button({ children, key, oneTouchButton, type }) {


    let [colorBtn, setcolorBtn] = useState("#000")

    function colorChange() {
        setcolorBtn("rgb(139, 138, 138)")
        ("holi, he cambiado")
    }
    function handlerClick() {
        
        oneTouchButton()
        colorChange()
        ("no funciona creo")
    }
 
    return <button type={type} onClick={handlerClick} key={key} className="btn"  style={{ background: colorBtn,border:colorBtn }} >
        {children}
    </button>
}

export default Button
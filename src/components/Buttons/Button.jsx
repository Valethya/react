import { data } from "autoprefixer";
import React, { useContext } from "react";
import { useState } from "react";



function Button({ children, key, oneTouchButton, type, data }) {

    
    let [colorBtn, setcolorBtn] = useState("#000")

    function colorChange() {
        setcolorBtn("rgb(139, 138, 138)")
        console.log("holi, he cambiado")
    }
    function handlerClick() {
        oneTouchButton()
        colorChange()
        console.log("no funciona creo")
    }
 
    return <button type={type} onClick={handlerClick} key={key} className="btn" disabled={data?.name === "" || data?.phone === "" || data?.email === ""} style={{ background: colorBtn,border:colorBtn }} >
        {children}
    </button>
}

export default Button
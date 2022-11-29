import React from "react";
import { useState } from "react";

function Button({children,key,oneTouchButton}) {
    let [colorBtn, setcolorBtn] = useState("#000")
    
    function handleClick(){
        setcolorBtn("rgb(139, 138, 138)")
        console.log("holi, he cambiado")
    }
    return <button onClick={oneTouchButton} key={key} className="btn" style={{ background: colorBtn,border:colorBtn }} >
        {children}
    </button>
}

export default Button
import { defaultListboxReducer } from "@mui/base";
import React from "react";
import mewo from "../../Svg/mewo.svg";
import z from "../../Svg/Z.svg";

function Loader() {
  return (
    <div className="loader">
      <div>
        {" "}
        <img
          src={mewo}
          className="mewo
        "
        ></img>
        <img src={z} className="tinyZ"></img>
        <img src={z} className="littleZ"></img>
        <img src={z} className="bigZ"></img>
      </div>
    </div>
  );
}

export default Loader;
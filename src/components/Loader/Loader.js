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
          alt={"gato negro dormido"}
          className="mewo
        "
        ></img>
        <img
          src={z}
          alt={"letra z, ematopeya de dormir"}
          className="tinyZ"
        ></img>
        <img
          src={z}
          alt={"letra z, ematopeya de dormir"}
          className="littleZ"
        ></img>
        <img
          src={z}
          alt={"letra z, ematopeya de dormir"}
          className="bigZ"
        ></img>
      </div>
    </div>
  );
}

export default Loader;

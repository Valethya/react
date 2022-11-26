import React, { useContext } from "react";
import { Add, Remove } from "@material-ui/icons";
import Button from "../Buttons/Button";
import { cartContext } from "../../context/cartContext";

function AddRemove({ handleAdd, handleRemove, count }) {
  const { message } = useContext(cartContext);

  return (
    <div className="AddRemove">
      <div>
        <Remove className="AddRemove-btn" onClick={handleRemove} />
        <input type="text" value={count}></input>

        <Add className="AddRemove-btn" onClick={handleAdd} />
      </div>
      <p>{message}</p>
    </div>
  );
}

export default AddRemove;

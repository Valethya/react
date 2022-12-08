import React from "react";
import { Add, Remove } from "@material-ui/icons";

function AddRemove({ handleAdd, handleRemove, count }) {
  return (
    <div className="AddRemove">
      <div>
        <Remove className="AddRemove-btn remove" onClick={handleRemove} />
        <input type="text" value={count}></input>

        <Add className="AddRemove-btn add" onClick={handleAdd} />
      </div>
    </div>
  );
}

export default AddRemove;

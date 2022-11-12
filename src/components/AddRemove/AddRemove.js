import React from "react";
import { Add, Remove } from "@material-ui/icons";
import Icon from "@mui/material/Icon";

function AddRemove(props) {
  let [count, setCount] = React.useState(1);

  function handleAdd() {
    if (count < props.stock) setCount(count + 1);
  }
  function handleRemove() {
    if (count > 0) setCount(count - 1);
  }

  return (
    <div className="AddRemove">
      <Remove className="AddRemove-btn" onClick={handleRemove} />
      <input type="text" value={count}></input>
      <Add className="AddRemove-btn" onClick={handleAdd} />
    </div>
  );
}

export default AddRemove;

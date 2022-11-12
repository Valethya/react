import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { getSingleItem } from "../../services/mockService";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [prod, setProd] = useState([]);

  const { id } = useParams();
  //   console.log(id);

  async function getItemsAsync() {
    debugger;
    let respuesta = await getSingleItem(id);
    setProd(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return <ItemDetail product={prod} />;
}
export default ItemDetailContainer;

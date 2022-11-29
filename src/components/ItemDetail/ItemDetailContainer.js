import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { getSingleItem } from "../../services/mockService";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemDetailContainer() {
  const [prod, setProd] = useState([]);
  // const [products, setProducts] = useState([]);
  const [loading, setLoadin] = useState(true);

  const { id } = useParams();

  async function getItemsAsync() {
    getSingleItem(id).then((data) => {
      setProd(data);
      setLoadin(false);
    });
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return <>{loading ? <Loader /> : <ItemDetail product={prod} />}</>;
}
export default ItemDetailContainer;

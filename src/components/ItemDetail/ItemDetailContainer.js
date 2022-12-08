import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { getSingleItem } from "../../services/firestore";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Toastify from "../Toastify/Toastify";

function ItemDetailContainer() {
  const [prod, setProd] = useState([]);

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

  /////TOAST

  const [toastList, setToastList] = useState([]);

  let toastProperty = null;

  function showToast() {
    toastProperty = {
      message: "Tu producto ha sido agregado a tu carrito",
      id: toastList.length + 1,
    };
    setToastList([...toastList, toastProperty]);
    ("vaya que funciona!");
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <ItemDetail product={prod} showToast={showToast} />
      )}{" "}
      <Toastify toastList={toastList} setToastList={setToastList} />
    </div>
  );
}
export default ItemDetailContainer;

import { Close } from "@material-ui/icons";
import React, { useContext, useEffect, useCallback } from "react";
import { cartContext } from "../../context/cartContext";

function Toastify({ toastList, setToastList }) {
  const { itemCount } = useContext(cartContext);

  const deleteToast = () => {
    const toastListItem = [];
    setToastList(toastListItem);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) {
        deleteToast();
      }
    }, 1100);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, deleteToast]);
  return (
    <div className="toast active">
      {toastList.map((toast) => {
        return (
          <div
            className="toastify active"
            style={{
              background: itemCount ? toast.colorStock : toast.colorAdd,
            }}
          >
            <p>
              <b>{itemCount ? toast.messageStock : toast.messageAdd}</b>
            </p>
            <Close onClick={() => deleteToast(toast)} />
          </div>
        );
      })}
    </div>
  );
}

export default Toastify;

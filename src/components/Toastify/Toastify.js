import { Close } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/cartContext";

function Toastify({ toast, setToast }) {
  const { itemCount, setStyle, style } = useContext(cartContext);

  const deleteToast = () => {
    setStyle("toastify inactive");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (toast.length) {
        deleteToast();
      }
    }, 1100);

    return () => {
      clearInterval(interval);
    };
  }, [toast, deleteToast]);

  return (
    <div className="toast active">
      {toast.map((toast) => {
        return (
          <div
            className={style}
            key={toast.id}
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

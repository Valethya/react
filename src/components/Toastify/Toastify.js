import { Close } from "@material-ui/icons";
import React, { useContext, useEffect, useCallback } from "react";

function Toastify({ toastList, setToastList }) {
  const deleteToast = useCallback(
    (id) => {
      const toastListItem = toastList.filter((e) => e.id !== id);
      setToastList(toastListItem);
    },
    [toastList, setToastList]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) {
        deleteToast(toastList[0].id);
      }
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, deleteToast]);
  return (
    <div className="toast active">
      {toastList.map((toast, i) => {
        return (
          <div className="toastify active" key={i}>
            <p>
              <b>{toast.message}</b>
            </p>
            <Close onClick={() => deleteToast(toast.id)} />
          </div>
        );
      })}
    </div>
  );
}

export default Toastify;

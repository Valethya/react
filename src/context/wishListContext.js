import { createContext, useEffect, useState } from "react";

export const wishListContext = createContext();

export function WishListContextProvider({ children }) {
  const [wishList, setWishList] = useState([]);

  const saveInLocalStorage = (array) => {
    localStorage.setItem("wishList", JSON.stringify(array));
  };

  const recoveryLocalStorage = () => {
    if (localStorage.getItem("wishList")) {
      let newWishList = [...wishList];
      let recoveryCart = JSON.parse(localStorage.getItem("wishList"));
      "y esto", recoveryCart;
      recoveryCart.forEach((item) => {
        newWishList.push(item);
        setWishList(newWishList);
      });
    }
    "veamos", wishList;
  };

  useEffect(() => {
    recoveryLocalStorage();
  }, []);

  function addWishList(product) {
    let itemInWishList = wishList.findIndex((item) => item.id === product.id);

    let newWishList = [...wishList];

    if (itemInWishList === -1) {
      product.wishList = true;
      newWishList.push(product);
      setWishList(newWishList);
    }
    saveInLocalStorage(newWishList);
  }

  function removeWishList(item) {
    let idItem = item.id;

    let newWishList = wishList.filter((item) => item.id !== idItem);
    setWishList(newWishList);
    saveInLocalStorage(newWishList);
  }

  return (
    <wishListContext.Provider value={{ wishList, addWishList, removeWishList }}>
      {children}
    </wishListContext.Provider>
  );
}

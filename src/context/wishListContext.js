import { createContext, useState } from "react";

export const wishListContext = createContext();

export function WishListContextProvider({ children }) {
  const [wishList, setWishList] = useState([]);

  function addWishList(product) {
    debugger;
    let itemInWishList = wishList.findIndex((item) => item.id == product.id);

    let newWishList = [...wishList];

    if (itemInWishList == -1) {
      product.wishList = true;
      newWishList.push(product);
      setWishList(newWishList);
    }
  }

  return (
    <wishListContext.Provider value={{ wishList, addWishList }}>
      {children}
    </wishListContext.Provider>
  );
}

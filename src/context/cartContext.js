import { createContext, useState } from "react";

// 1. Importamos e inicializamos el contexto con createContext()
export const cartContext = createContext();

// 2. Creamos nuestro Context Provider

export function CartContextProvider({ children }) {
  const saludoContext = "Hola Context!";

  const [cart, setCart] = useState([]);

  const [message, setMessage] = useState("");

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(price);
  };

  function addToCart(product, count) {
    let itemAlreadyInCart = cart.findIndex(
      (itemInCart) => itemInCart.id === product.id
    );
    debugger;
    let newCart = [...cart];

    if (itemAlreadyInCart !== -1) {
      let amount = newCart[itemAlreadyInCart].count;
      debugger;
      if ((amount += count) > newCart[itemAlreadyInCart].stock) {
        setMessage("no tenemos suificiente stock!");
      } else {
        newCart[itemAlreadyInCart].count += count;

        setCart(newCart);
        setMessage("");
      }
    } else {
      /* let newCart = cart.map( item => item); */

      //1) agregando una propiedad
      product.count = count;
      newCart.push(product);

      //2) usando spread
      /* newCart.push( ...product,count) */

      setCart(newCart);
    }
  }

  let total = 0;
  function itemsInCart() {
    let total = 0;
    cart.forEach((item) => (total = total + item.count));
    return total;
  }

  /// CARTSIDE

  const [display, setDisplay] = useState("none");

  function removeItemCartSide(item) {
    let idItem = item.id;

    let newCart = cart.filter((item) => item.id !== idItem);
    setCart(newCart);
  }

  function clear() {
    setCart([]);
    setDisplay("none");
  }

  function priceInCart() {
    const finalPrice = cart.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    return formatPrice(finalPrice);
  }

  ///Toastify
  const [show, setShow] = useState("none");
  function showToastify() {
    setShow("flex");
  }
  function hiddenToastify() {
    setShow("none");
  }

  //   function alreadyInCart(id) {
  //     /* return true/false */
  //   }

  /*  const value = {
    saludoContext,
    itemsInCart,
    cart,
  }; */

  //3. retornamos el Provider del context creado
  //4. Pasamos en la prop "value" las variables que queramos hacer visibles
  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        saludoContext,
        itemsInCart,
        display,
        setDisplay,
        setMessage,
        message,
        removeItemCartSide,
        setCart,
        priceInCart,
        formatPrice,
        clear,
        show,
        showToastify,
        hiddenToastify,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

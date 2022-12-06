import { createContext, useState, useEffect } from "react";

// 1. Importamos e inicializamos el contexto con createContext()
export const cartContext = createContext();

// 2. Creamos nuestro Context Provider

export function CartContextProvider({ children }) {
  const saludoContext = "Hola Context!";

  const [cart, setCart] = useState([]);

  const [message, setMessage] = useState("");

  /// formatea el precio en pesos chilenos

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(price);
  };
  /////Local storage

  const saveInLocalStorage = (array) => {
    localStorage.setItem("cart", JSON.stringify(array));
  };

  const recoveryLocalStorage = () => {
    if (localStorage.getItem("cart")) {
      let newCart = [...cart];
      let recoveryCart = JSON.parse(localStorage.getItem("cart"));
      console.log("y esto", recoveryCart);
      recoveryCart.forEach((item) => {
        newCart.push(item);
        setCart(newCart);
      });
    }
    console.log("veamos", cart);
  };

  useEffect(() => {
    recoveryLocalStorage();
  }, []);

  ///agregar al carrito

  function addToCart(product, count) {
    let itemAlreadyInCart = cart.findIndex(
      (itemInCart) => itemInCart.id === product.id
    );

    let newCart = [...cart];

    ///si el item ya esta en carrito o no
    if (itemAlreadyInCart !== -1) {
      let amount = newCart[itemAlreadyInCart].count;

      ///si se agrega mas o menos items de que hay en stock
      if ((amount += count) > newCart[itemAlreadyInCart].stock) {
        setMessage("no tenemos suificiente stock!");
      } else {
        newCart[itemAlreadyInCart].count += count;

        setCart(newCart);
        saveInLocalStorage(cart);
        setMessage("");
      }
    } else {
      product.count = count;
      newCart.push(product);

      setCart(newCart);
      saveInLocalStorage(cart);
    }
  }

  ///funcion para obtener el total de articulos en el carrito

  let total = 0;
  function itemsInCart() {
    total = 0;
    cart.forEach((item) => (total = total + item.count));
    return total;
  }

  /// CARTSIDE

  const [display, setDisplay] = useState("none");

  ///remover item del carrito

  function removeItemCartSide(item) {
    let idItem = item.id;
    let newCart = cart.filter((item) => item.id !== idItem);
    console.log(newCart);
    setCart(newCart);
    saveInLocalStorage(newCart);
  }

  //// funcion para limpiar el carrito
  function clear() {
    setCart([]);
    setDisplay("none");
    saveInLocalStorage([]);
  }

  /// funcion para dar el valor total de todos los productos del carrito
  function priceInCart() {
    const finalPrice = cart.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    return formatPrice(finalPrice);
  }

  ////ORDEN DE COMPRA

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onInputChange(e) {
    let nameInput = e.target.name;
    let value = e.target.value;

    // dynamic properties
    let newData = { ...data };
    newData[nameInput] = value;
    setData(newData);
  }
  ////

  ///TOASTIFY

  ////
  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
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
        saveInLocalStorage,
        onInputChange,
        data,
        setData,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

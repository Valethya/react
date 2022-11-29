import React, { useContext, useEffect, useState } from "react";
import Button from "../Buttons/Button";
import { FavoriteBorderOutlined, Add } from "@material-ui/icons";
import { Favorite } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { wishListContext } from "../../context/wishListContext";
import { cartContext } from "../../context/cartContext";

function Item({ product }) {
  const { wishList, addWishList, removeWishList } = useContext(wishListContext);
  const { addToCart, formatPrice } = useContext(cartContext);

  let favorite = wishList.find((item) => item.id == product.id);

  let [fav, setFav] = useState(false);
  let [count, setCount] = useState(1);

  useEffect(() => {
    if (favorite?.wishList === true) {
      debugger;
      setFav(true);
    }
  }, [favorite]);

  function handleAddToCart() {
    debugger;
    addToCart(product, count);
  }

  function handleWish() {
    debugger;
    let item = wishList.find((item) => item.id == product.id);
    console.log("hola", item);
    if (item == undefined) {
      addWishList(product);
      setFav(true);
      // console.log("funcion agregar", wishList);
    } else {
      removeWishList(product);
      // console.log("funciona remover wish", wishList);
      setFav(false);
    }
    console.log("por aqui", wishList);
  }

  const urlDetail = `/detail/${product.id}`;
  return (
    <div className="card">
      <div>
        <div className="card-img">
          <img src={product.img} alt={product.title} />
        </div>
        <div className="card-detail">
          <h3>{product.title}</h3>
          <p>{formatPrice(product.price)}</p>
          <div className="favAdd">
            {fav ? (
              <Favorite
                id={product.id}
                onClick={handleWish}
                style={{ color: "#f76bba" }}
              />
            ) : (
              <FavoriteBorderOutlined
                onClick={handleWish}
                id={product.id}
                style={{ color: "#000" }}
              />
            )}
            <Add onClick={handleAddToCart} className="addItem"></Add>
          </div>
        </div>
        <Link to={urlDetail}>
          <Button>Ver más</Button>
        </Link>
      </div>
    </div>
  );
}

export default Item;

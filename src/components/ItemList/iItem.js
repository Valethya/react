import React, { useContext, useEffect, useState } from "react";
import Button from "../Buttons/Button";
import { FavoriteBorderOutlined, Add } from "@material-ui/icons";
import { Favorite } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { wishListContext } from "../../context/wishListContext";
import { cartContext } from "../../context/cartContext";

function Item({ product, showToast }) {
  const { wishList, addWishList, removeWishList } = useContext(wishListContext);
  const { addToCart, formatPrice } = useContext(cartContext);

  let favorite = wishList.find((item) => item.id === product.id);

  let [fav, setFav] = useState(false);
  let [count, setCount] = useState(1);

  useEffect(() => {
    if (favorite?.wishList === true) {
      setFav(true);
    }
  }, [favorite]);
  function handleAddToCart() {
    addToCart(product, count);
    showToast();
  }

  function handleWish() {
    let item = wishList.find((item) => item.id === product.id);

    if (item === undefined) {
      addWishList(product);
      setFav(true);
    } else {
      removeWishList(product);
      setFav(false);
    }
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
        </div>
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
        <Link to={urlDetail}>
          <Button>Ver más</Button>
        </Link>
      </div>
    </div>
  );
}

export default Item;

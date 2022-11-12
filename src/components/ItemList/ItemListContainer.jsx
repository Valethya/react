import React from "react";
import ItemList from "./ItemList";
import getItems from "../../services/mockService";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"


function ItemListContainer() {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(price);
  };
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  async function getItemsAsync() {
    debugger
    let data = await getItems(category);
    setProducts(data);
  }
  useEffect(() => {
    getItemsAsync();
  }, [category]);
  return (
    <div className="item-list">
      {products.map((prod) => {
        return (<ItemList
          key={prod.id}
          favorite={prod.favorite}
          id={prod.id}
          title={prod.title}
          imgurl={prod.img}
          price={formatPrice(prod.price)
          }
        />
        );
      })}
      </div>
      
    );
  }

export default ItemListContainer

// para renderizar el item y mostrar si esta no esta en la wishlist, debe revisar si el usuario lo ha incluido en su wishlist, esto lo podemos hacer mediante un objeto o solo guardando en local storage?.. eso ultimo tiene sentido, considerando que no es necesario hacer un usuario.
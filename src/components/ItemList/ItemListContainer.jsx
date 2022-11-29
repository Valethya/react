import React from "react";
import ItemList from "./ItemList";
import getItems from "../../services/mockService";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import Loader from "../Loader/Loader";



function ItemListContainer() {

  const [products, setProducts] = useState(null);
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
    <div className="itemListContainer">
     {products?
         <ItemList products={products} />:<Loader/>
      }
 
      </div>
      
    );
  }

export default ItemListContainer

// para renderizar el item y mostrar si esta no esta en la wishlist, debe revisar si el usuario lo ha incluido en su wishlist, esto lo podemos hacer mediante un objeto o solo guardando en local storage?.. eso ultimo tiene sentido, considerando que no es necesario hacer un usuario.
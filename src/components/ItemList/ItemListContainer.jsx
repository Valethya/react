import React from "react";
import ItemList from "./ItemList";
import {getItemsByCategory} from "../../services/firestore";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import Loader from "../Loader/Loader";
import getItemsOrdered from "../../services/firestore";



function ItemListContainer() {

  const [products, setProducts] = useState(null);
  const { category } = useParams();

  async function getItemsAsync() {
    if (!category) {
      let data = await getItemsOrdered(category);
      setProducts(data);
    } else {
      let data = await getItemsByCategory(category);
      setProducts(data)
    }
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

import React from "react";
import ItemList from "./ItemList";
import {getItemsByCategory} from "../../services/firestore";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import Loader from "../Loader/Loader";
import getItemsOrdered from "../../services/firestore";
import Toastify from "../Toastify/Toastify";



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

  ///toast 
  const [toastList, setToastList] = useState([]);

  let toastProperty = null;

  function showToast() {
    
    toastProperty = {
      message: "Tu producto ha sido agregado a tu carrito",
      id: toastList.length+1,
    };
    setToastList([...toastList, toastProperty]);
    console.log("vaya que funciona!")
  }
  
  ////
  return (
    <div className="itemListContainer">
     {products?
         <ItemList products={products} showToast ={()=>showToast()} />:<Loader/>
      }
     <Toastify toastList={toastList} setToastList={setToastList} />
      </div>
      
    );
  }

export default ItemListContainer

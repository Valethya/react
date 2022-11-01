import React from "react";
import ItemList from "./ItemList";
import omori from '../../images/omori-plush.jpg';
import aubrey from '../../images/aubrey-plush.jpg';
import kel from '../../images/kel-plush.jpg';
import hero from '../../images/hero-plush.jpg';
import mari from '../../images/mari-plush.jpg';

function ItemListContainer() {
    return (
      <div className="item-list">
        <ItemList
          imgurl={omori}
          title="Muñeco de plush Omori"
          price={100}
       
        />
        <ItemList
          imgurl={aubrey}
          title="Muñeco de plush Aubrey"
          price={200}
    
        />
        <ItemList
          imgurl={kel}
          title="Muñeco de plush Kel"
          price={500}
    
            />
             <ItemList
          imgurl={hero}
          title="Muñeco de plush Hero"
          price={500}

            />
             <ItemList
          imgurl={mari}
          title="Muñeco de plush Mari"
          price={500}
  
        />
      </div>
    );
  }

export default ItemListContainer
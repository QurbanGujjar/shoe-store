import React from "react";
import Shoes from "./../shoes.json";
import { Link } from "react-router-dom";
import '../Product.css';
import {useStateValue} from '../StateProvider'

function Product() {
  // console.log(Object.keys(Shoes));
  const [{basket},dispatch]=useStateValue()

  const AddTobasket = (id,name,price,image,desc)=>{


    dispatch({
      type:'ADD_TO_BASKET',
item:{
  id:id,
  name:name,
  price:price,
  image:image,
  desc:desc



}
    })

  }
  return (
    <div>
      <h1>Welcome to Product</h1>
      <div className='productContainer'>
        {Object.keys(Shoes).map((keyName) => {
          const shoe = Shoes[keyName];
          return (
            <div className='product' key={keyName}>
            <Link to={`/ProductItem/${keyName}`}>
                <img className="Product_img" src={shoe.img} height={150} />
            </Link>
            <h5>{shoe.name}</h5>
            <p>{shoe.desc}</p>
            <strong>${shoe.price}</strong>
            <button onClick={() => AddTobasket(shoe.id,shoe.name,shoe.price,shoe.img,shoe.desc)}>Add to Basket</button>

            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Product;

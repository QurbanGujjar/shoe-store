import React from "react";
import Shoes from "./../shoes.json";
import { Link } from "react-router-dom";
import '../Product.css';

function Product() {
  console.log(Object.keys(Shoes));
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
            <strong>$ 25.0</strong>
            <button>Add to Basket</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Product;

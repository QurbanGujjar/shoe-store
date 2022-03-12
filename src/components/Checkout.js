import React from "react";
import "../Checkout.css";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../CheckoutProduct";

function Checkout() {
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg'
          alt=''
        />
        <div className='checkout__title'>
          <h3>Hello, {user.email} </h3>
          <h2>Your Shoping Baskit</h2>
          {basket.map((item,index) => (
            <CheckoutProduct key={index}
              id={item.id}
              name={item.name}
              desc={item.desc}
              image={item.image}
              price={item.price}

            />
          ))}
        </div>
      </div>

      <div className='checkout__right'>

        {/* <h1>Sub total will go Here</h1> */}
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
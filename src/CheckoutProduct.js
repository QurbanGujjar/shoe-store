import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'


function CheckoutProduct({id, desc,name, image, price }) {
    const [{basket},dispatch]=useStateValue();

    const removeFromBasket = () =>{
        // remove the item from the basket

        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })

    }
  return (
    <div className='checkoutProduct'>
        <img className="checkoutProduct__image" src={image} alt="" />
        <div className="checkoutProduct__info">

            <p className='checkoutProduct__title'>{name}</p>
            <p>{desc}</p>
            <p className="checkoutProdct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">

{/* {Array(rating).fill().map((_,i)=>(<p className='fa fa-star checked'></p>))} */}
            </div>
<button onClick={removeFromBasket}>Remove from Basket</button>

        </div>


    </div>
  )
}

export default CheckoutProduct
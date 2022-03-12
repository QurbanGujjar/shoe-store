import React from 'react'
import '../Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from '../reducer'
import {useStateValue} from '../StateProvider'
// import {useNavigate } from "react-router-dom";

function Subtotal() {
//   const navigate =useNavigate()
  const [{basket},]=useStateValue()
  return (
    <div className='subtotal'>

        <CurrencyFormat

        renderText={(value)=>(
            <>
            <p>
            Subtotal ({basket?.length} items):<strong>{value}</strong>
            </p>
            <p>
            <small className="subtotal__gift">
            <input type="checkbox" />
            this order contain a gift
            </small>
            </p>

            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={'$'}
        />
        {/* navigate('/') */}
        <button >Process to Checkout</button>


    </div>
  )
}

export default Subtotal
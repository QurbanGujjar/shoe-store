import React from 'react'
import { useParams,Link,useNavigate  } from 'react-router-dom'
import Shoes from "./../shoes.json";

function ProductItem() {
    let {id} =useParams()
    const navigate =useNavigate();
    const shoe=Shoes[id]
    // console.log(id)

    if (!shoe){
        navigate('/pageNoteFound')


    }
        return (
            <div className='shoe-detils-contaier'>ProductItem


<div className='link shoe-detils'>
              <h5>{shoe.name}</h5 >
              <img src={shoe.img} />
            </div>
            </div>
          )



}

export default ProductItem
import React from 'react'
import { DeleteBtn } from './deleteBtn';
export const Card = ({product}) => {

    const trunc = (text, maxLenght) => text?.length > maxLenght ? text?.substring(0, maxLenght - 3) + "..." : text;

  return (
        <>
            <div>
                <img src={product.images[0]} alt={product.title} /> 
                <div className='p-3'>
                    <p className='text-2xl'>{product.title}</p>
                    <p className='font-bold'>{product.category.name}</p>
                    <p>{trunc(product.description, 100)}</p>
                    <p className='text-green-money font-bold'>{product.price}$</p>
                </div>
            </div>
            <DeleteBtn id={product.id}/>
        </>
  )
}

// "./src/assets/imgs/otcimdimy.jpg"

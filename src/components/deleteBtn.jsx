import axios from 'axios'
import React from 'react'
import { Products } from './products'

export const DeleteBtn = ({id}) => {

    const productDeleteHandler = () => {
        axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`)
        document.getElementById(id).style.display = "none"
    }

  return (
    <button onClick={productDeleteHandler} className='py-[6px] w-14 h-18 rounded-md flex items-center justify-center ml-[10px] mb-[10px] bg-delete transition-all duration-300 hover:brightness-110 active:scale-105 active:brightness-[.99]'><img src="./src/assets/icons/trash-2.svg"/></button>
  )
}
import React, { useEffect } from 'react'
import { useState } from 'react';
import { UseAxios } from '../hooks/useAxios'
import { Card } from './card';
import { CategorySelect } from './categorySelect';
import { Search } from './search';

export const Products = () => {

  const [category, setCategory] = useState("All Products")
  const [searchParam, setSearchParam] = useState("")
  const [searchedProducts, serSearchedProducts] = useState([])

  const {
    products,
    errorMessage,
    isLoaded,
} = UseAxios("/products")

const searchProducts = () => {
  if (!searchParam) {
    return products
  } else {
    return products.filter(i => i.title.toLowerCase().includes(searchParam.toLowerCase()))
  }
}

  useEffect(() => { 
     searchProducts()
  }, [searchParam])

  const handleSearchChange = (e) => {
      setSearchParam(e.target.value.trim()) 
      serSearchedProducts(searchProducts())
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
    UseAxios(`/categories/${category}/products?limit=12&offset=0`)
  }

  return (
    <> 
      <CategorySelect handleCategoryChange={handleCategoryChange} />
      <Search handleSearchChange={handleSearchChange}/>
      <ul className='text-dark-blue flex flex-wrap mt-10 gap-x-10 gap-y-8 justify-center'>
        {errorMessage ? (
          <div>
            <div className='mt-10 flex text-madder-txt border-solid border-[1px] border-burgundy bg-madder justify-center gap-x-2 text-primary-500 rounded-md p-5'>
              {errorMessage}
            </div> 
          </div>) : null}  
        {!isLoaded ? (
          <div className='mt-10 flex justify-center gap-x-2 text-primary-500 rounded-md p-5'>
              Loading <img className='animate-spin' src="./src/assets/icons/loader-2.svg" alt="" />
          </div>
        ) : (category == "All Products" ? searchedProducts.map((i) => { 
          return (
            <li key={i.id} id={i.id} className='rounded-xl overflow-hidden border-solid border-dark-blue-border border-2 flex flex-col justify-between w-[320px] h-[600px]'>
              <Card product={i}/>
            </li>  
           )
        }) : searchedProducts.filter(i => i.category.id == category ).map((i) => {
            return (
              <li key={i.id} id={i.id} className='rounded-xl overflow-hidden border-solid border-dark-blue-border border-2 flex flex-col justify-between w-[320px] h-[600px]'>
              <Card product={i}/>
            </li> 
            ) 
        }))
        }
      </ul>
    </>
  )
}
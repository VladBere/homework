import React from 'react'

export const Search = ({handleSearchChange}) => {

  return (<input onChange={handleSearchChange} className='ml-[50px] w-[350px] border-[1.5px] border-solid border-b-dark-blue-border rounded' type="text" placeholder='Search' />)
}



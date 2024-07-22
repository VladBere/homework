
import { UseAxios } from '../hooks/useAxios'

export const CategorySelect = ({ handleCategoryChange }) => {

  const {
      products: categories
  } = UseAxios("/categories")

  return (
    <select className='mt-10 ml-5 border-2 border-solid border-dark-blue-border rounded-[4px]' onChange={handleCategoryChange}>
        <optgroup label="Category">
            <option key="21321321321321" value="All Products">All Products</option>
            {categories.map(i => {
                return (<option key={i.id} value={i.id}>{i.name}</option>)
            })} 
        </optgroup>
    </select>
  )
}
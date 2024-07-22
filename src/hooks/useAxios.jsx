import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../config/app'

export const UseAxios = (target) => {
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoaded, setIsLoaded] = useState(false) 
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get(baseUrl + target)
            setProducts(res.data)
        } catch (error) {
            setErrorMessage(error.message)
        } finally {
            setIsLoaded(true)
        }
    }

    fetchData();
  }, [])  

  return {products, errorMessage, isLoaded}
}

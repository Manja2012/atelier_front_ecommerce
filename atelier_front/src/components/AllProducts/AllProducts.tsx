
import { useEffect } from "react"
import axios from "axios"

import * as ACTIONS from "../../redux/reducers/product"

import { URL } from '../../utils/constants/URL'
import { useDispatch, useSelector } from "react-redux";

const AllProducts = () => {
 
  const dispatch = useDispatch();

  const store = useSelector(state => state.products.data)


  useEffect(() => {
    const getAllProducts = async () => {
      try{
        const {data} = await axios.get(URL.ALL_PRODUCTS)
        dispatch(ACTIONS.FETCH_SUCCES(data))
      
      }catch(error){
          console.log(error)
      }
    }
    getAllProducts()
  
  },[])

    return(
      <>
        <h1>All Products</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Content</th>
              <th>Stock</th>
              <th>Online</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {store.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>{product.price}</td>
                <td>{product.content}</td>
                <td>{product.stock}</td>
                <td>{product.online}</td>
                <td>{product.picture[0].img}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
}
export default AllProducts;


import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import style from './ProductList.module.css'
import { URL } from '../../utils/constants/URL'

const ProductList = () => {
    const { id } = useParams<{id: string}>();  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try{
        const {data} = await axios.get(URL.ALL_PRODUCTS)
        setProducts(data) 
      }catch(error){
          console.log(error)
      }
    }
    getAllProducts()
  
  },[])

    return(
      <>
        <div className={style.list}>
            {products.map((product, id) => (
            <div className={style.item} key={id}>
                <Link   to={`/home/detail/${product._id}`} >
                <h2>{product.name}</h2>
                <div>{product.category}</div>
                <p>{product.brand}</p>
                {/* <img
                    src={products.picture[0].img}
                    width={400}
                /> */}
                <p>{product.price} €</p>
                </Link>
            </div>
            ))}
        </div>
    </>
    )
}
export default ProductList;

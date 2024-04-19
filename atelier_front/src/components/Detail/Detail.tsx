import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from 'react-router-dom'

import * as ACTIONS from "../../redux/reducers/product"
import { useDispatch, useSelector } from "react-redux";

import { URL } from '../../utils/constants/URL'

const Detail = () => {

    const dispatch = useDispatch();
    const store = useSelector(state => state.products.data)

//   const [product, setProduct] = useState([]);

  const { id } = useParams<{id: string}>();  
//   const idNumber = Number(id)
  useEffect(() => {
    const getProductById = async () => {
      try{
        const {data} = await axios.get(`${URL.ALL_PRODUCTS}/${id}`)
        console.log(id);
        
        dispatch(ACTIONS.FETCH_SUCCES_DETAIL({data, id}))
        // setProduct(data) 
        // console.log(product);
        
      }catch(error){
          console.log(error)
      }
    }
    getProductById()
  
  },[])



    return(
     <div>
        <h2>{store.name}</h2>
                <div>{store.category}</div>
                <p>{store.brand}</p>
                {/* <img
                    src={stores.picture[0].img}
                    width={400}
                /> */}
                <p>{store.price} €</p>
     </div>
    )
}
export default Detail;


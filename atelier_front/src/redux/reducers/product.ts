import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Product } from "../../interfaces/product";

type PayloadDetail = { 
  productData: Product[],
  idNumber: number
}

// type initialProduct = {
//   data: Product[];
//   loading: boolean | null;
//   error: boolean
// }

const initialState = {
  data: [],
  loading: null,
  error: false
} 

export const Products = createSlice({
  name: "Products",
  initialState,

  reducers: {
    FETCH_START: (store: initialProduct) => {
      store.loading = true
    }, 
    FETCH_SUCCES: (store: initialProduct, actions: PayloadAction<Product[]> ) => {
      store.loading = false
      store.data = actions.payload
      console.log('ok',actions.payload);

    },
    FETCH_SUCCES_DETAIL:  (store: initialProduct, actions: PayloadAction<PayloadDetail> ) => {
      store.loading = false  
      console.log(actions.payload);
      console.log('hello',actions.payload.data);
    
      store.data = actions.payload.data
      
    },
    FETCH_FAILURE: (store: initialProduct) => {
      store.loading = false
      store.error = true
    }
  }
})

export const {
  FETCH_START,
  FETCH_SUCCES,
  FETCH_SUCCES_DETAIL,
  FETCH_FAILURE
} = Products.actions

export default Products.reducer

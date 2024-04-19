import { configureStore } from "@reduxjs/toolkit";
import Products from './reducers/product'


export default configureStore({
  reducer: {
    products:Products
  },
});

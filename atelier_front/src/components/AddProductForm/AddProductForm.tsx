import { useState } from 'react'
import axios from 'axios'


// URL
import { URL } from '../../utils/constants/URL'
import css from './AddProductForm.module.css';

const AddProductForm = () => {

  const [product,setProduct]= useState({
    online: true,
    // picture: [{img:'url'}]
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct((product) => ({ ...product, [name]: value })) 
    // console.log(product);
    // localStorage.setItem('product', JSON.stringify(product))   
  }

  const handleSubmit = async (event) => {
    
    event.preventDefault()
    console.log(product);
    const pict = product.picture
    try{
      const response = await axios.post(URL.ADD_PRODUCT, { ...product, picture: [{img: pict}]}) 
      console.log(response);
    }catch(e){
      console.log(e);
    }
  }
 
  return (
    <div className={css['log-in-form-wrapper']}>
      <form 
        onSubmit={handleSubmit}
        className={css['log-in-form']}
        autoComplete="off"
       
      >
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> name </span>
          <input className={css['log-in-input']} 
          type="text" 
          onChange={handleChange}
          name="name" />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> category </span>
          <input
            className={css['log-in-input']}
            type="text"
            onChange={handleChange}
            name="category"
          />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> brand</span>
          <input
            className={css['log-in-input']}
            type="text"
            onChange={handleChange}
            name="brand"
          />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> price </span>
          <input
            className={css['log-in-input']}
            type="text"
            onChange={handleChange}
            name="price"
          />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> content </span>
          <input
            className={css['log-in-input']}
            type="text"
            onChange={handleChange}
            name="content"
          />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}>stock </span>
          <input
            className={css['log-in-input']}
            type="text"
            onChange={handleChange}
            name="stock"
          />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> picture </span>
          <input
            className={css['log-in-input']}
            type="text"
            onChange={handleChange}
            name="picture"
          />
        </label>
        <button className={css['log-in-btn']} type="submit">
         ok
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
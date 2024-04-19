
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from 'react-router-dom'
import css from '../AddProductForm/AddProductForm.module.css';
import { URL } from '../../utils/constants/URL'

const UpdateUser = () => {

  const [userId, setUserId] = useState([]);

  const { id } = useParams<{id: string}>();  

  useEffect(() => {
    const getUserById = async () => {
      try{
        const {data} = await axios.get(`${URL.USER_ID}/${id}`)
        setUserId(data) 
        console.log(userId);
        
      }catch(error){
          console.log(error)
      }
    }
    getUserById()
  
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserId(prevState => ({...prevState,[name]: value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${URL.USER_UPDATE}/${id}`, userId);
    } catch (error) {
      console.log(error);
    }
  };

    return(
      <div className={css['log-in-form-wrapper']}>
        <form 
        onSubmit={handleSubmit}
        className={css['log-in-form']}
        autoComplete="off"
      >
        <label className={css['log-in-label']}>
          <span className={css['label-span']}>prenom </span>
          <input 
            className={css['log-in-input']} 
            type="text" 
            value={userId.prenom}
            onChange={handleChange}
            name="prenom" 
          />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> picture </span>
          <input
            className={css['log-in-input']}
            type="text"
            value={userId.picture}
            onChange={handleChange}
            name="picture"
          />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}>email</span>
          <input
            className={css['log-in-input']}
            type="text"
            value={userId.email}
            onChange={handleChange}
            name="email"
          />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> role </span>
          <input
            className={css['log-in-input']}
            type="text"
            value={userId.role}
            onChange={handleChange}
            name="role"
          />
        </label>
        
        <button className={css['log-in-btn']} type="submit">
          Changer
        </button>
      </form> 
    </div>
    )
}
export default UpdateUser;

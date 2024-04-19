import React, { useContext, useState } from 'react'
import { AuthContext } from '../../utils/context/AuthContext' 

const Sign = () => {
  const [user, setUser] = useState({})
  const { login } = useContext(AuthContext)

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser((user) => ({ ...user, [name]: value }))    
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login(user)
    localStorage.setItem('user', JSON.stringify(user))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='email'
          name='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          name='password'
          onChange={handleChange}
        />
        <button>Connexion</button>
      </form>
    </div>
  )
}

export default Sign
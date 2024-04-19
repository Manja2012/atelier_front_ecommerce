import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from "axios"

import { URL } from '../../utils/constants/URL'

const AllUsers = () => {
    
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try{
        const {data} = await axios.get(URL.ALL_USERS)
        setUsers(data) 
      }catch(error){
          console.log(error)
      }
    }
    getAllUsers()
  
  },[])

    return(
      <>
        <h1>All Users</h1>
        <table>
          <thead>
            <tr>
              <th>prenom</th>
              <th>picture</th>
              <th>email</th>
              <th>role</th>
              <th>choisir</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, id) => (
              <tr key={id}>
                <td>{user.prenom}</td>
                <td>{user.picture}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td><Link to={`/admin/user/updapte/${user._id}`}>ok</Link></td> 
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
}
export default AllUsers;

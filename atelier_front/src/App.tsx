import {Routes, Route} from 'react-router-dom'

import './App.css'
import Sign from './pages/sign/sign'
import Admin from './pages/admin/admin'


function App() {

  return (
    <Routes>
      {/* <Route path="/" element={<Header/>}>  */}
        <Route index  element={<Sign />} />
        <Route path='/admin' element={<Admin/> } />
      {/* </Route> */}
    </Routes>
  )
}

export default App

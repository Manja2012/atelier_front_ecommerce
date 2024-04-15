import {Routes, Route} from 'react-router-dom'

import './App.css'
import Sign from './pages/sign/sign'


function App() {

  return (
    <Routes>
      {/* <Route path="/" element={<Header/>}>  */}
        <Route index  element={<Sign />} />
      {/* </Route> */}
    </Routes>
  )
}

export default App

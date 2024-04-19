import {Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import './App.css'
import Sign from './pages/pageAuth/Sign'
import SignUp from './pages/pageAuth/SignUp'
import AddProduct from './pages/pageAddProduct/pageAddProduct'
import AllProducts from './components/AllProducts/AllProducts'
import PageAllUsers from './pages/pageAllUsers/pageAllUsers'
import PageUpdateUser from './pages/pageUpdateUser/pageUpdateUser'
import PageHome from './pages/pageHome/pageHome'
import ProductDetail from './pages/pageProductDetail/pageProductDetail'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Header/>}> 
        <Route path='/sign' element={<Sign />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/admin/product/add' element={<AddProduct/> } />
        <Route path='/admin/product' element={<AllProducts/> } />
        <Route path='/admin/user' element={<PageAllUsers/> } />
        <Route path='/admin/user/updapte/:id' element={<PageUpdateUser/> } />
        <Route path='/home' element={<PageHome/> } />
        <Route path='/home/detail/:id' element={<ProductDetail/> } />
      </Route>
    </Routes>
  )
}

export default App

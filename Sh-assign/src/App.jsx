import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import Cart from './components/Cart';
import SingleProduct from './components/SIngleProduct';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route index element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/item' element={<SingleProduct/>} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App

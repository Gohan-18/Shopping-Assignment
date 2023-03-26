import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import Cart from './components/Cart';
import SingleProduct from './components/SIngleProduct';
import { Provider } from 'react-redux';
import store from './store';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route index element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/item' element={<SingleProduct/>} />
    </Route>
  ))

  return (
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App

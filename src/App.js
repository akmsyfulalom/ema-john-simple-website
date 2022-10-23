
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';

import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';

import Main from './Layout/Main';
import { ProductsAndCartLoaders } from './loaders/ProductsAndCartLoaders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/home', element: <Home></Home>
        },
        {
          path: '/shop',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: ProductsAndCartLoaders,
          element: <Orders></Orders>
        },
        {
          path: '/inventory', element: <Inventory></Inventory>
        },
        {
          path: '/about', element: <About></About>
        }


      ],


    },


  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

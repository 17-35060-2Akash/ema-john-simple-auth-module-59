import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Shop from '../components/Shop/Shop';
import Orders from '../components/Orders/Orders';
import About from '../components/About/About';
import Inventory from '../components/Inventory/Inventory';
import { productsAndCartLoader } from '../loaders/productsAndCartLoader';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import Shiiping from '../components/Shiiping/Shiiping';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('products.json'),
                element: <Shop></Shop>
            },
            {
                path: 'orders',
                loader: productsAndCartLoader,
                element: <Orders></Orders>
            },
            {
                path: 'inventory',
                element:
                    <PrivateRoute>
                        <Inventory></Inventory>
                    </PrivateRoute>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/shipping',
                element:
                    <PrivateRoute>
                        <Shiiping></Shiiping>
                    </PrivateRoute>
            },
        ]
    },

])
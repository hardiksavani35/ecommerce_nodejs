import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Home from '../components/Home';
import Cart from '../components/Cart';

const router = createBrowserRouter([
    { path: '/', Component: App,
        children: [
            { index: true, Component: Home },
            { path: 'cart', Component: Cart }
        ]
    }, 
]);

export default router;
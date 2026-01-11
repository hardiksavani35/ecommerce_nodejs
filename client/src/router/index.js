import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Home from '../components/Home';
import Cart from '../components/Cart';
import Shop from '../components/Shop';
import Contact from '../components/Contact';

const router = createBrowserRouter([
    { path: '/', Component: App,
        children: [
            { index: true, Component: Home },
            { path: 'shop', Component: Shop }, 
            { path: 'contact', Component: Contact },
            { path: 'cart', Component: Cart }
        ]
    }, 
]);

export default router;
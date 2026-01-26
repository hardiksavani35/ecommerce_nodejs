import { createContext, useState } from "react";
 
export const CartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => { 
            const existingProduct = prevCart.find((item) => item.id === product.id);

            if (existingProduct) { 
                return prevCart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            } else { 
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const deleteProduct = (productId) => {
        setCart((prevCart) => {
            return prevCart.filter((item) => item.id !== productId);
        });
    };

    const increaseQuantity = (productId) => {
        setCart(prevCart => {
            return prevCart.map(item =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        });
    };

    const decreaseQuantity = (productId) => {
        setCart(prevCart => {
            return prevCart.map(item =>
                item.id === productId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        });
    };

    const clearCart = () =>  {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, deleteProduct, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}
import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function CartItem({item}) {  
    const { increaseQuantity, decreaseQuantity } = useContext(CartContext);
    const itemTotal = (item.price * item.quantity).toFixed(2);
    return(
        <div className="p-6 border-b flex flex-col sm:flex-row gap-4">
            <img src={item.image} alt="Product" className="w-full sm:w-32 h-32 object-cover rounded-lg" />
            <div className="flex-1">
                <div className="flex justify-between">
                    <h3 className="font-semibold text-gray-800 text-lg">{item.name}</h3>
                    <button className="text-red-500 hover:text-red-700">
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
                <p className="text-gray-600 text-sm mt-1">Color: Black | Size: One Size</p>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center border rounded-lg">
                        <button className="px-3 py-1 hover:bg-gray-100" disabled={item.quantity === 1} onClick={() => decreaseQuantity(item.id)}>-</button>
                        <span className="px-4 py-1 border-x">{item.quantity}</span>
                        <button className="px-3 py-1 hover:bg-gray-100" onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                    <span className="text-2xl font-bold text-gray-800">${itemTotal}</span>
                </div>
            </div>
        </div>
    )
}
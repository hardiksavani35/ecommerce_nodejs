import {formatPrice} from '../utils/Price'

export default function ProductItem({product}) {
    const hasDiscount = !!product.originalPrice

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
            <div className="relative overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-red-50">
                    <i className="far fa-heart text-gray-600"></i>
                </button>
                {hasDiscount && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Sale
                    </span>
                )} 
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 text-sm">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <span className="text-gray-600 text-sm ml-2">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-2xl font-bold text-gray-800">{formatPrice(product.price)}</span>
                        {hasDiscount && ( <span className="text-gray-400 line-through ml-2"> {formatPrice(product.originalPrice)} </span> )}
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        <i className="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
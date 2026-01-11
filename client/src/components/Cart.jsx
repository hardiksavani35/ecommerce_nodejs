export default function Cart() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
                
                <div className="grid lg:grid-cols-3 gap-8"> 
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden"> 
                            <div className="p-6 border-b flex flex-col sm:flex-row gap-4">
                                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" alt="Product" className="w-full sm:w-32 h-32 object-cover rounded-lg" />
                                <div className="flex-1">
                                    <div className="flex justify-between">
                                        <h3 className="font-semibold text-gray-800 text-lg">Wireless Headphones</h3>
                                        <button className="text-red-500 hover:text-red-700">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                    <p className="text-gray-600 text-sm mt-1">Color: Black | Size: One Size</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex items-center border rounded-lg">
                                            <button className="px-3 py-1 hover:bg-gray-100">-</button>
                                            <span className="px-4 py-1 border-x">1</span>
                                            <button className="px-3 py-1 hover:bg-gray-100">+</button>
                                        </div>
                                        <span className="text-2xl font-bold text-gray-800">$89.99</span>
                                    </div>
                                </div>
                            </div>
 
                            <div className="p-6 border-b flex flex-col sm:flex-row gap-4">
                                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" alt="Product" className="w-full sm:w-32 h-32 object-cover rounded-lg" />
                                <div className="flex-1">
                                    <div className="flex justify-between">
                                        <h3 className="font-semibold text-gray-800 text-lg">Smart Watch</h3>
                                        <button className="text-red-500 hover:text-red-700">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                    <p className="text-gray-600 text-sm mt-1">Color: Silver | Band: Sport</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex items-center border rounded-lg">
                                            <button className="px-3 py-1 hover:bg-gray-100">-</button>
                                            <span className="px-4 py-1 border-x">2</span>
                                            <button className="px-3 py-1 hover:bg-gray-100">+</button>
                                        </div>
                                        <span className="text-2xl font-bold text-gray-800">$299.98</span>
                                    </div>
                                </div>
                            </div>
 
                            <div className="p-6 flex flex-col sm:flex-row gap-4">
                                <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400" alt="Product" className="w-full sm:w-32 h-32 object-cover rounded-lg" />
                                <div className="flex-1">
                                    <div className="flex justify-between">
                                        <h3 className="font-semibold text-gray-800 text-lg">Designer Sunglasses</h3>
                                        <button className="text-red-500 hover:text-red-700">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                    <p className="text-gray-600 text-sm mt-1">Frame: Aviator | Lens: Polarized</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex items-center border rounded-lg">
                                            <button className="px-3 py-1 hover:bg-gray-100">-</button>
                                            <span className="px-4 py-1 border-x">1</span>
                                            <button className="px-3 py-1 hover:bg-gray-100">+</button>
                                        </div>
                                        <span className="text-2xl font-bold text-gray-800">$129.99</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex gap-4">
                            <a href="shop.html" className="flex-1 bg-white border-2 border-blue-600 text-blue-600 py-3 rounded-lg text-center font-semibold hover:bg-blue-50">
                                <i className="fas fa-arrow-left mr-2"></i>Continue Shopping
                            </a>
                            <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600">
                                <i className="fas fa-trash mr-2"></i>Clear Cart
                            </button>
                        </div>
                    </div>
 
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
                            
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal (4 items)</span>
                                    <span className="font-semibold">$519.96</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="font-semibold text-green-600">Free</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Tax</span>
                                    <span className="font-semibold">$41.60</span>
                                </div>
                                <div className="border-t pt-4 flex justify-between text-xl font-bold text-gray-800">
                                    <span>Total</span>
                                    <span>$561.56</span>
                                </div>
                            </div>

                            <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 mb-4">
                                <i className="fas fa-lock mr-2"></i>Proceed to Checkout
                            </button>

                            <div className="border-t pt-6">
                                <p className="text-sm text-gray-600 mb-3">Have a promo code?</p>
                                <div className="flex gap-2">
                                    <input type="text" placeholder="Enter code" className="flex-1 border rounded-lg px-4 py-2 text-sm" />
                                    <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700">Apply</button>
                                </div>
                            </div>

                            <div className="mt-6 bg-blue-50 rounded-lg p-4">
                                <p className="text-sm text-blue-800 flex items-start">
                                    <i className="fas fa-truck text-blue-600 mt-1 mr-2"></i>
                                    <span><strong>Free shipping</strong> on orders over $50. Your order qualifies!</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
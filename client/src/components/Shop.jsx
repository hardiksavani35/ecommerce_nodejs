export default function Shop() {
    return(<section className="py-12">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-8"> 
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Filters</h2>
                         
                        <div className="mb-6">
                            <h3 className="font-semibold text-gray-800 mb-3">Categories</h3>
                            <div className="space-y-2">
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <span className="text-sm text-gray-600">Electronics (125)</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <span className="text-sm text-gray-600">Fashion (89)</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <span className="text-sm text-gray-600">Home & Garden (67)</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <span className="text-sm text-gray-600">Sports (45)</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <span className="text-sm text-gray-600">Books (34)</span>
                                </label>
                            </div>
                        </div>
 
                        <div className="mb-6 border-t pt-6">
                            <h3 className="font-semibold text-gray-800 mb-3">Price Range</h3>
                            <input type="range" className="w-full mb-2" min="0" max="1000" value="500" />
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>$0</span>
                                <span>$1000</span>
                            </div>
                        </div>
 
                        <div className="mb-6 border-t pt-6">
                            <h3 className="font-semibold text-gray-800 mb-3">Rating</h3>
                            <div className="space-y-2">
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <div className="flex text-yellow-400 text-sm">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <span className="text-sm text-gray-600 ml-2">& Up</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <div className="flex text-yellow-400 text-sm">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <span className="text-sm text-gray-600 ml-2">& Up</span>
                                </label>
                            </div>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                            Apply Filters
                        </button>
                        <button className="w-full mt-2 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300">
                            Clear All
                        </button>
                    </div>
                </div>
 
                <div className="lg:col-span-3"> 
                    <div className="bg-white rounded-xl shadow-md p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-gray-600">Showing <strong>1-12</strong> of <strong>248</strong> products</p>
                        <div className="flex items-center gap-4">
                            <label className="text-sm text-gray-600">Sort by:</label>
                            <select className="border rounded-lg px-4 py-2 text-sm">
                                <option>Featured</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest</option>
                                <option>Best Rating</option>
                            </select>
                        </div>
                    </div>
 
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> 
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" alt="Product" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                                <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-red-50">
                                    <i className="far fa-heart text-gray-600"></i>
                                </button>
                                <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Sale</span>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-800 mb-2">Wireless Headphones</h3>
                                <div className="flex items-center mb-2">
                                    <div className="flex text-yellow-400 text-sm">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <span className="text-gray-600 text-sm ml-2">(4.5)</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-2xl font-bold text-gray-800">$89.99</span>
                                        <span className="text-gray-400 line-through ml-2">$129.99</span>
                                    </div>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                        <i className="fas fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
 
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" alt="Product" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                                <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-red-50">
                                    <i className="far fa-heart text-gray-600"></i>
                                </button>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-800 mb-2">Smart Watch</h3>
                                <div className="flex items-center mb-2">
                                    <div className="flex text-yellow-400 text-sm">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <span className="text-gray-600 text-sm ml-2">(5.0)</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-2xl font-bold text-gray-800">$149.99</span>
                                    </div>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                        <i className="fas fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
 
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400" alt="Product" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                                <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-red-50">
                                    <i className="far fa-heart text-gray-600"></i>
                                </button>
                                <span className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">New</span>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-800 mb-2">Designer Sunglasses</h3>
                                <div className="flex items-center mb-2">
                                    <div className="flex text-yellow-400 text-sm">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <span className="text-gray-600 text-sm ml-2">(4.0)</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-2xl font-bold text-gray-800">$129.99</span>
                                    </div>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                        <i className="fas fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
 
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400" alt="Product" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                                <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-red-50">
                                    <i className="far fa-heart text-gray-600"></i>
                                </button>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-800 mb-2">Running Shoes</h3>
                                <div className="flex items-center mb-2">
                                    <div className="flex text-yellow-400 text-sm">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <span className="text-gray-600 text-sm ml-2">(4.7)</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-2xl font-bold text-gray-800">$79.99</span>
                                    </div>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                        <i className="fas fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
 
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400" alt="Product" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                                <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-red-50">
                                    <i className="far fa-heart text-gray-600"></i>
                                </button>
                                <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">-30%</span>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-800 mb-2">Coffee Maker</h3>
                                <div className="flex items-center mb-2">
                                    <div className="flex text-yellow-400 text-sm">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <span className="text-gray-600 text-sm ml-2">(5.0)</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-2xl font-bold text-gray-800">$69.99</span>
                                        <span className="text-gray-400 line-through ml-2">$99.99</span>
                                    </div>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                        <i className="fas fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
 
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400" alt="Product" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                                <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-red-50">
                                    <i className="far fa-heart text-gray-600"></i>
                                </button>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-800 mb-2">Smart Speaker</h3>
                                <div className="flex items-center mb-2">
                                    <div className="flex text-yellow-400 text-sm">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <span className="text-gray-600 text-sm ml-2">(4.2)</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-2xl font-bold text-gray-800">$99.99</span>
                                    </div>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                        <i className="fas fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
 
                    <div className="mt-8 flex justify-center">
                        <div className="flex gap-2">
                            <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">Previous</button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                            <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">2</button>
                            <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">3</button>
                            <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">...</button>
                            <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">21</button>
                            <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}
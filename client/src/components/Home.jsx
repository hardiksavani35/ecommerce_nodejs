import HeroImage from '../assets/hero.jpg';
import CategoryBox from './CategoryBox';
import Category from './CategoryBox';

export default function Home() {
    return (
        <>
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-5xl font-bold mb-6">Summer Collection 2025</h1>
                        <p className="text-xl mb-8 text-blue-100">Discover the latest trends with up to 50% off on selected items. Shop now and enjoy free shipping!</p>
                        <div className="flex gap-4">
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg">Shop Now</button>
                            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600">Learn More</button>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img src={HeroImage} alt="Shopping" className="rounded-3xl shadow-2xl" />
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Shop by Category</h2>
                    <p className="text-gray-600">Browse our wide selection of products</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                     <CategoryBox></CategoryBox>
                </div>
            </div>
        </section>

        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
                    <p className="text-gray-600">Check out our best selling items</p>
                </div> 
    
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> 
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
                                    <span className="text-2xl font-bold text-gray-800">$129.99</span>
                                    <span className="text-gray-400 line-through ml-2">$199.99</span>
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
                            <span className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">New</span>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-800 mb-2">Smart Watch Pro</h3>
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
                                <span className="text-2xl font-bold text-gray-800">$299.99</span>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                    <i className="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
    
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
                        <div className="relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400" alt="Product" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                            <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-red-50">
                                <i className="far fa-heart text-gray-600"></i>
                            </button>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-800 mb-2">Leather Backpack</h3>
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
                                <span className="text-2xl font-bold text-gray-800">$89.99</span>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                    <i className="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
    
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
                        <div className="relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" alt="Product" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                            <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-red-50">
                                <i className="far fa-heart text-gray-600"></i>
                            </button>
                            <span className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Popular</span>
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
                                <span className="text-2xl font-bold text-gray-800">$119.99</span>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                    <i className="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
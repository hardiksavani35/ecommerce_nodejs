export default function Header() {
    return (<header className="bg-white shadow-md sticky top-0 z-50"> 
        <div className="bg-gray-900 text-white text-sm">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="flex gap-6">
                    <span><i className="fas fa-phone mr-2"></i>+1 (555) 123-4567</span>
                    <span className="hidden md:inline"><i className="fas fa-envelope mr-2"></i>support@shophub.com</span>
                </div>
                <span>Free Shipping on Orders Over $50</span>
            </div>
        </div>
 
        <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center"> 
                <div className="text-3xl font-bold text-blue-600">ShopHub</div>
 
                <nav className="hidden lg:flex gap-8">
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Shop</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Categories</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Deals</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
                </nav> 
                
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
                        <i className="fas fa-search text-gray-400 mr-2"></i>
                        <input type="text" placeholder="Search products..." className="bg-transparent outline-none text-sm w-48" />
                    </div>
                    <button className="relative">
                        <i className="fas fa-heart text-gray-600 text-xl"></i>
                    </button>
                    <button className="relative">
                        <i className="fas fa-shopping-cart text-gray-600 text-xl"></i>
                        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">3</span>
                    </button>
                    <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
                        <i className="fas fa-user mr-2"></i>Login
                    </button>
                    <button className="lg:hidden text-gray-600 text-2xl">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>)
}

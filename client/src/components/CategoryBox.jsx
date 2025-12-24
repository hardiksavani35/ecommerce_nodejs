export default function CategoryBox() {
    return (
        <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400" alt="Electronics" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Electronics</span>
            </div>
        </div>
    )
}
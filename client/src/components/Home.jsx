import React, { useState, useEffect } from 'react';
import HeroImage from '../assets/hero.jpg';
import CategoryBox from './CategoryBox'; 
import Product from './Product';

export default function Home() { 
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:3300/api/categories');
                const data = await response.json(); 
                setCategories(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

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
                    {loading ? (
                        <p className="text-gray-600 py-12 text-center">
                            Loading categories...
                        </p>
                        ) : (
                        categories.map(category => (
                            <CategoryBox key={category.id} category={category} />
                        ))
                    )}
                </div>
            </div>
        </section>
                    
        <Product 
            title="Featured Products" 
            subtitle="Check out our best selling items"
            type="featured">
        </Product>
        </>
    )
}
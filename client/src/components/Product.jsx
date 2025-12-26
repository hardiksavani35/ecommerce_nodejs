import React, { useState, useEffect } from 'react';
import ProductItem from "./ProductItem";

export default function Product({title, subtitle, type = "general"}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
        const fetchProducts = async () => {
            try {
                const url = `http://localhost:3300/api/products?type=${type}`;
                const response = await fetch(url);
                const data = await response.json(); 
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
                    <p className="text-gray-600">{subtitle}</p>
                </div> 
    
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">                     
                    {loading ? (
                        <p>Loading products...</p>
                    ) : products.length === 0 ? (
                        <p>No products found.</p>
                    ) : (
                        products.map(product => <ProductItem key={product.id} product={product} />)
                    )}
                </div>
            </div>
        </section>
    )
}
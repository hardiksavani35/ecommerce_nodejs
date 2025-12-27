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
              
                if (!data.success) {
                    setLoading(false);
                    return;
                } 
                setProducts(data.data || []);
                setLoading(false);
            } catch (error) { 
                console.error("Failed to fetch products:", error);
                setProducts([]);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [type]);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
                    <p className="text-gray-600">{subtitle}</p>
                </div> 
    
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">                     
                    {loading ? (
                        <div className="col-span-full text-center">Loading products...</div>
                    ) : products.length === 0 ? (
                        <div className="col-span-full text-center">No products found.</div>
                    ) : (
                        products.map(product => <ProductItem key={product.id} product={product} />)
                    )}
                </div>
            </div>
        </section>
    )
}
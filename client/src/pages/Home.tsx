import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export interface Product {
  id: number;
  name: string;
  price: number;
  inCart: boolean;
  imageUrl: string;
  featurePhoto1: string;
  featurePhoto2: string;
}

interface HomeProps {
  products: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

function Home({ products, setProducts, setCart }: HomeProps) {
  useEffect(() => {
    fetch('http://localhost:4000/api/products')
      .then(response => response.json())
      .then((products: Product[]) => {
        // Ensure all products have imageUrl with full path
        const productsWithImages = products.map(product => ({
          ...product,
          imageUrl: product.imageUrl 
            ? `http://localhost:4000${product.imageUrl}`
            : '/placeholder-product.jpg'
        }));
        setProducts(productsWithImages);
      })
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div 
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            {/* Product Thumbnail - Updated with better image handling */}
            <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder-product.jpg';
                  (e.target as HTMLImageElement).className = 'w-3/4 h-auto'; // Adjust placeholder size
                }}
              />
            </div>
            
            {/* Rest of your product card remains the same */}
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium text-teal-800">{product.name}</h3>
                <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              
              <div className="mt-4 flex justify-end">
                <Link 
                  to={`/${product.id}`}
                  className="inline-flex items-center px-3 py-2 bg-teal-600 text-white text-sm font-medium rounded-md hover:bg-teal-700 transition-colors duration-300"
                >
                  View Details
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
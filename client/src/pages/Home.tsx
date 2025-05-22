import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
 
export interface Product {
  id: number;
  name: string;
  price: number;
}

interface HomeProps {
  products: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

function Home({ products, setProducts, setCart }: HomeProps) {

    // init show products on display when loading the page.
    useEffect(() => {
        fetch('http://localhost:4000/api/products')
        .then(response => response.json())
        .then((products: Product[]) => {
            setProducts(products);
        })
        .catch(err => console.error('Error:', err));
    }, []);

    return (
        <div>
            <ul>
                {products.map(product => (
                <li key={product.id}>
                    {product.name} - ${product.price}
                    <Link to={`/${product.id}`}>View</Link>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
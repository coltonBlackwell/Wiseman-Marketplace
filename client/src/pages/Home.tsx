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

    // const [products, setProducts] = useState<Product[]>([]); // <-- typed array


    // init show products on display when loading the page.
    useEffect(() => {
        fetch('http://localhost:4000/api/products')
        .then(response => response.json())
        .then((products: Product[]) => {
            setProducts(products);
        })
        .catch(err => console.error('Error:', err));
    }, []);

    const addProduct = (id: number) => {
        fetch(`http://localhost:4000/api/cart/${id}`, {
            method: 'POST',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add product to cart');
            }
            return response.json();
        })
        .then(data => {
            console.log('Cart updated:', data.cart);
            setCart(data.cart);
            })
        .catch(err => console.error('Error:', err));
    };

    return (
        <div>
            <ul>
                {products.map(product => (
                <li key={product.id}>
                    {product.name} - ${product.price}
                    <button onClick={() => addProduct(product.id)}>Add</button>
                    <Link to={`/${product.id}`}>View</Link>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
import React, { useState, useEffect } from 'react';
import { Product } from './Home';

interface CheckoutProps {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

export function Checkout({ cart, setCart }: CheckoutProps) {

    // init show cart on display when loading the page.
    useEffect(() => {
        fetch('http://localhost:4000/api/cart')
        .then(response => response.json())
        .then((cart: Product[]) => {
            setCart(cart);
        })
        .catch(err => console.error('Error:', err));
    }, []);

    // remove product from cart
    const removeProduct = (id: number) => {
        fetch(`http://localhost:4000/api/cart/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to remove product to cart');
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
            {cart.map(product => (
            <li key={product.id}>
                {product.name} - ${product.price}
                <button onClick={() => removeProduct(product.id)}>Remove</button>
            </li>
            ))}
        </ul>
    </div>
    );
}

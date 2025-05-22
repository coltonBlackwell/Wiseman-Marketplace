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

        return (
        <div>
            <ul>
                {cart.map(p => (
                <li key={p.id}>
                    {p.name} - ${p.price}
                </li>
                ))}
            </ul>
        </div>
    );
}

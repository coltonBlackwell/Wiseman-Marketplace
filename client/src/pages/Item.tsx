import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from './Home';

interface ItemProps {
  products: Product[];
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

function Item({ products, setProducts, cart, setCart }: ItemProps) {
    
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div>Product not found.</div>;
  }

  const addToCart = () => {
    fetch(`http://localhost:4000/api/cart/${product.id}`, {
      method: 'POST',
    })
      .then(res => res.json())
      .then(data => {
        setCart(data.cart); // update cart state
      })
      .catch(err => console.error('Error adding to cart:', err));
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Item;
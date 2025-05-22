import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
        setCart(data.cart); // Update cart state
        setProducts(prev =>
          prev.map(p =>
            p.id === product.id ? { ...p, inCart: true } : p
          )
        ); // Update inCart for this product
      })
      .catch(err => console.error('Error adding to cart:', err));
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={addToCart} disabled={product.inCart}>
        {product.inCart ? 'In Cart' : 'Add to Cart'}
      </button>
      <br />
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Item;

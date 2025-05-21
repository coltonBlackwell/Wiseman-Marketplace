import React, { useState, useEffect } from 'react';
// import './output.css';
 
interface Product {
  id: number;
  name: string;
  price: number;
}

function Home() {
  const [products, setProducts] = useState<Product[]>([]); // <-- typed array

  useEffect(() => {
    fetch('http://localhost:4000/api/products')
      .then(response => response.json())
      .then((products: Product[]) => {
        setProducts(products);
      })
      .catch(err => console.error('Error:', err));
  }, []);

  const removeProduct = (id: number) => {
    // Optionally call the backend to delete the product
    fetch(`http://localhost:4000/api/products/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // Update UI after successful deletion
          setProducts(prev => prev.filter(p => p.id !== id));
        } else {
          console.error('Failed to delete product');
        }
      })
      .catch(err => console.error('Error deleting product:', err));
  };

  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => removeProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
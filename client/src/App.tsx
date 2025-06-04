import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Checkout } from './pages/Checkout';
import './output.css';
import { useEffect, useState } from 'react';
import { Product } from './pages/Home'; // Make sure this is exported in Home.tsx
import Item from './pages/Item';
import Auth0ProviderWithHistory from './auth0-provider-with-history';
import Profile from './pages/Profile';

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]); // <-- typed array

  useEffect(() => {
    fetch('https://wiseman-marketplace.onrender.com/api/cart')
      .then(res => res.json())
      .then((cart: Product[]) => setCart(cart))
      .catch(err => console.error('Error fetching cart:', err));
  }, []);

  return (
    <Router>
      <Auth0ProviderWithHistory>
        <Navbar />
        <br />
          <Routes>
            <Route path="/" element={<Home products={products} setProducts={setProducts} setCart={setCart} />} />
            <Route path="/:id" element={<Item products={products} setProducts={setProducts} cart={cart} setCart={setCart} />} />
            <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
      </Auth0ProviderWithHistory>
    </Router>
  );
}


//Add to cart and list the product from the product list...

export default App;

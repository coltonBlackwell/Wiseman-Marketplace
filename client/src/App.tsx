import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Checkout } from './pages/Checkout';
import './output.css';
import { useEffect, useState } from 'react';
import { Product } from './pages/Home'; // Make sure this is exported in Home.tsx

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/cart')
      .then(res => res.json())
      .then((cart: Product[]) => setCart(cart))
      .catch(err => console.error('Error fetching cart:', err));
  }, []);

  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Home setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;

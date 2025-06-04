import React, { useState, useEffect } from 'react';
import { Product } from './Home';

interface CheckoutProps {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

export function Checkout({ cart, setCart }: CheckoutProps) {
  const [isRemoving, setIsRemoving] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://wiseman-marketplace.onrender.com/api/cart')
      .then(response => response.json())
      .then((cart: Product[]) => {
        setCart(cart);
      })
      .catch(err => console.error('Error:', err));
  }, []);

  const removeProduct = (id: number) => {
    setIsRemoving(id);
    fetch(`https://wiseman-marketplace.onrender.com/api/cart/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to remove product from cart');
        }
        return response.json();
      })
      .then(data => {
        setCart(data.cart);
        setIsRemoving(null);
      })
      .catch(err => {
        console.error('Error:', err);
        setIsRemoving(null);
      });
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-teal-800 mb-6">Your Cart</h1>
      
      {cart.length === 0 ? (
        <div className="bg-teal-50 rounded-lg p-6 text-center">
          <p className="text-teal-700 text-lg">Your cart is empty</p>
          <a href="/" className="text-teal-600 hover:text-teal-800 inline-flex items-center mt-2">
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Cart Items Table */}
          <div className="divide-y divide-gray-200">
            {/* Table Header - Desktop Only */}
            <div className="hidden md:grid grid-cols-12 bg-teal-600 text-white p-4">
              <div className="col-span-6 md:col-span-8 font-medium">Product</div>
              <div className="col-span-3 md:col-span-2 font-medium text-right">Price</div>
              <div className="col-span-3 md:col-span-2 font-medium text-right">Action</div>
            </div>
            
            {/* Cart Items */}
            {cart.map(product => (
              <div key={product.id} className="grid grid-cols-6 md:grid-cols-12 p-4 hover:bg-teal-50 transition-colors">
                {/* Product Name - Full width on mobile, 8 cols on desktop */}
                <div className="col-span-3 md:col-span-8 flex items-center">
                  <span className="font-medium text-teal-800">{product.name}</span>
                </div>
                
                {/* Price - Right aligned with label on mobile */}
                <div className="col-span-3 md:col-span-2 flex items-center justify-end">
                  <div className="flex flex-col md:block">
                    <span className="md:hidden text-xs text-gray-500">Price</span>
                    <span className="text-gray-700">${product.price.toFixed(2)}</span>
                  </div>
                </div>
                
                {/* Remove Button - Full width on mobile, 2 cols on desktop */}
                <div className="col-span-6 mt-2 md:mt-0 md:col-span-2 flex items-center justify-end">
                  <button
                    onClick={() => removeProduct(product.id)}
                    disabled={isRemoving === product.id}
                    className={`w-full md:w-auto px-3 py-1 rounded-md text-sm font-medium ${
                      isRemoving === product.id
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        : 'bg-red-100 text-red-700 hover:bg-red-200'
                    } transition-colors duration-300`}
                  >
                    {isRemoving === product.id ? 'Removing...' : 'Remove'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">Total:</span>
              <span className="text-xl font-bold text-teal-700">${calculateTotal().toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
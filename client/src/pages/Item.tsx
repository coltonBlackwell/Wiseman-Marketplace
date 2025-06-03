import React, { useState } from 'react';
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
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  if (!product) {
    return <div className="p-8 text-center text-red-500">Product not found.</div>;
  }

  const addToCart = () => {
    fetch(`http://localhost:4000/api/cart/${product.id}`, {
      method: 'POST',
    })
      .then(res => res.json())
      .then(data => {
        setCart(data.cart);
        setProducts(prev =>
          prev.map(p =>
            p.id === product.id ? { ...p, inCart: true } : p
          )
        );
      })
      .catch(err => console.error('Error adding to cart:', err));
  };

  const productImages = [
    product.imageUrl,
    product.featurePhoto1?.startsWith('http') 
      ? product.featurePhoto1 
      : `http://localhost:4000${product.featurePhoto1}`,
    product.featurePhoto2?.startsWith('http') 
      ? product.featurePhoto2 
      : `http://localhost:4000${product.featurePhoto2}`
  ].filter(Boolean);

  const handleThumbnailClick = (index: number) => {
    setMainImageIndex(index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Image Gallery */}
        <div className="space-y-4">
          {/* Main Image - Square and Clickable */}
          <div 
            className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square max-h-96 mx-auto cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <img
              src={productImages[mainImageIndex]}
              alt={`Main view of ${product.name}`}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                console.error('Failed to load main product image');
              }}
            />
          </div>

          {/* Thumbnails - Horizontal Row */}
          <div className="flex justify-center gap-3">
            {productImages.map((img, index) => (
              <div
                key={index}
                className={`w-24 h-24 cursor-pointer border-2 rounded overflow-hidden transition-all ${
                  index === mainImageIndex 
                    ? 'border-teal-500' 
                    : 'border-transparent hover:border-teal-400'
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={img}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    console.error('Failed to load thumbnail', img);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
          <p className="text-2xl text-teal-600">${product.price.toFixed(2)}</p>

          {/* Details as bullet points */}
          {product.details && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Product Details:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {product.details
                  .split('-')
                  .map(detail => detail.trim())
                  .filter(Boolean)
                  .map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
              </ul>
            </div>
          )}

          <button
            onClick={addToCart}
            disabled={product.inCart}
            className={`px-6 py-3 rounded-md font-medium ${
              product.inCart
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-teal-600 text-white hover:bg-teal-700'
            } transition-colors duration-300`}
          >
            {product.inCart ? 'Added to Cart' : 'Add to Cart'}
          </button>

          <div className="pt-6">
            <Link 
              to="/" 
              className="text-teal-600 hover:text-teal-800 inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative max-w-4xl w-full px-4">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full px-3 py-1"
            >
              ×
            </button>
            <img
              src={productImages[mainImageIndex]}
              alt="Enlarged product"
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Item;

import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import products from '../data/products';

const ProductListingPage = () => {
  const dispatch = useDispatch();

  const grouped = {
    "Aromatic Plants": products.filter(p => p.category === "Aromatic Plants"),
    "Medicinal Plants": products.filter(p => p.category === "Medicinal Plants"),
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🌿 Our Plants</h2>

      {Object.entries(grouped).map(([category, items]) => (
        <div key={category}>
          <h3 style={{ marginTop: '2rem' }}>{category}</h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2rem',
          }}>
            {items.map((product) => (
              <div key={product.id} style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '1rem',
                width: '200px',
                backgroundColor: '#f9fafb'
              }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                <h4>{product.name}</h4>
                <p style={{ fontSize: '0.9rem' }}>{product.description}</p>
                <p><strong>${product.price}</strong></p>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  style={{
                    backgroundColor: '#4ade80',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;

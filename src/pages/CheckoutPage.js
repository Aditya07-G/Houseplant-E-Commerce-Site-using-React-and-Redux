import React from 'react';
import { useSelector } from 'react-redux';

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Thank you for shopping with Paradise Nursery! 🌱</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items to your cart before checking out.</p>
      ) : (
        <div>
          <h3>Your Bill</h3>
          <div>
            {cartItems.map((item) => (
              <div key={item.id} style={{
                borderBottom: '1px solid #ccc',
                padding: '1rem 0',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span>{item.name} x {item.quantity}</span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <h3 style={{ marginTop: '2rem' }}>Total: ${totalPrice}</h3>

          <div style={{ marginTop: '3rem' }}>
            <button
              onClick={() => window.location.href = "/"}
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: '#4ade80',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Go to Homepage
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;

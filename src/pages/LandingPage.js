import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f0fdf4',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌱 Welcome to Paradise Nursery 🌿</h1>
      <p style={{ maxWidth: '600px', marginBottom: '2rem' }}>
        Explore a handpicked collection of aromatic and medicinal plants to liven up your home and soothe your soul.
      </p>
      <Link to="/products">
        <button style={{
          fontSize: '1.2rem',
          padding: '0.75rem 2rem',
          borderRadius: '8px',
          backgroundColor: '#4ade80',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}>
          Shop Now
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;

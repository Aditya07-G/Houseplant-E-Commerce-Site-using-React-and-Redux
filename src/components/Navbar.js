import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <nav style={{
      background: '#34d399',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <h2><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Paradise Nursery</Link></h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

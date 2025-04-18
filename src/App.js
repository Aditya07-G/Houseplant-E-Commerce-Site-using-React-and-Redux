import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>

      <footer style={{
        textAlign: 'center',
        padding: '1rem',
        background: '#e0f2fe',
        fontSize: '0.9rem',
        marginTop: '2rem'
      }}>
        © 2025 Paradise Nursery 🌼 All rights reserved.
      </footer>
    </Router>
  );
}

export default App;


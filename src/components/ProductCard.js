import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      margin: '1rem',
      borderRadius: '8px',
      width: '250px',
      backgroundColor: '#f0fdf4'
    }}>
      <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <p><strong>${plant.price}</strong></p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'; 
import { Link } from 'react-router-dom'; 

const ProductItem = ({ id, name, image, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link 
      to={`/product/${id}`} 
      style={{ color: '#4B5563', cursor: 'pointer', textDecoration: 'none' }}
    >
      <div style={{ overflow: 'hidden', height: '250px' }}>
        <img 
          src={image} 
          alt={name} 
          style={{ 
            transition: 'transform 0.3s ease-in-out', 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' // Ensure the image covers the container
          }} 
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
      <p style={{ paddingTop: '0.75rem', paddingBottom: '0.25rem', fontSize: '0.875rem' }}>{name}</p>
      <p style={{ fontSize: '0.875rem', fontWeight: '500' }}>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
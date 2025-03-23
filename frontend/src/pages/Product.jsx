import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');

  const fetchProductData = () => {
    const product = products.find(item => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div style={{ borderTop: '2px solid', paddingTop: '2.5rem', transition: 'opacity 0.5s ease-in', opacity: 1 }}>
      <div style={{ display: 'flex', gap: '3rem', flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>
          <img src={image} style={{ width: '100%', height: 'auto' }} alt='' />
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontWeight: '500', fontSize: '2rem', marginTop: '0.5rem' }}>{productData.name}</h1>
          <p style={{ marginTop: '1.25rem', fontSize: '3rem', fontWeight: '500' }}>{currency}{productData.price}</p>
          <p style={{ marginTop: '1.25rem', fontSize: '1.5rem', fontWeight: '100' }}>{productData.description}</p>
          <button style={{ backgroundColor: 'black', color: 'white', padding: '0.75rem 2rem', fontSize: '0.875rem', cursor: 'pointer', border: 'none', borderRadius: '0.25rem', marginTop: '1.25rem' }}>
            Add to Cart
          </button>
          <hr style={{marginTop:'45px'}}/>
        </div>
      </div>
    </div>
  ) : <div style={{ opacity: 0 }} />;
};

export default Product;
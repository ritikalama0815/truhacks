import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title' // Assuming you have a Title component for the title
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (Array.isArray(products)) {
      setLatestProducts(products.slice(0, 8)); // Adjust the number of products to display
    }
  }, [products])

  return (
    <div style={{ margin: '2.5rem 0' }}>
      <div style={{ textAlign: 'center', padding: '2rem 0', fontSize: '1.875rem' }}>
        <Title text1={'Latest'} text2={'Collections'} />
        <p style={{ width: '75%', margin: 'auto', fontSize: '16px', color: '#4b5563' }}>
          My name is Ritika lama huhuhu
        </p>
      </div>
      {/* rendering products */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', rowGap: '1.5rem' }}>
        {latestProducts.map((item, index) => (
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  )
}

export default LatestCollection
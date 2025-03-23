import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Orders = () => {
  const { products, currency } = useContext(ShopContext)
  return (
    <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '4rem' }}>
      <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
        <Title text1={'My'} text2={'orders'} />
      </div>
      <div>
        {
          products.slice(1, 4).map((item, index) => (
            <div key={index} style={{ padding: '1rem 0', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB', color: '#4B5563', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '1.5rem' }}>
                <img style={{ width: '9rem' }} src={item.image[0]} alt="" />
                <div>
                  <p style={{ fontWeight: '500' }}>{item.name}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem', fontSize: '1rem', color: '#4B5563' }}>
                    <p>{currency}{item.price}</p>
                    <p>Quantity: 1</p>
                  </div>
                  <p style={{ marginTop: '0.5rem' }}>Date: <span style={{ color: '#6B7280' }}>7238163</span></p>
                  <p style={{ marginTop: '0.5rem' }}>Ready to pack!</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
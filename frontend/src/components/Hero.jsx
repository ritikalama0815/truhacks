import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid #D1D5DB', padding: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ flex: '1', color: '#414141', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
          <p style={{ width: '32px', height: '2px', backgroundColor: '#414141' }}></p>
          <p style={{ fontSize: '0.875rem', fontWeight: '600' }}>Our Best Collections</p>
        </div>
        <h1 style={{ fontSize: '2.25rem', lineHeight: '2.5rem', marginBottom: '16px' }}>Latest Collections</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <p style={{ fontWeight: '600', fontSize: '0.875rem', cursor: 'pointer' }}>Shop Now</p>
          <p style={{ width: '32px', height: '2px', backgroundColor: '#414141' }}></p>
        </div>
      </div>
      <img src={assets.hero_img} alt='' style={{ flex: '1', width: '40%', maxWidth: '40%' }} />
    </div>
  )
}

export default Hero
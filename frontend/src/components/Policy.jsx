import React from 'react'
import { assets } from '../assets/assets'

const Policy = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', gap: '3rem', textAlign: 'center', padding: '5rem 0', fontSize: '0.75rem', color: '#4B5563' }}>
      <div style={{ flex: '1' }}>
        <img src={assets.exchange} style={{ width: '4rem', margin: '0 auto 1.25rem' }} alt='' />
        <p style={{ fontWeight: '600', fontSize: '29px' }}>Easy Exchange</p>
        <p style={{ color: '#9CA3AF', fontSize: '19px' }}>Stress free exchange policy valid within 30 days of delivery.</p>
      </div>
      <div style={{ flex: '1' }}>
        <img src={assets.support} style={{ width: '4rem', margin: '0 auto 1.25rem' }} alt='' />
        <p style={{ fontWeight: '600', fontSize: '29px' }}>Friendly Customer Service</p>
        <p style={{ color: '#9CA3AF', fontSize: '19px' }}>7 days a week, from 8AM-8PM</p>
      </div>
    </div>
  )
}

export default Policy
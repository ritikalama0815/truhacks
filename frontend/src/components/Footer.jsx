import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '3.5rem', margin: '2.5rem 0', marginTop: '0rem', fontSize: '0.875rem' }}>
        <div style={{ textAlign: 'left', width: '50%' }}>
          <img src={assets.logo} alt='' style={{ width: '8rem', marginTop: '1.25rem' }} />
          <p style={{ color: '#6B7280' }}>
            Discover eco-friendly products at affordable prices! 
            <br></br>Our collection features sustainable alternatives, from biodegradable essentials to reusable everyday 
            <br></br>items—all designed to help you reduce waste without overspending. 
            <br></br>Shop responsibly and make a positive impact on the planet without compromising your budget
          </p>
        </div>
        <div style={{ textAlign: 'left', marginRight: '30px' }}>
          <p style={{ fontSize: '1.25rem', fontWeight: '500', marginTop: '1.25rem' }}>Company</p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', color: '#4B5563' }}>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <p style={{ fontSize: '1.25rem', fontWeight: '500', marginTop: '1.25rem' }}>Contact here</p>
          <ul>
            <li>+1-234-4567</li>
            <li>contact@meow.com</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
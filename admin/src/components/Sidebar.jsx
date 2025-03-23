import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div style={{ width: '250px', height: '100vh', position: 'fixed', top: 0, left: 0, backgroundColor: '#f8f9fa', padding: '1rem', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
      {/* Logo Container */}
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <img
          src={assets.logo} // Ensure you have the correct path to your logo
          alt=""
          style={{ width: '450px', height: 'auto' }} // Adjust the size as needed
        />
      </div>
      {/* Navigation Links */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <NavLink
          to="/add"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem', // Equivalent to gap-3 (12px)
            border: '1px solid #d1d5db', // Equivalent to border-gray-300
            borderRight: 'none', // Equivalent to border-r-0
            padding: '0.5rem 0.75rem', // Equivalent to px-3 (12px) and py-2 (8px)
            borderTopLeftRadius: '9999px', // Equivalent to rounded-l (only left corners rounded)
            borderBottomLeftRadius: '9999px',
          }}
        >
          <img
            src={assets.add}
            alt=""
            style={{
              width: '1.25rem', // Equivalent to w-5 (20px)
              height: '1.25rem', // Equivalent to h-5 (20px)
            }}
          />
          <p style={{ display: 'block' }}>Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem', // Equivalent to gap-3 (12px)
            border: '1px solid #d1d5db', // Equivalent to border-gray-300
            borderRight: 'none', // Equivalent to border-r-0
            padding: '0.5rem 0.75rem', // Equivalent to px-3 (12px) and py-2 (8px)
            borderTopLeftRadius: '9999px', // Equivalent to rounded-l (only left corners rounded)
            borderBottomLeftRadius: '9999px',
          }}
        >
          <img
            src={assets.order_icon}
            alt=""
            style={{
              width: '2rem', // Equivalent to w-5 (20px)
              height: '2rem', // Equivalent to h-5 (20px)
            }}
          />
          <p style={{ display: 'block' }}>List</p>
        </NavLink>
        <NavLink
          to="/orders"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem', // Equivalent to gap-3 (12px)
            border: '1px solid #d1d5db', // Equivalent to border-gray-300
            borderRight: 'none', // Equivalent to border-r-0
            padding: '0.5rem 0.75rem', // Equivalent to px-3 (12px) and py-2 (8px)
            borderTopLeftRadius: '9999px', // Equivalent to rounded-l (only left corners rounded)
            borderBottomLeftRadius: '9999px',
          }}
        >
          <img
            src={assets.order_icon}
            alt=""
            style={{
              width: '2rem', // Equivalent to w-5 (20px)
              height: '2rem', // Equivalent to h-5 (20px)
            }}
          />
          <p style={{ display: 'block' }}>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
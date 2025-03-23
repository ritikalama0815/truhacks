import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5rem 4%', // py-2 (8px) and px-[4%]
  }}
>
  <img
    src={assets.logo}
    alt=""
    style={{
      width: "2px", // Equivalent to w-max(10%, 80px)
    }}
  />
  <button
    onClick={()=>setToken('')}
    style={{
      backgroundColor: '#4b5563', // Equivalent to bg-gray-600
      color: 'white',
      padding: '0.5rem 1.25rem', // px-5 (20px) and py-2 (8px)
      borderRadius: '9999px', // rounded-full
      fontSize: '0.75rem', // text-xs (12px)
    }}
  >
    Logout
  </button>
</div>

  )
}

export default Navbar

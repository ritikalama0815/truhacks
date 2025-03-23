import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import "../index.css"

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const {setShowSearch} = useContext(ShopContext);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', fontWeight: '500', marginRight: '50px' }}>
      
      <Link to='/' ><img src={assets.logo} style={{ width: '125px', height: '125px', marginLeft: '50px' }} alt="Logo" /></Link>
      
      <ul style={{ display: 'flex', gap: '20px', fontSize: '0.875rem', color: '#4B5563' }}>
        <NavLink to='/' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', fontSize: '20px' }}>
          <p>Home</p>
          <hr style={{ width: '50%', border: 'none', height: '1.5px', backgroundColor: '#4B5563' }} />
        </NavLink>
        <NavLink to='/collection' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', fontSize: '20px' }}>
          <p>Collections</p>
          <hr style={{ width: '50%', border: 'none', height: '1.5px', backgroundColor: '#4B5563' }} />
        </NavLink>
        <NavLink to='/contact' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', fontSize: '20px' }}>
          <p>Contact</p>
          <hr style={{ width: '50%', border: 'none', height: '1.5px', backgroundColor: '#4B5563' }} />
        </NavLink>
        <NavLink to='/about' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', fontSize: '20px' }}>
          <p>About</p>
          <hr style={{ width: '50%', border: 'none', height: '1.5px', backgroundColor: '#4B5563' }} />
        </NavLink>
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <img onClick={()=>setShowSearch(true)}src={assets.search_icon} style={{ width: '59px', height: '57px', cursor: 'pointer' }} alt="" />
        <div style={{ position: 'relative' }}>
          <img
            src={assets.profile_icon}
            style={{ width: '45px', height: '44px', cursor: 'pointer' }}
            alt=""
            onClick={() => setDropdownVisible(!dropdownVisible)}
          />
          {dropdownVisible && (
            <div
              style={{
                display: 'block',
                position: 'absolute',
                right: 0,
                paddingTop: '1rem',
              }}
              className="dropdown-menu"
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  width: '9rem',
                  padding: '0.75rem 45px',
                  backgroundColor: '#f1f5f9', // slate-100
                  color: '#6b7280', // gray-500
                  borderRadius: '0.375rem',
                }}
              >
                <p
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={(e) => (e.target.style.color = 'black')}
                  onMouseLeave={(e) => (e.target.style.color = '#6b7280')}
                >
                  Profile
                </p>
                <p
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={(e) => (e.target.style.color = 'black')}
                  onMouseLeave={(e) => (e.target.style.color = '#6b7280')}
                >
                  Orders
                </p>
                <p
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={(e) => (e.target.style.color = 'black')}
                  onMouseLeave={(e) => (e.target.style.color = '#6b7280')}
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" style={{ position: 'relative' }}>
            <img
                src={assets.cart_icon}
                alt=""
                style={{ width: '45px', minWidth: '45px' }} // w-5 and min-w-5 in Tailwind
            />
            <p
                style={{
                    position: 'absolute',
                    right: '-5px',
                    bottom: '-5px',
                    width: '1rem', // w-4 (16px)
                    textAlign: 'center',
                    lineHeight: '1rem', // leading-4 (16px)
                    backgroundColor: 'black',
                    color: 'white',
                    aspectRatio: '1 / 1',
                    borderRadius: '9999px', // rounded-full
                    fontSize: '10px',
                }}
                > 10</p>

        </Link>
        
     </div>
     
    </div>
  )
}

export default Navbar
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false)
  const location = useLocation();

  useEffect(() => {
    if(location.pathname.includes('collection')){
        setVisible(true);
    }else{
        setVisible(false);
    }
  }, [location])

  return showSearch && visible ? (
    <div style={{ borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB', backgroundColor: '#F9FAFB', textAlign: 'center' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #D1D5DB', padding: '0.5rem 1.25rem', margin: '1.25rem 0.75rem', borderRadius: '9999px', width: '75%' }}>
        <input 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          style={{ flex: '1', outline: 'none', backgroundColor: 'inherit', fontSize: '0.875rem' }} 
          type="text" 
          placeholder='Search' 
        />
        <img style={{ width: '1rem' }} src={assets.search_icon} alt='' />
      </div>
      <img 
        onClick={() => setShowSearch(false)} 
        style={{ display: 'inline', width: '29px', cursor: 'pointer' }} 
        src={assets.cross} 
        alt='' 
      />
    </div>
  ) : null;
}

export default SearchBar
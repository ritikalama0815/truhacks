import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5.5rem', paddingTop: '2.5rem', borderTop: '1px solid #E5E7EB' }}>
      <div style={{ minWidth: '15rem' }}>
        <p 
          style={{ margin: '0.5rem 0', fontSize: '1.25rem', display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '0.5rem' }}
          onClick={() => setShowFilter(!showFilter)}
        >
          Filters <img src={assets.menu_icon} style={{ height: '0.75rem', transform: showFilter ? 'rotate(90deg)' : 'none' }} alt=''/>
        </p>
        <div style={{ border: '1px solid #D1D5DB', paddingLeft: '1.25rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', marginTop: '1.5rem', display: showFilter ? 'block' : 'none' }}>
          <p style={{ marginBottom: '0.75rem', fontSize: '0.875rem', fontWeight: '500' }}>Categories</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', fontWeight: '300', color: '#4B5563' }}>
            <p style={{ display: 'flex', gap: '0.5rem' }}>
              <input type='checkbox' style={{ width: '0.75rem', height: '0.75rem' }} value={'Kitchen'} />Kitchen
            </p>
            <p style={{ display: 'flex', gap: '0.5rem' }}>
              <input type='checkbox' style={{ width: '0.75rem', height: '0.75rem' }} value={'Electronics'} />Electronics
            </p>
            <p style={{ display: 'flex', gap: '0.5rem' }}>
              <input type='checkbox' style={{ width: '0.75rem', height: '0.75rem' }} value={'Care'} />Personal Care
            </p>
            <p style={{ display: 'flex', gap: '0.5rem' }}>
              <input type='checkbox' style={{ width: '0.75rem', height: '0.75rem' }} value={'Mis'} />Miscellaneous
            </p>
            <p style={{ display: 'flex', gap: '0.5rem' }}>
              <input type='checkbox' style={{ width: '0.75rem', height: '0.75rem' }} value={'Fashion'} />Fashion
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-base mb-4">
            <Title text1={'All'} text2={'Collections'}/>
            <select >
              <option></option>
              <option></option>
              <option></option>
            </select>
        </div>

      </div>
    </div>
  )
}

export default Collection
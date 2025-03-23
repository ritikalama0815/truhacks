import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from "../components/Title"
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate} = useContext(ShopContext)
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const temp = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          temp.push({
            _id: items, quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(temp); // Update the cartData state with the temp array
  }, [cartItems])

  const handleQuantityChange = (id, value) => {
    if (value === '' || value === '0') return;
    updateQuantity(id, Number(value));
  };

  return (
    <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '3.5rem' }}>
      <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
        <Title text1={'Your'} text2={'Cart'}/>
      </div>
      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            return (
              <div key={index} style={{ padding: '1rem 0', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB', color: '#4B5563', display: 'grid', gridTemplateColumns: '4fr 0.5fr 0.5fr', alignItems: 'center', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: '1.5rem' }}>
                  <img style={{ width: '250px', height: '230px' }} src={productData.image[0]} alt="" />
                  <div>
                    <p style={{ fontSize: '0.75rem', fontWeight: '500' }}>{productData.name}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginTop: '0.5rem' }}>
                      <p>{currency}{productData.price}</p>
                    </div>
                  </div>
                </div>
                <input 
                  onChange={(e) => handleQuantityChange(item._id, e.target.value)} 
                  style={{ border: '1px solid #E5E7EB', maxWidth: '75px', padding: '0.25rem 0.5rem' }} 
                  type="number" 
                  min={1} 
                  defaultValue={item.quantity} 
                />
                <img 
                  onClick={() => updateQuantity(item._id, 0)} 
                  style={{ width: '45px', marginRight: '1rem', cursor: 'pointer' }} 
                  src={assets.bin} 
                  alt='' 
                />
              </div>
            )
          })
        }
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '5rem 0', marginRight: "35px"}}>
        <div style={{ width: '50%' }}>
          <CartTotal/>
          <div
            style={{
              width: '100%', // Equivalent to w-full
              textAlign: 'end', // Equivalent to text-end (right-align text)
            }}
          >

            <button onClick = {() => navigate('/place-order')} style={{
                  backgroundColor: 'black',
                  color: 'white',
                  fontSize: '0.875rem', // Equivalent to text-sm (14px)
                  margin: '8px', // Assuming my-8 means margin on top & bottom
                  padding: '0.75rem 2rem', // px-8 (32px) and py-3 (12px)
                }}>Proceed to CheckOut</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
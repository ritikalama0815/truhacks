import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import {assets} from '../assets/assets' // Adjust the path as needed
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const[method, setMethod] = useState('')
  const {navigate} = useContext(ShopContext)
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between', // Align items to the sides
        gap: '1rem', // Equivalent to gap-4 (16px)
        paddingTop: '1.25rem', // Equivalent to pt-5 (20px)
        minHeight: '80vh', // Equivalent to min-h-[80vh]
        borderTop: '1px solid #ccc', // Equivalent to border-t (default Tailwind border color)
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem', // Equivalent to gap-4 (16px)
          width: '60%', // Adjust width as needed
        }}
      >
        <div
          style={{
            fontSize: '1.25rem', // Equivalent to text-xl (20px)
            margin: '0.75rem 0', // Equivalent to my-3 (12px top & bottom)
          }}
        >
          <Title text1={'Orders'} text2={'Information'}/>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '0.75rem', // Equivalent to gap-3 (12px)
          }}
        >
          <input
            type="text"
            placeholder="First Name"
            style={{
              border: '1px solid #000000', // Equivalent to border-gray-300
              borderRadius: '0.375rem', // Equivalent to rounded
              padding: '0.375rem 0.875rem', // Equivalent to py-1.5 (6px) and px-3.5 (14px)
              width: '50%', // Adjust width as needed
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            style={{
              border: '1px solid #000000', // Equivalent to border-gray-300
              borderRadius: '0.375rem', // Equivalent to rounded
              padding: '0.375rem 0.875rem', // Equivalent to py-1.5 (6px) and px-3.5 (14px)
              width: '50%', // Adjust width as needed
            }}
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          style={{
            border: '1px solid #000000', // Equivalent to border-gray-300
            borderRadius: '0.375rem', // Equivalent to rounded
            padding: '0.375rem 0.875rem', // Equivalent to py-1.5 (6px) and px-3.5 (14px)
            width: '100%', // Adjust width as needed
          }}
        />
        <input
          type="text"
          placeholder="Full Address"
          style={{
            border: '1px solid #000000', // Equivalent to border-gray-300
            borderRadius: '0.375rem', // Equivalent to rounded
            padding: '0.375rem 0.875rem', // Equivalent to py-1.5 (6px) and px-3.5 (14px)
            width: '100%', // Adjust width as needed
          }}
        />
        <input
          type="number"
          placeholder="Phone Number"
          style={{
            border: '1px solid #000000', // Equivalent to border-gray-300
            borderRadius: '0.375rem', // Equivalent to rounded
            padding: '0.375rem 0.875rem', // Equivalent to py-1.5 (6px) and px-3.5 (14px)
            width: '100%', // Adjust width as needed
          }}
        />
      </div>
      <div style={{ width: '35%', marginTop: '35px', marginRight:'25px' }}>
        <CartTotal/>
        <div style={{ marginTop: '3rem' }}>
          <Title text1={'Payment'} text2={'method'}/>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column', // Equivalent to flex-col
              gap: '0.75rem', // Equivalent to gap-3 (12px)
            }}
          >
            <div
                style={{
                  display: 'flex',
                  alignItems: 'center', // Equivalent to items-center
                  gap: '0.75rem', // Equivalent to gap-3 (12px)
                  border: '1px solid', // Equivalent to border (default color depends on context)
                  padding: '0.5rem 0.75rem', // Equivalent to p-2 (8px) and px-3 (12px)
                  cursor: 'pointer', // Equivalent to cursor-pointer
                }} onClick={()=> setMethod('card')}
              >

                    <p
                    style={{
                      minWidth: '0.875rem', // Equivalent to min-w-3.5 (14px)
                      height: '0.875rem', // Equivalent to h-3.5 (14px)
                      border: '1px solid', // Equivalent to border (default color depends on context)
                      borderRadius: '50%',
                      backgroundColor: method === 'card' ? 'green' : 'transparent', 
                    }}
                  ></p>

                  <img
                    src={assets.card}
                    alt=""
                    style={{
                      height: '70px', // Equivalent to h-5 (20px)
                      margin: '0 1rem', // Equivalent to mx-4 (16px left & right)
                    }}
                  />
            </div>

          </div>
          <div className="w-full text-end mt-8">
          <button onClick = {() => navigate('/orders')} style={{
                  backgroundColor: 'black',
                  color: 'white',
                  fontSize: '0.875rem', // Equivalent to text-sm (14px)
                  margin: '8px', // Assuming my-8 means margin on top & bottom
                  padding: '0.75rem 2rem', // px-8 (32px) and py-3 (12px)
                }}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
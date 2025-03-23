import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from "../components/Title"

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext)
  return (
    <div style={{ width: '100%' }}>
      <div style={{ fontSize: '1.5rem' }}>
        <Title text1={'Cart'} text2={'Totals'} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem', fontSize: '0.875rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>Subtotal</p>
          <p>{currency}{getCartAmount()}</p>
        </div>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>Shipping Fee</p>
          <p>{currency}{delivery_fee}</p>
        </div>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <b>Total</b>
          <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div style={{ display: 'inline-flex', gap: '8px', alignItems: 'center', marginBottom: '12px' }}>
      <p style={{ color: '#6B7280' }}>
        {text1} <span style={{ color: '#374151', fontWeight: '500' }}>{text2}</span>
      </p>
      <p style={{ width: '32px', height: '1px', backgroundColor: '#374151' }}></p>
    </div>
  )
}

export default Title
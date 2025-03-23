import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up')

  const onSubmitHandler = async(e) =>{
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90%', margin: 'auto', marginTop: '3.5rem', gap: '1rem', color: '#4B5563' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', marginTop: '2.5rem' }}>
        <p style={{ fontSize: '1.875rem' }}>{currentState}</p>
        <hr style={{ border: 'none', height: '1.5px', width: '2rem', backgroundColor: '#4B5563' }}/>
      </div>
      {currentState === "Login" ? '' : <input type="text" style={{ width: '100%', padding: '0.5rem 0.75rem', border: '1px solid #4B5563' }} placeholder='Name' required />}
      <input type="email" style={{ width: '100%', padding: '0.5rem 0.75rem', border: '1px solid #4B5563' }} placeholder='Email' required />
      <input type="password" style={{ width: '100%', padding: '0.5rem 0.75rem', border: '1px solid #4B5563' }} placeholder='Password' required />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginTop: '-0.5rem' }}>
        {
          currentState === 'Login'
          ? <p onClick={() => setCurrentState('SignUp')} style={{ cursor: 'pointer', fontSize: "18px" }}>Create Account?</p>
          : <p onClick={() => setCurrentState('Login')} style={{ cursor: 'pointer', fontSize: "18px" }}>Login Instead?</p>
        }
      </div>
      <button style={{ backgroundColor: 'black', color: 'white', fontWeight: '300', padding: '0.5rem 2rem', marginTop: '1rem' }}>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
import axios from 'axios';
import React, { useState } from 'react';
import { backendUrl } from '../App';
import {toast} from 'react-toastify'

const Login = ({setToken}) => {

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    const onSubmitHandler= async(e) =>{
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl+ '/api/user/admin', {email,password})
            if(response.data.success){
                setToken(response.data.token)
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
  return (
    <div
      style={{
        minHeight: '100vh', // Equivalent to min-h-screen
        display: 'flex', // Equivalent to flex
        alignItems: 'center', // Equivalent to items-center
        justifyContent: 'center', // Equivalent to justify-center
        width: '100%', // Equivalent to w-full
      }}
    >
      <div
        style={{
          backgroundColor: 'white', // Equivalent to bg-white
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Equivalent to shadow-md
          borderRadius: '8px', // Equivalent to rounded-lg
          padding: '1.5rem 2rem', // Equivalent to px-8 py-6
          maxWidth: '28rem', // Equivalent to max-w-md
          width: '100%', // Ensures responsiveness
        }}
      >
        <h1
          style={{
            fontSize: '1.5rem', // Equivalent to text-2xl
            fontWeight: 'bold', // Equivalent to font-bold
            marginBottom: '1rem', // Equivalent to mb-4
          }}
        >
          Admin Panel
        </h1>
        <form onSubmit={onSubmitHandler}>
          <div
            style={{
              marginBottom: '0.75rem', // Equivalent to mb-3
              minWidth: '18rem', // Equivalent to min-w-72
            }}
          >
            <p
              style={{
                fontSize: '0.875rem', // Equivalent to text-sm
                fontWeight: '500', // Equivalent to font-medium
                color: '#1f2937', // Equivalent to text-gray-800
                marginBottom: '0.5rem', // Equivalent to mb-2
              }}
            >
              Email Address
            </p>
            <input
              onChange={(e) =>setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              required
              style={{
                borderRadius: '6px', // Equivalent to rounded-md
                width: '100%', // Equivalent to w-full
                padding: '0.5rem 0.75rem', // Equivalent to px-3 py-2
                border: '1px solid #9ca3af', // Equivalent to border-gray-400
                outline: 'none',
              }}
            />
          </div>
          <div
            style={{
              marginBottom: '0.75rem', // Equivalent to mb-3
              minWidth: '18rem', // Equivalent to min-w-72
            }}
          >
            <p
              style={{
                fontSize: '0.875rem', // Equivalent to text-sm
                fontWeight: '500', // Equivalent to font-medium
                color: '#1f2937', // Equivalent to text-gray-800
                marginBottom: '0.5rem', // Equivalent to mb-2
              }}
            >
              Password
            </p>
            <input
            onChange={(e) =>setPassword(e.target.value)}
            value={password}
              type="password"
              placeholder="Password"
              required
              style={{
                borderRadius: '6px', // Equivalent to rounded-md
                width: '100%', // Equivalent to w-full
                padding: '0.5rem 0.75rem', // Equivalent to px-3 py-2
                border: '1px solid #9ca3af', // Equivalent to border-gray-400
                outline: 'none',
              }}
            />
          </div>
          <button
            style={{
              marginTop: '0.5rem', // Equivalent to mt-2
              width: '100%', // Equivalent to w-full
              padding: '0.5rem 1rem', // Equivalent to py-2 px-4
              borderRadius: '6px', // Equivalent to rounded-md
              color: 'white', // Equivalent to text-white
              backgroundColor: 'black', // Equivalent to bg-black
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

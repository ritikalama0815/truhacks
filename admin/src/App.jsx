import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import List from './pages/List';
import Orders from './pages/Orders';
import Add from './pages/Add';
import Login from './components/Login';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token'): '')

  useEffect(()=>{
    localStorage.setItem('token', token)
  }, [token])


  return (
    <div
      style={{
        backgroundColor: '#f9fafb', // Equivalent to bg-gray-50
        minHeight: '100vh', // Equivalent to min-h-screen
      }}
    > <ToastContainer/>
      {token ===""
      ? <Login setToken={setToken}/>
    :
      <>
        <Navbar  setToken= {setToken}/>
        <hr />
        <div
          style={{
            display: 'flex',
            width: '100%', // Equivalent to w-full
          }}
        >
          <Sidebar />
          <div
            style={{
              width: '70%', // Equivalent to w-[70%]
              margin: '2rem auto', // Equivalent to mx-auto my-8
              marginLeft: 'max(5vw, 25px)', // Equivalent to ml-[max(5vw,25)]
              color: '#6b7280', // Equivalent to text-gray-500
              fontSize: '1rem', // Equivalent to text-base
            }}
          >
            <Routes>
              <Route path='/add' element={<Add token={token}/>} />
              <Route path='/list' element={<List token={token}/>} />
              <Route path='/orders' element={<Orders token={token}/>} />
            </Routes>
          </div>
        </div>
      </>
}
    </div>
  );
};

export default App;

import React from 'react'
import { useLocation } from 'react-router-dom'

function Header() {
  const {pathname} = useLocation();

  const isLogin = pathname === '/Login';
  return (
    <h1 className='p-8 text-5xl'>
        {isLogin ? 'Login' : 'Register'}
    </h1>
  )
}

export default Header
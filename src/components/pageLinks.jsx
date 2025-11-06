import { useLocation, Link } from 'react-router-dom'
import React from 'react';

function pageLinks() {

    const { pathname } = useLocation();

    const isLogin = pathname === '/Login';

  return (

    
    <div className='p-5'>
        <h2>
            Dont have an account? {isLogin ? (
                <Link to="/" className='text-blue-600'>Sign up</Link>) : 
                
                (<Link to="/Login" className='text-blue-600'>Sign in</Link>)}
        </h2>
    </div>
  )
}

export default pageLinks
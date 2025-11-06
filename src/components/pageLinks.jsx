import { useLocation, Link } from 'react-router-dom'
import React from 'react';

function pageLinks() {

    const { pathname } = useLocation();

    const isLogin = pathname === '/Login';

  return (

    
    <div className='p-5'>
        <h2>
             {isLogin ? (<div>
                <span>Don't have an account? </span>
                <Link to="/" className='text-blue-600'>Sign up</Link>
             </div>) : (<div>
                <span>Already have an account? </span>
                <Link to="/Login" className='text-blue-600'>Sign in</Link>
             </div>)
                
                }
        </h2>
    </div>
  )
}

export default pageLinks
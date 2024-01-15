import { Link, useLocation } from 'react-router-dom';
import './Navigation.css'
import React from 'react';
import Context from '../context';
import { useContext } from 'react';

const Navigation = () => {

  const loc = useLocation();
  const ctx = useContext(Context);

  return (
    <div className="navigation">

      {!ctx.isSignIn && ['/signin', '/signout'].includes(loc.pathname) && < Link to="/signup" className='nav-link'>Sign Up</Link>}
      {!ctx.isSignIn && ['/signup', '/about'].includes(loc.pathname) && <Link to="/signin" className='nav-link'>Sign In</Link>}
      {ctx.isSignIn && <Link to="/signout" className='nav-link'>Sign Out</Link>}
      {ctx.isSignIn && <Link to='/Main' className='nav-link' onClick={() => ctx.setShowSearch(false)}>Search</Link>}
      <Link to="/about" className='nav-link'>About</Link>

    </div >
  )
}

export default Navigation;

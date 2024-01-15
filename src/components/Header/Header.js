import './Header.css';
// import Input from '../../blocks/Input'
import Navigation from '../Navigation/Navigation';
import React from 'react';
import Context from '../context';
import { useContext } from 'react';


const Header = () => {
  const ctx = useContext(Context);

  return (
    <div className="header">
      <>
        <h3>{ctx.isSignIn && ctx.user}</h3>
      </>
      <Navigation />

    </div>
  )
}

export default Header;

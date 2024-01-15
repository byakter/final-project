import React from "react";
import { useState } from "react";



const Context = React.createContext({
  isSignIn: false,
  setIsSignIn: (isTrue) => { },
  showSearch: true,
  setShowSearch: (isTrue) => { },
  user: '',
  setUser: (user) => { }
})

export const ContextProvider = (props) => {

  const [isSignIn, setIsSignIn] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [user, setUser] = useState('');
  return (
    <Context.Provider value={{ isSignIn, setIsSignIn, showSearch, setShowSearch, user, setUser }} >
      {props.children}
    </Context.Provider>
  )
}

export default Context;

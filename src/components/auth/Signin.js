import './Signin.css';
import Button from '../../blocks/Button';
import Input from '../../blocks/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import Context from '../context';


const Signin = () => {
  const ctx = useContext(Context);
  const [username, setUsername] = useState('')
  useEffect(() => {
    ctx.setIsSignIn(false);
  }, [ctx]);
  const nav = useNavigate()
  const onSignIn = (e) => {
    e.preventDefault()
    ctx.setIsSignIn(true)
    ctx.setUser(username)
    nav('/Main')

  }
  return (
    <form className='signin' onSubmit={onSignIn}>
      <h3>Sign in</h3>

      <Input placeholder='User Name' onChange={e => setUsername(e.target.value)} value={username} />
      <Input placeholder='Password' />
      <div>
        <Button value="Sign in" /><Link to='/signup'>or sign up</Link>
      </div>

    </form>
  )
}

export default Signin;

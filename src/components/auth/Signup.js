import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../blocks/Input';
import Button from '../../blocks/Button';
import { useState } from 'react';

const Signup = () => {
  const nav = useNavigate()
  const [data, setData] = useState({ userName: '', email: '', password: '', confirmPassword: '' })
  const onSignUP = (e) => {
    e.preventDefault()
    if (data.password !== data.confirmPassword) {
      alert('Password do not match')
      return
    }
    nav('/Signin')
  }
  return (
    <form className='signup' onSubmit={onSignUP}>
      <h3>Sign up</h3>
      <Input placeholder='User Name' value={data.userName} onChange={(e) => {
        setData({ ...data, userName: e.target.value })
      }} />
      <Input type='email' placeholder='Email' value={data.email} onChange={(e) => {
        setData({ ...data, email: e.target.value })
      }} />
      <Input placeholder='Password' value={data.password} onChange={(e) => {
        setData({ ...data, password: e.target.value })
      }} />
      <Input placeholder='Confirm Password' value={data.confirmPassword} onChange={(e) => {
        setData({ ...data, confirmPassword: e.target.value })
      }} />

      <div>
        <Button value="Sign up" /><Link to='/signin'>or sign in</Link>
      </div>
    </form>
  )
}

export default Signup;

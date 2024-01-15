import './Button.css'

const Button = ({ value, onClick = () => { } }) => {

  return (
    <span className='button'>
      <button type='submit' onClick={onClick} >{value}</button>
    </span>
  )
}

export default Button;

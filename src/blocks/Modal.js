
import './Modal.css'

const Modal = ({ show, setShow, children }) => {

  const display_none = 'none';
  const display_initial = 'initial';

  const handleClick = () => {
    setShow(false)
  }
  return (
    <div onClick={handleClick} className='modal' style={{ display: show === true ? display_initial : display_none }}>
      {children}
    </div>
  )
}

export default Modal;

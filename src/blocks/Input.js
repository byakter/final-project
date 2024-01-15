// import { useState } from 'react';
// import './Input.css'

// const Input = ({ type = 'text', value, placeholder, onChange = () => { } }) => {

//   const [isActive, setIsActive] = useState(false);

//   return (
//     <span className='input'>
//       <input
//         placeholder={placeholder}
//         type={type}
//         value={value}
//         onChange={onChange}
//         required
//         className={isActive ? 'active' : ''}
//         onFocus={() => setIsActive(true)}
//         onBlur={() => setIsActive(false)}
//       />
//     </span>
//   )
// }

// export default Input;
// Input.jsx
// Input.jsx
// Input.jsx
// Input.jsx
import React, { useState } from 'react';
import './Input.css';

const Input = ({ type = 'text', value, placeholder, onChange = () => { }, onKeyDown = () => { }, error = false }) => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  const handleKeyDown = (e) => {
    onKeyDown(e);
  }

  return (
    <div className={`input ${isActive || value ? 'active' : ''} ${error ? 'error' : ''}`}>
      <input
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}

      />
    </div>
  );
};

export default Input;

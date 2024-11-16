/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({ color, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className='text-white px-4 py-1 rounded-full shadow-lg cursor-pointer'
      onClick={onClick} 
    >
      {color}
    </button>
  );
};

export default Button;


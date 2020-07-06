import React from 'react';
import './Input.css';

const Input = ({name, handleSubmit, isFound}) => {
  return (
  <form onSubmit={handleSubmit} className="input__form">
    {!isFound ? <p className="input__notfound">Country not found</p> : ''}
    <input name={name} type="text" className="input__value"/>
    <button className="input__button" type="submit">Search for a country</button>
  </form>
  )
}

export default Input
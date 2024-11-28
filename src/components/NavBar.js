import React from 'react'
import './NavBar.css';
import { useSelector } from 'react-redux';
function NavBar() {
  const count = useSelector((state) => state.counter.value)

  return (
    <div className='navbar'>
      <h1>Count {count}</h1>
    </div>
  )
}

export default NavBar

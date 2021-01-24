import React from 'react'
import './css/Logo.css'
import {Link} from "react-router-dom";

function Logo() {
  return (
    <div className='logo'>
      <Link to='/'><span className='first'>netflix</span><span>roulette</span></Link>
    </div>
  )
}

export default Logo

import React from 'react'
import './css/Header.css'
import HeaderAddMovieBtn from './HeaderAddMovieBtn'
import Search from './Search'
import Logo from './Logo'

function Header() {
  return (
    <div className="header container">
      <div className='top-line'>
        <Logo />
        <HeaderAddMovieBtn />
      </div>
      <Search />
    </div>
  )
}

export default Header
import React from 'react'
import './css/Header.css'
import HeaderAddMovieBtn from '../headeraddmoviebtn/HeaderAddMovieBtn'
import Search from '../search/Search'
import Logo from '../logo/Logo'

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
import React from 'react'
import HeaderAddMovieBtn from './HeaderAddMovieBtn'
import Search from './Search'

function Header() {
  return (
    <div className="header container">
      <HeaderAddMovieBtn />
      <Search />
    </div>
  )
}

export default Header
import React from 'react'
import HeaderAddMovieBtn from './HeaderAddMovieBtn'
import HeaderSearch from './HeaderSearch'

function Header() {
  return (
    <div className="header">
      <HeaderAddMovieBtn />
      <HeaderSearch />
    </div>
  )
}

export default Header
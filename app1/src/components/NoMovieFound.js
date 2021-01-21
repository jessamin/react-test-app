import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import {Redirect} from "react-router-dom";
import './css/NoMovieFound.css'
import Header from "./Header";
import MenuPanel from "./MenuPanel";

function NoMovieFound() {
  const totalAmount = useSelector(state => state.filter.count)
  const error = useSelector(state => state.filter.error)
  const redirect = useSelector(state => state.app.redirect)
  const page = useSelector(state => state.app.page)

  useEffect(() => {
    document.body.classList = ['page-no-movie-found']
  }, [])

  if(!error && redirect && totalAmount > 0) {
    return <Redirect to={page} />
  }

  return (
    <>
      <Header />
      <MenuPanel />
      <div className='no-movie-found container'>
        <div>No Movie Found</div>
      </div>
    </>
  )
}

export default NoMovieFound
import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import {Redirect} from "react-router-dom";
import './css/NoMovieFound.css'
import Header from "./Header";
import MenuPanel from "./MenuPanel";
import Footer from "./Footer";

function NoMovieFound() {
  const totalAmount = useSelector(state => state.filter.count)
  const error = useSelector(state => state.filter.error)
  const app = useSelector(state => state.app)

  useEffect(() => {
    document.body.classList = ['page-no-movie-found']
  }, [])

  if(!app.module) {
    return <Redirect to={'/'} />
  }

  if(!error && app.redirect && totalAmount > 0) {
    return <Redirect to={app.page} />
  }

  return (
    <>
      <Header />
      <MenuPanel />
      <div className='no-movie-found container'>
        <div>No Movie Found</div>
      </div>
      <Footer />
    </>
  )
}

export default NoMovieFound

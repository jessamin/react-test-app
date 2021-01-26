import React from 'react'
import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom";
import { useAlert } from 'react-alert'
import './css/NoMovieFoundPage.css'
import Header from "../header/Header";
import MenuPanel from "../menu/MenuPanel";
import Footer from "../footer/Footer";
import useClassAndModuleSet from "../customhooks/useClassAndModuleSet";

function NoMovieFoundPage() {
  const totalAmount = useSelector(state => state.filter.count)
  const error = useSelector(state => state.filter.error)
  const errorMsg = useSelector(state => state.filter.msg)
  const app = useSelector(state => state.app)
  const alert = useAlert()

  useClassAndModuleSet('no-movie-found')

  if(error) {
    alert.error(errorMsg.toString())
  }

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

export default NoMovieFoundPage

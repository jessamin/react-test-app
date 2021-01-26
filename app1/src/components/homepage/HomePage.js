import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { setCurrentModuleAction } from '../../redux/actions'
import MovieList from '../movielist/MovieList'
import Header from "../header/Header"
import MenuPanel from "../menupanel/MenuPanel"
import Footer from "../footer/Footer";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";

function HomePage() {
  const dispatch = useDispatch()
  const history = useHistory()
  const alert = useAlert()

  if(typeof history.location.state !== 'undefined') {
    alert.error(history.location.state.from)
  }

  useEffect(() => {
    document.body.classList = ['page-home']
    dispatch(setCurrentModuleAction('home', '/'))
  }, [])

  return (
    <>
      <Header />
      <MenuPanel />
      <MovieList />
      <Footer />
    </>
  )
}

export default HomePage

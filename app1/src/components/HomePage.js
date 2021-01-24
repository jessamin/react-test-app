import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { setCurrentModuleAction } from '../redux/actions'
import MovieList from './MovieList'
import Header from "./Header"
import MenuPanel from "./MenuPanel"
import Footer from "./Footer";
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

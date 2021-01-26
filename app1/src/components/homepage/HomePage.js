import React from 'react'
import { useDispatch } from "react-redux"
import MovieList from '../movielist/MovieList'
import Header from "../header/Header"
import MenuPanel from "../menu/MenuPanel"
import Footer from "../footer/Footer";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import useClassAndModuleSet from "../customhooks/useClassAndModuleSet";

function HomePage() {
  const dispatch = useDispatch()
  const history = useHistory()
  const alert = useAlert()

  if(typeof history.location.state !== 'undefined') {
    alert.error(history.location.state.from)
  }

  useClassAndModuleSet('home', '/', dispatch)

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

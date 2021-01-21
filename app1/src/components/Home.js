import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { setCurrentModuleAction } from '../redux/actions'

import MovieList from './MovieList'
import Header from "./Header"
import MenuPanel from "./MenuPanel"

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    document.body.classList = ['page-home']
    dispatch(setCurrentModuleAction('home', '/'))
  }, [])

  return (
    <>
      <Header />
      <MenuPanel />
      <MovieList />
    </>
  )
}

export default Home
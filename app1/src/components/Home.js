import React, { useEffect } from 'react'
import MovieList from './MovieList'
import Header from "./Header"
import MenuPanel from "./MenuPanel"

function Home() {
  useEffect(() => {
    document.body.classList = ['page-home']
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
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { searchAction, setCurrentModuleAction } from '../redux/actions'

import MovieList from './MovieList'
import Header from "./Header"
import MenuPanel from "./MenuPanel"
import Footer from "./Footer";

function SearchPage() {
  const dispatch = useDispatch()
  const { search } = useParams()
  const filterQuery = useSelector(state => state.filter.query)

  useEffect(() => {
    dispatch(searchAction({...filterQuery, search: search}))
  }, [search])

  useEffect(() => {
    document.body.classList = ['search-page']
    dispatch(setCurrentModuleAction('search', '/search/' + search))
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

export default SearchPage

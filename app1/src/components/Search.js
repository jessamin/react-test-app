import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { searchRedirectAction } from "../redux/actions";
import { useHistory, useParams } from "react-router-dom";

function Search() {
  const [searchValue, setSearchValue] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()
  const { search } = useParams()
  const filterQuery = useSelector(state => state.filter.query)

  const handleInput = e => {
    e.preventDefault()
    const value = e.target.value
    setSearchValue(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const link = '/search/' + encodeURIComponent(searchValue)
    dispatch(searchRedirectAction({...filterQuery, search: searchValue}))
    history.push(link)
  }

  useEffect(() => {
    setSearchValue(search)
  }, [search])

  return (
    <form onSubmit={handleSubmit}>
      <h1>Find your movie</h1>
      <input type="text" name="search"
             value={searchValue}
             onChange={handleInput}/>
      <button type='submit'>SEACH</button>
    </form>
  )
}

export default Search
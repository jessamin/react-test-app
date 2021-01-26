import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { searchRedirectAction } from "../../redux/actions";
import { useHistory, useParams } from "react-router-dom";

function Search() {
  const [searchValue, setSearchValue] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()
  let { search } = useParams()
  const filterQuery = useSelector(state => state.filter.query)

  if(!search && filterQuery.search) {
    search = filterQuery.search;
  }

  const handleInput = e => {
    e.preventDefault()
    const value = e.target.value
    setSearchValue(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if( typeof searchValue === 'undefined' || searchValue.trim() === '') {
      return false
    }
    else {
      const link = '/search/' + encodeURIComponent(searchValue)
      dispatch(searchRedirectAction({...filterQuery, search: searchValue}))
      history.push(link)
    }
  }

  useEffect(() => {
    setSearchValue(search)
  }, [])

  useEffect(() => {
    setSearchValue(search)
  }, [search])

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <h1>FIND YOUR MOVIE</h1>
      <div className='search-wrapper'>
        <input type="text" name="search"
               placeholder='What do you want to watch?'
               value={searchValue}
               onChange={handleInput}/>
        <button type='submit'>SEACH</button>
      </div>
    </form>
  )
}

export default Search

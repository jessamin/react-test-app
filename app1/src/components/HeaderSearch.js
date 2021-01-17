import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../redux/actions";

function HeaderSearch() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch()
  const filterQuery = useSelector(state => state.filter.query)

  const handleInput = e => {
    e.preventDefault()
    const value = e.target.value
    setSearchValue(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(searchAction({...filterQuery, search: searchValue}))
  }

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

export default HeaderSearch
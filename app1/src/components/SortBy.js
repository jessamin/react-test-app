import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { sortByAction } from "../redux/actions";

function SortBy() {
  const dispatch = useDispatch()
  const filterQuery = useSelector(state => state.filter.query)
  const sortValue = filterQuery.sortBy

  const handleChange = e => {
    const value = e.target.value
    dispatch(sortByAction({...filterQuery, sortBy: value}))
  }

  return (
    <form>
      <label htmlFor="sortby"> Sort by</label>
      <select name="sortby" id="sortby"
              value={sortValue}
              onChange={handleChange}>
        <option value="release_date">Release Date</option>
        <option value="vote_average">Rating</option>
      </select>

    </form>
  )
}

export default SortBy


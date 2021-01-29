import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { sortByAction } from "../../redux/actions";

function SortBy() {
  const dispatch = useDispatch()
  const filterQuery = useSelector(state => state.filter.query)
  const sortValue = filterQuery.sortBy

  const handleChange = e => {
    const value = e.target.value
    dispatch(sortByAction({...filterQuery, sortBy: value}))
  }

  return (
    <form className='sort-by'  data-testid="sort-by">
      <label htmlFor="sortby">SORT BY</label>
      <select name="sortby" id="sortby" data-testid="sort-by-select"
              value={sortValue}
              onChange={handleChange}>
        <option value="release_date">RELEASE DATE</option>
        <option value="vote_average">RATING</option>
      </select>
    </form>
  )
}

export default SortBy


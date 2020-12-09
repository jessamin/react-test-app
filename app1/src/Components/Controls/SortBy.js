import React from 'react'

function SortBy() {
  return (
    <>
      <label htmlFor="sortby">Sort by</label>

      <select name="sortby" id="sortby">
        <option value="date">Release Date</option>
        <option value="rating">Rating</option>
      </select>
    </>
  )
}

export default SortBy
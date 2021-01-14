import React from 'react'
import ControlsMenu from './ControlsMenu'
import SortBy from './SortBy'

function Controls() {
  return (
    <div className="controls">
      <ControlsMenu />
      <SortBy />
      <hr />
      <span>39</span>
      <span>movies found</span>
    </div>
  )
}

export default Controls
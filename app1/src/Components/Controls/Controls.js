import React from 'react'
import ControlsMenu from './ControlsMenu'
import SortBy from './SortBy'
import Delimiter from './Delimiter'
import MovieCount from './MovieCount';

function Controls() {
  return (
    <div className="controls">
      <ControlsMenu />
      <SortBy />
      <Delimiter />
      <MovieCount
        num="39"
      />
    </div>
  )
}

export default Controls
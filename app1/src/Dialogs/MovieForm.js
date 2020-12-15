import React from 'react'
import TitleField from '../Fields/TitleField'
import ReleaseDateField from '../Fields/ReleaseDateField'
import UrlField from '../Fields/UrlField'
import GenreField from '../Fields/GenreField'
import OverviewField from '../Fields/OverviewField'
import RuntimeField from '../Fields/RuntimeField'

function MovieForm() {
  return (
    <>
      <div className="header"> Add Movie </div>
      <div className="content">
        <TitleField />
        <ReleaseDateField />
        <UrlField />
        <GenreField />
        <OverviewField />
        <RuntimeField />
      </div>
    </>
  )
}

export default MovieForm
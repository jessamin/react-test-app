import React from 'react'

function MovieForm() {
  return (
    <form>
      <div>
        <label htmlFor="movieform-title">Title</label>
        <input
          type="text"
          id="movieform-title"
          value=''
          // onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="movieform-poster-path">Image URL</label>
        <input
          type="text"
          id="movieform-poster-path"
          value=''
          // onChange={(e) => setPoster(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="movieform-overview">Overview</label>
        <input
          type="text"
          id="movieform-overview"
          value=''
          // onChange={(e) => setOverview(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="movieform-runtime">Runtime</label>
        <input
          type="text"
          id="movieform-runtime"
          value=''
          // onChange={(e) => setRuntime(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="movieform-genres">Genres</label>
        <input
          type="text"
          id="movieform-genres"
          value=''
          // onChange={(e) => setGenres(e.target.value)}
        />
      </div>
    </form>
  )
}

export default MovieForm
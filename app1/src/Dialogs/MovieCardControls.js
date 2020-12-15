import React from 'react'
import Popup from 'reactjs-popup'
import MovieForm from './MovieForm'
import MovieDelete from './MovieDelete'

function MovieCardControls() {
  return (
    <div className="movie-card-controls-popup">
      <Popup
        trigger={<button className="button">Edit</button>}
        on="click"
      >
        {close => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>

            <div className="content">
              <MovieForm />
            </div>

            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  close();
                }}
              >
                X
              </button>
            </div>
          </div>
        )}
      </Popup>

      <Popup
        trigger={<button className="button">Delete</button>}
        on="click"
      >
        {close => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>

            <div className="content">
              <MovieDelete />
            </div>

            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  close();
                }}
              >
                X
              </button>
            </div>
          </div>
        )}
      </Popup>

    </div>
  )
}

export default MovieCardControls
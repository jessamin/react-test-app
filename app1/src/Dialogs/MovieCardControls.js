import React from 'react'
import Popup from 'reactjs-popup'
import MovieDelete from './MovieDelete'
import MovieEditForm from "../Formik/MovieEditForm";

function MovieCardControls(props) {
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
              <MovieEditForm mid={props.mid}/>
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

            <div className="content">
              <MovieDelete mid={props.mid}
              />
            </div>


          </div>
        )}
      </Popup>

    </div>
  )
}

export default MovieCardControls
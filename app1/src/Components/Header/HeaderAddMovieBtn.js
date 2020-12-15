import React from 'react'
import Popup from 'reactjs-popup'
import MovieForm from "../Dialogs/MovieForm"

function HeaderAddMovieBtn() {
  return (
    <Popup
      trigger={<button className="button"> ADD Movie </button>}
      modal
    >
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <MovieForm />
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                close();
              }}
            >
              Submit
            </button>
            <button
              className="button"
              onClick={() => {
                close();
              }}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </Popup>
    )
}

export default HeaderAddMovieBtn
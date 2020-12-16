import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
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
          <h2 className="header"> Add Movie </h2>
          <MovieForm />
          <div className="actions">
            <button className="btn-submit"
              onClick={() => {
                close();
              }}
            >
              Submit
            </button>
            <button className="btn-reset"
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
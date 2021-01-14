import React from 'react'
import Popup from 'reactjs-popup'
import MovieCardControls from '../Dialogs/MovieCardControls'

function MovieCardEditControls(props) {
  return (
    <Popup
      trigger={<button className="button"> ... </button>}
      on="hover"
      nested
    >
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>

          <MovieCardControls {...props} close={close}/>

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
  )
}

export default MovieCardEditControls
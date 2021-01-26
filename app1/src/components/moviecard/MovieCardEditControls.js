import React from 'react'
import Popup from 'reactjs-popup'
import MovieEditForm from '../../Formik/MovieEditForm'
import MovieConfirmDelete from '../MovieConfirmDelete'

function MovieCardEditControls(props) {
  return (
    <Popup trigger={<button className='button'> ... </button>} on='hover' nested >
      {close => (
        <div className='modal'>
          <a className='close' onClick={close}> &times; </a>

          <div className='movie-card-controls-popup'>
            <Popup trigger={<button className="button">Edit</button>} on='click' nested >
              {closeIn => (
                <div className='modal'>
                  <a className='close' onClick={closeIn}> &times; </a>
                  <div className='content'>
                    <MovieEditForm {...props} close={close}/>
                  </div>
                </div>
              )}
            </Popup>

            <Popup trigger={<button className='button'>Delete</button>} on='click' >
              {close => (
                <div className='modal'>
                  <div className='actions'>
                    <button className='button' onClick={() => close()} > X </button>
                  </div>

                  <div className='content'>
                    <MovieConfirmDelete movieId={props.movieId} />
                  </div>
                </div>
              )}
            </Popup>
          </div>

        </div>
      )}
    </Popup>
  )
}

export default MovieCardEditControls

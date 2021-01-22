import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import MovieAddForm from '../Formik/MovieAddForm'

function HeaderAddMovieBtn() {
  return (
    <Popup
      trigger={<button className='button'> + ADD MOVIE </button>}
      modal
    >
      {close => (
        <div className='modal'>
          <button
            className='close'
            onClick={close}
          >
            &times;
          </button>
          <h2 className='header-add'> Add Movie </h2>
          <MovieAddForm id='' close={close}/>
        </div>
      )}
    </Popup>
  )
}

export default HeaderAddMovieBtn
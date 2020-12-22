import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
// import MovieForm from "../Dialogs/MovieForm"
import FormikContainer from '../Formik/FormikContainer'

function HeaderAddMovieBtn() {
  return (
    <Popup
      trigger={<button className='button'> ADD Movie </button>}
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
          <h2 className='header'> Add Movie </h2>
          <FormikContainer />
        </div>
      )}
    </Popup>
  )
}

export default HeaderAddMovieBtn
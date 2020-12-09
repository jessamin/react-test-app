import React from 'react'
import Popup from 'reactjs-popup'
import TitleField from '../Dialogs/TitleField'
import ReleaseDateField from '../Dialogs/ReleaseDateField'
import UrlField from '../Dialogs/UrlField'
import GenreField from '../Dialogs/GenreField'
import OverviewField from '../Dialogs/OverviewField'
import RuntimeField from '../Dialogs/RuntimeField'

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
          <div className="header"> Add Movie </div>
          <div className="content">
            <TitleField />
            <ReleaseDateField />
            <UrlField />
            <GenreField />
            <OverviewField />
            <RuntimeField />
          </div>
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
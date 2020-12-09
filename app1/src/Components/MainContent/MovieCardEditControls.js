import React from 'react'
import TitleField from '../Dialogs/TitleField'
import ReleaseDateField from '../Dialogs/ReleaseDateField'
import UrlField from '../Dialogs/UrlField'
import GenreField from '../Dialogs/GenreField'
import OverviewField from '../Dialogs/OverviewField'
import RuntimeField from '../Dialogs/RuntimeField'
import DeleteBtn from '../Dialogs/DeleteBtn'

function MovieCardEditControls(props) {
  return (
    <Popup
      trigger={<button className="button"> ... </button>}
      on="hover"
    >
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="content">
            <Popup
              trigger={<div className="menu-item"> Edit </div>}
              position="right top"
              on="hover"
              closeOnDocumentClick
              mouseLeaveDelay={300}
              mouseEnterDelay={0}
              contentStyle={{ padding: "0px", border: "none" }}
            >
              <div className="edit-form">
                <TitleField />
                <ReleaseDateField />
                <UrlField />
                <GenreField />
                <OverviewField />
                <RuntimeField />
              </div>
            </Popup>
            <Popup
              trigger={<div className="menu-item"> Delete </div>}
              position="right top"
              on="hover"
              closeOnDocumentClick
              mouseLeaveDelay={300}
              mouseEnterDelay={0}
              contentStyle={{ padding: "0px", border: "none" }}
            >
              <div className="delete-form">
                <h2>DELETE MOVIE</h2>
                <p>Are you sure you want to delete this movie?</p>
                <DeleteBtn />
              </div>
            </Popup>
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
  )
}

export default MovieCardEditControls
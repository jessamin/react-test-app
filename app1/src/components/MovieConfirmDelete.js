import React from 'react'
import {useDispatch} from "react-redux";
import {deleteMovieAction} from "../redux/actions";

function MovieConfirmDelete({mid}) {
  const dispatch = useDispatch()

  const deleteBtnOnClick = mid => {
    dispatch(deleteMovieAction(mid))
    window.location.reload();
  }

  return (
    <>
      <h1 className="header"> Delete Movie </h1>
      <div className="content"> Are you shure you want to delete this movie? </div>
      <button onClick={deleteBtnOnClick(mid)} >Confirm</button>
    </>
  )
}

export default MovieConfirmDelete
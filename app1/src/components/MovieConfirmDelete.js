import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {deleteMovieAction} from "../redux/actions";

function MovieConfirmDelete({movieId}) {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter.query)

  const deleteBtnOnClick = movieId => {
    dispatch(deleteMovieAction(movieId, filter))
  }

  return (
    <>
      <h1 className="header"> Delete Movie </h1>
      <div className="content"> Are you shure you want to delete this movie? </div>
      <button onClick={deleteBtnOnClick(movieId)} >Confirm</button>
    </>
  )
}

export default MovieConfirmDelete
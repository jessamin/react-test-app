import {ACTION} from "../types";

const initialState = {
  error: true,
  msg: null,
  loading: false,
  general_sorting: null,
  genre_sorting: null,
  search: null,
  count: null
}

function MovieReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION.FETCH_MOVIES_INIT:
      return {
        ...state
      }

    default:
      return state
  }
}

export default MovieReducer
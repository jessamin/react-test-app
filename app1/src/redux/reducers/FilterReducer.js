import {ACTION} from "../types";

const initialState = {
  query: {
    sortBy: 'release_date',
    sortOrder: 'desc',
    filter: false,
    search: false,
    limit: 9,
  },
  movies: [],
  count: false,
  error: false
}

function FilterReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION.FETCH_MOVIES_INIT:
      return {
        ...state
      }
    case ACTION.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        count: action.count,
        error: false,
        msg: false
      }
    case ACTION.FETCH_MOVIES_ERROR:
      return {
        ...state,
        error: true,
        msg: action.payload
      }
    case ACTION.SORT_BY:
    case ACTION.FILTER_BY:
    case ACTION.SEARCH:
      return {
        ...state,
        query: action.payload,
        count: false,
        error: false
      }
    default:
      return state
  }
}

export default FilterReducer
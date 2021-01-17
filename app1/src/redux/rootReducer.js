import { combineReducers } from "redux"
import MovieReducer from './reducers/MovieReducer'
import FilterReducer from './reducers/FilterReducer'

const rootReducer = combineReducers({
  movies: MovieReducer,
  filter: FilterReducer
})

export default rootReducer

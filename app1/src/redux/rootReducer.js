import { combineReducers } from "redux"
import MovieReducer from './reducers/MovieReducer'
import FilterReducer from './reducers/FilterReducer'
import AppReducer from './reducers/AppReducer'

const rootReducer = combineReducers({
  movies: MovieReducer,
  filter: FilterReducer,
  app: AppReducer
})

export default rootReducer

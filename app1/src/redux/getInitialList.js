import axios from "axios/index";
import {initAppAction} from './actions'

export async function getInitialList(dispatch, getState) {
  const movieList = await axios.get("http://localhost:4000/movies?limit=6")
  dispatch(initAppAction(movieList.data.data));
}
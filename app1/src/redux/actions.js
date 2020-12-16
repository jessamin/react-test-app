import {INIT_APPLICATION} from './types'

export function initAppAction(movieList) {
  return {
    type: INIT_APPLICATION,
    payload: movieList
  }
}
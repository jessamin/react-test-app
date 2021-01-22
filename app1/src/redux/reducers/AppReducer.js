import { ACTION } from "../types";

const initialState = {
  module: false,
  page: false,
  redirect: false
}

function FilterReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION.CURRENT_MODULE:
      return {
        ...state,
        module: action.module,
        page: action.page ? action.page : false,
        redirect: false
      }
    case ACTION.CURRENT_PAGE:
      return {
        ...state,
        page: action.payload
      }
    case ACTION.REDIRECT:
      return {
        ...state,
        redirect: action.payload
      }
    default:
      return state
  }
}

export default FilterReducer

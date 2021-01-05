// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk";
// import promise from "redux-promise-middleware";
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from "./rootReducer";
//
// const middleware = composeWithDevTools(applyMiddleware(promise, thunk));
//
// export default createStore(rootReducer, middleware);

import { compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


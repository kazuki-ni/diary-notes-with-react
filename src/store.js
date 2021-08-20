import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";

import reducer from "./reducers";

const logger = createLogger({
  diff: true,
  collapsed: true
})
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);

store.subscribe( () => {
  console.log("Store changed", store.getState());
});

export default store;

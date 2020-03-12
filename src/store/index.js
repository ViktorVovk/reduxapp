import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";

import { count } from "../reducers/count";

const rootReducer = combineReducers({
  count
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

export default store;

import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import quoteReducer from "./quoteReducer";

const logger = createLogger({ collapsed: true });
const middleware = [thunk, logger];
const store = createStore(quoteReducer, applyMiddleware(...middleware));

export default store;
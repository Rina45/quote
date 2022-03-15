import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import quoteReducer from "./quoteReducer";
// import "dotenv/config"

const middleware = [thunk];
// if (process.env.ENVIRONMENT !== 'production') {
const logger = createLogger({ collapsed: true });
middleware.push(logger);
// }
const store = createStore(quoteReducer, applyMiddleware(...middleware));

export default store;
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import "dotenv";

const middleware = [thunk];
if (process.env.ENVIRONMENT !== 'production') {
    const logger = createLogger({ collapsed: true });
    middleware.push(logger);
}
const store = createStore({}, applyMiddleware(...middleware));

export default store;
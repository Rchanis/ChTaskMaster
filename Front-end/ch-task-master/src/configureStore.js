import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import taskReducer from "./reducers/taskReducer";
import loggerMiddlware from "./middleware/logger";
import monitorReducerEnhancer from "./enhancers/monitorReducer";

const reducers = combineReducers({taskReducer})

const store = configureStore({
    reducer: reducers,
    middleware: [loggerMiddlware, ...getDefaultMiddleware()],
    enhancers: [monitorReducerEnhancer]
})

export default store;
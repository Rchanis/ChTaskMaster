import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import taskReducer from "./reducers/taskReducer";
import loggerMiddlware from "./middleware/logger";
import monitorReducerEnhancer from "./enhancers/monitorReducer";

const reducers = combineReducers({taskReducer})

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [loggerMiddlware, ...getDefaultMiddleware()],
    enhancers: [monitorReducerEnhancer]
})

const persistor = persistStore(store);


export { store, persistor};
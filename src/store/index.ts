import {createStore, applyMiddleware} from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { rootReducer } from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type  RootState = ReturnType<typeof store.getState>;

export type AppActions = ReturnType<typeof store.dispatch>

export type AppDispatch = ThunkDispatch<RootState, any, AppActions>;
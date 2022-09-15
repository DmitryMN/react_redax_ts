import {combineReducers} from "redux";
import { userReducer } from './userReducer';
import { todoReducer } from "./todoReduser";


export const rootReducer = combineReducers({
    users: userReducer,
    todos: todoReducer,
});

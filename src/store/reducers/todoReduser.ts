import { TodoState, TodoActionTypes, TodoAction } from "../../types/todoType";


const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    limit: 10,
    page: 1,
}


export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch(action.type) {
        case TodoActionTypes.FETCH_TODOS:
            return {...state, loading: true}
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, todos: action.payload, loading: false}
        case TodoActionTypes.FETCH_TODOS_ERROR:
            return {...state, error: action.payload, loading: false}
        case TodoActionTypes.SET_TODOS_PAGE:
            return {...state, page: action.payload, loading: false}
        default:
            return state;
    }
}
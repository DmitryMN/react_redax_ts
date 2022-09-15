import { todosActions } from '../action-creators/todo';

export type TodoType = {
    id: number
    title: string
    completed: boolean
}

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODOS_PAGE = 'SET_TODOS_PAGE',
}

export type TodoState = {
    todos: TodoType[]
    loading: boolean
    error: null | string
    limit: number
    page: number
}

export type TodoAction = ReturnType<typeof todosActions.fetchTodosAC>
    | ReturnType<typeof todosActions.fetchTodosSuccessAC> 
    | ReturnType<typeof todosActions.fetchTodosErrorAC> 
    | ReturnType<typeof todosActions.setTodoPage>;
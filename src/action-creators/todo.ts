import axios from "axios";
import { Dispatch } from "redux";
import { AppActions } from "../store";
import { TodoActionTypes, TodoType } from "../types/todoType";


export const todosActions = {
    fetchTodosAC: () => ({ type: TodoActionTypes.FETCH_TODOS } as const),

    fetchTodosSuccessAC: (todos: TodoType[]) => ({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: todos } as const),

    fetchTodosErrorAC: (error: string) => ({ type: TodoActionTypes.FETCH_TODOS_ERROR, payload: error } as const),

    setTodoPage:(page: number) => ({type: TodoActionTypes.SET_TODOS_PAGE, payload: page} as const),

    fetchTodo: (limit = 10, page = 1) => {
        return async (dispatch: ThunkDispatch) => {
            try {
                dispatch(todosActions.fetchTodosAC());
                const response = await axios.get<TodoType[]>('https://jsonplaceholder.typicode.com/todos', {
                    params: {
                        _limit: limit,
                        _page: page,
                    }
                });
                dispatch(todosActions.fetchTodosSuccessAC(response.data));
            } catch (e) {
                dispatch(todosActions.fetchTodosErrorAC('ошибка загрузки'));
            }
        }
    }
}

type ThunkDispatch = Dispatch<AppActions>
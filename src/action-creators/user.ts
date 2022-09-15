import { Dispatch } from "redux";
import { UserActionTypes, UserType } from "../types/userType";
import { AppActions } from "../store";
import axios from "axios";

export const userActions = {
    fetchUsersAC: () => ({ type: UserActionTypes.FETCH_USERS } as const),
    fetchUsersSuccessAC: (users: any[]) => ({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: users} as const),
    fetchUsersErrorAC: (error: string) => ({type: UserActionTypes.FETCH_USERS_ERROR, payload: error} as const),
    fetchUsers: () => {
        return async (dispatch: ThunkDispatch) => {
            try {
                dispatch(userActions.fetchUsersAC());
                const response = await axios.get<UserType[]>('https://jsonplaceholder.typicode.com/users');
                dispatch(userActions.fetchUsersSuccessAC(response.data));
            } catch (e) {
                dispatch(userActions.fetchUsersErrorAC("Произошла ошибка запроса пользователей"));
            } 
        }
    }
}

// export const fetchUsersAC = () => ({ type: UserActionTypes.FETCH_USERS } as const);
// export const fetchUsersSuccessAC = (users: any[]) => ({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: users} as const);
// export const fetchUsersErrorAC = (error: string) => ({type: UserActionTypes.FETCH_USERS_ERROR, payload: error} as const);


// export const fetchUsers = () => {
//     return async (dispatch: ThunkDispatch) => {
//         try {
//             dispatch(fetchUsersAC());
//             const response = await axios.get<UserType[]>('https://jsonplaceholder.typicode.com/users');
//             dispatch(fetchUsersSuccessAC(response.data));
//         } catch (e) {
//             dispatch(fetchUsersErrorAC("Произошла ошибка запроса пользователей"));
//         } 
//     }
// }


type ThunkDispatch = Dispatch<AppActions>
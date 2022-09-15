import {userActions} from '../action-creators/user';



export type UserType = {
    id: number
    name: string
    email: string
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export type UserState = {
    users: UserType[]
    loading: boolean
    error: null | string;
}

export type UserAction = ReturnType<typeof userActions.fetchUsersAC> | ReturnType<typeof userActions.fetchUsersSuccessAC> | ReturnType<typeof userActions.fetchUsersErrorAC>;
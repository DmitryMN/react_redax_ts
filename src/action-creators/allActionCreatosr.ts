import { userActions } from "./user";
import { todosActions } from "./todo";


export const allActionCreators = {
    ...userActions,
    ...todosActions,
}
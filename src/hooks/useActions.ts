import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { AppDispatch } from "../store";
import { allActionCreators } from "../action-creators/allActionCreatosr";


export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>();
    return bindActionCreators(allActionCreators ,dispatch);
}
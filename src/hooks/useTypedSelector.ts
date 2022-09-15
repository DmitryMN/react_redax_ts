import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store";

export const useTypedselector: TypedUseSelectorHook<RootState> = useSelector;
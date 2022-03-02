import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../state";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

// create new selector and assign useSelector
// new useTypedSelector is type of "TypedUseSelectorHook" <Rootsate> type is added by us
// which tells it that it will have all our reducers in it

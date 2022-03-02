import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

const useBindActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};

export default useBindActions;
//
// what it does is
// returns an object
// takes all action creators ann makes one object
//{
//    searchpackages: dispatch(searchPackages),
//    ...
// }
// so the actions are already in dispatch

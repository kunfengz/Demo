import { useReducer} from "react";

const initialState = { color: "red" };
function reducer(state) {
    switch (state.color) {
      case "red":
        return { color: "green" };
      case "green":
        return { color: "yellow" };
      case "yellow":
        return { color: "red" };
      default:
        throw new Error();
    }
  }
export default function useLamp(){
    const [state, dispatch] = useReducer(reducer, initialState);
    return [state,dispatch]
}
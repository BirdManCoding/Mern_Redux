import { FETCH_ALL, CREATE, UPDATE } from "../actions/actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...state, action.payload];
    case UPDATE:
      const newState = [...state];
      const foundIndex = newState.findIndex(
        post => post._id === action.payload._id
      );
      newState.splice(foundIndex, 1, action.payload);
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default reducer;

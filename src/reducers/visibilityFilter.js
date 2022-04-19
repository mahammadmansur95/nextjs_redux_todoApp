import { SET_FILTER } from "../actions/actionTypes";

const initialState = {
  ALL: "all",
  COMPLETED: "completed",
  INCOMPLETED: "incompleted",
};

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;

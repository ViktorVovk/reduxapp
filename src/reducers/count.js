import { INCREMENT_COUNT, DECREMENT_COUNT } from "../actions/count-actions";

const initialState = {
  count: 0
};

export const count = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { count: state.count++ };
    case DECREMENT_COUNT:
      return { count: state.count-- };

    default:
      return state
  }
};

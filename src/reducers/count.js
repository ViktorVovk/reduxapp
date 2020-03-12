import { INCREMENT_COUNT, DECREMENT_COUNT } from "../actions/count-actions";

const initialState = {
  value: 0
};

export const count = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, value: state.value + 1 };
    case DECREMENT_COUNT:
      return { ...state, value: state.value - 1 };

    default:
      return state;
  }
};

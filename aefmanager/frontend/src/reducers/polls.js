import { GET_POLLS, DELETE_POLL, ADD_POLL, CLEAR_POLLS, VIEW_POLL, UPDATE_POLL } from "../actions/types.js";

const initialState = {
  polls: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POLLS:
      return {
        ...state,
        polls: action.payload
      };
    case DELETE_POLL:
      return {
        ...state,
        polls: state.polls.filter( poll => poll.id !== action.payload)
      };
    case ADD_POLL:
      return {
        ...state,
        polls: [...state.polls, action.payload]
      };
    case CLEAR_POLLS:
      return {
        ...state,
        polls: []
      };
    case VIEW_POLL:
      return {
        ...state,
        polls: state.polls.filter( poll => poll.id == action.payload)
      };
    case UPDATE_POLL:
      return {
        ...state,
        polls: state.polls.filter( poll => poll.id == action.payload)
      };
    default:
    return state;
  }
}

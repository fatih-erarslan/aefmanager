import { GET_SURVEYS, DELETE_SURVEY, ADD_SURVEY, CLEAR_SURVEYS, VIEW_SURVEY, UPDATE_SURVEY } from "../actions/types.js";

const initialState = {
  surveys: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SURVEYS:
      return {
        ...state,
        surveys: action.payload
      };
    case DELETE_SURVEY:
      return {
        ...state,
        surveys: state.surveys.filter(survey => survey.id !== action.payload)
      };
    case ADD_SURVEY:
      return {
        ...state,
        surveys: [...state.surveys, action.payload]
      };
    case CLEAR_SURVEYS:
      return {
        ...state,
        surveys: []
      };
    case VIEW_SURVEY:
      return {
        ...state,
        surveys: state.surveys.filter(survey => survey.id == action.payload)
      };
    case UPDATE_SURVEY:
      return {
        ...state,
        surveys: state.surveys.filter(survey => survey.id == action.payload)
      };
    default:
    return state;
  }
}

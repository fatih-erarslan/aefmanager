import { combineReducers } from "redux";
import polls from "./polls";
import surveys from "./surveys";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  surveys,
  polls,
  errors,
  messages,
  auth
});

import {
  SET_FUTURE_LAUNCH,
  SET_NEWEST_LAUNCH,
  SET_PAST_LAUNCH,
  SET_LATEST_LAUNCH,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_NEWEST_LAUNCH:
      return {
        ...state,
        newest: action.payload,
      };
    case SET_FUTURE_LAUNCH:
      return {
        ...state,
        future: action.payload,
      };
    case SET_PAST_LAUNCH:
      return {
        ...state,
        past: action.payload,
      };
    case SET_LATEST_LAUNCH:
      return {
        ...state,
        latest: action.payload,
      };
    default:
      return state;
  }
};

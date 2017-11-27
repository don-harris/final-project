import { setEntries, next, vote, INITIAL_STATE } from "../../src/core";

export default function setStateReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_STATE":
      return setEntries(state, action.entries);
    case "NEXT":
      return next(state);
    case "VOTE":
      return state.update("vote", voteState => vote(voteState, action.entry));
  }
  return state;
}

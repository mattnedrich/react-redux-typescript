import ApplicationState from '../application-state';
import {UPDATE_GREETING_ACTION_TYPE, UpdateGreetingAction } from '../actions/index';

const defaultState = {
  greeting: "React-TypeScript-Redux Example",
  count: 0
}

type Action = UpdateGreetingAction;

const updateState = (state: ApplicationState, action: Action) => {
  switch(action.type) {
  case UPDATE_GREETING_ACTION_TYPE:
    return {
      greeting: action.payload,
      count: state.count
    }
  default:
    return defaultState;
  }
};

export default updateState;

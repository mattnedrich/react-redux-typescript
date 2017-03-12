import ApplicationState from '../application-state';
import {UPDATE_GREETING, UpdateGreetingAction } from '../actions/index';
import {INCREMENT, IncrementAction} from '../actions/index';

const defaultState = {
  greeting: "React-TypeScript-Redux Example",
  count: 0
}

type Action = UpdateGreetingAction | IncrementAction;

const updateState = (state: ApplicationState, action: Action) => {
  switch(action.type) {
  case UPDATE_GREETING:
    return {
      greeting: action.payload,
      count: state.count
    }
  case INCREMENT:
    return {
      greeting: state.greeting,
      count: state.count + 1
    }
  default:
    return defaultState;
  }
};

export default updateState;

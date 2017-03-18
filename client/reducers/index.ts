import ApplicationState from '../application-state';
import * as ActionTypes from '../action-types/index';
import * as Actions from '../actions/index';

type Action = Actions.UpdateGreetingAction | Actions.IncrementAction;

const defaultState = new ApplicationState();

const updateState = (state: ApplicationState = defaultState, action: Action) => {
  switch(action.type) {
  case ActionTypes.UPDATE_GREETING:
    return {
      greeting: action.greeting,
      count: state.count
    }
  case ActionTypes.INCREMENT:
    return {
      greeting: state.greeting,
      count: state.count + 1
    }
  default:
    return state;
  }
};

export default updateState;

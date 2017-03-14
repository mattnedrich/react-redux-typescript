import ApplicationState from '../application-state';
import * as ActionTypes from '../action-types/index';
import * as Actions from '../actions/index';

type Action = Actions.UpdateGreetingAction | Actions.IncrementAction;

const updateState = (state: ApplicationState, action: Action) => {
  switch(action.type) {
  case ActionTypes.UPDATE_GREETING:
    return {
      greeting: action.payload,
      count: state.count
    }
  case ActionTypes.INCREMENT:
    return {
      greeting: state.greeting,
      count: state.count + 1
    }
  default:
    return ApplicationState.getDefault();
  }
};

export default updateState;

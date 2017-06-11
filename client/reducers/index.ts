import { defaultState } from '../application-state';
import { ApplicationState } from '../application-state';

import { IncrementAction, UpdateGreetingAction } from '../action-creators/index';
import * as ActionTypes from '../action-types/index';

type Action = UpdateGreetingAction | IncrementAction;

const updateState = (state: ApplicationState = defaultState, action: Action) => {
  switch (action.type) {

  case ActionTypes.UPDATE_GREETING:
    return {
      ...state,
      greeting: action.greeting,
    };

  case ActionTypes.INCREMENT:
    return {
      ...state,
      count: state.count + 1,
    };

  default:
    return state;
  }
};

export default updateState;

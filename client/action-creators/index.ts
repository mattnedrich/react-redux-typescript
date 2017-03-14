import * as ActionTypes from '../action-types/index';
import * as Actions from '../actions/index';

export const updateGreeting: (greeting: string) => Actions.UpdateGreetingAction = (greeting) => {
  return {
    type: ActionTypes.UPDATE_GREETING,
    greeting: greeting
  };
}

export const increment: () => Actions.IncrementAction = () => {
  return {
    type: ActionTypes.INCREMENT
  };
}

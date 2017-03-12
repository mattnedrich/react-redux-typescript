import * as ActionTypes from '../action-types/index';

export type UpdateGreetingAction = {
  type: ActionTypes.UPDATE_GREETING,
  payload: string
}

export type IncrementAction = {
  type: ActionTypes.INCREMENT
}

export const updateGreeting: (newGreeting: string) => UpdateGreetingAction = (newGreeting) => {
  return {
    type: ActionTypes.UPDATE_GREETING,
    payload: newGreeting
  };
}

export const increment: () => IncrementAction = () => {
  return {
    type: ActionTypes.INCREMENT
  };
}

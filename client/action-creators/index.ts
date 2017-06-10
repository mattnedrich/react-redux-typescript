import * as ActionTypes from '../action-types/index';

export type UpdateGreetingAction = {
  type: ActionTypes.UPDATE_GREETING,
  greeting: string,
};

export type IncrementAction = {
  type: ActionTypes.INCREMENT,
};

export type updateGreeting = typeof updateGreeting;
export type increment = typeof increment;

export function updateGreeting(greeting: string): UpdateGreetingAction {
  return {
    type: ActionTypes.UPDATE_GREETING,
    greeting,
  };
};

export function increment(): IncrementAction {
  return {
    type: ActionTypes.INCREMENT,
  };
};

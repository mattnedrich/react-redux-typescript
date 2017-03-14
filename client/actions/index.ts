import * as ActionTypes from '../action-types/index';

export type UpdateGreetingAction = {
  type: ActionTypes.UPDATE_GREETING,
  greeting: string
}

export type IncrementAction = {
  type: ActionTypes.INCREMENT
}


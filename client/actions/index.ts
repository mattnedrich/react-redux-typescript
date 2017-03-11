export type UPDATE_GREETING_ACTION_TYPE = 'UPDATE_GREETING';
export const UPDATE_GREETING_ACTION_TYPE: UPDATE_GREETING_ACTION_TYPE = 'UPDATE_GREETING';

export type UpdateGreetingAction = {
  type: UPDATE_GREETING_ACTION_TYPE,
  payload: string
}

export const updateGreeting: (newGreeting: string) => UpdateGreetingAction = (newGreeting) => {
  return {
    type: UPDATE_GREETING_ACTION_TYPE,
    payload: newGreeting
  };
}

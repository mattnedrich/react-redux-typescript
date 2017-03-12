export type UPDATE_GREETING = 'UPDATE_GREETING';
export const UPDATE_GREETING: UPDATE_GREETING = 'UPDATE_GREETING';

export type INCREMENT = 'INCREMENT';
export const INCREMENT: INCREMENT = 'INCREMENT';

export type UpdateGreetingAction = {
  type: UPDATE_GREETING,
  payload: string
}

export type IncrementAction = {
  type: INCREMENT
}

export const updateGreeting: (newGreeting: string) => UpdateGreetingAction = (newGreeting) => {
  return {
    type: UPDATE_GREETING,
    payload: newGreeting
  };
}

export const increment: () => IncrementAction = () => {
  return {
    type: INCREMENT
  };
}

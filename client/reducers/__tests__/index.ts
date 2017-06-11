import updateState from '../../reducers/index';
import { defaultState } from '../../application-state';
import * as Actions from '../../action-creators';

describe('The root reducer', () => {
  it('returns the input state for an unknown action', () => {
    const state = updateState(defaultState, {type: undefined});
    expect(state).toEqual(defaultState);
  });

  it('updates the greeting correctly', () => {
    const state1 = updateState(defaultState, Actions.updateGreeting('new greeting'));
    expect(state1.greeting).toEqual('new greeting');

    const state2 = updateState(state1, Actions.updateGreeting('yet another greeting'));
    expect(state2.greeting).toEqual('yet another greeting');
  });

  it('increments correctly', () => {
    expect(defaultState.count).toEqual(0);

    const state1 = updateState(defaultState, Actions.increment());
    expect(state1.count).toEqual(1);

    const state2 = updateState(state1, Actions.increment());
    expect(state2.count).toEqual(2);

    const state3 = updateState(state2, Actions.increment());
    expect(state3.count).toEqual(3);
  });
});

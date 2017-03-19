export interface ApplicationState {
  greeting: string
  count: number;
};

const defaultState: ApplicationState = {
  greeting: 'React-TypeScript-Redux Example',
  count: 0
};

export default defaultState;

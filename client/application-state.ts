export interface ApplicationState {
  count: number;
  greeting: string;
};

const defaultState: ApplicationState = {
  count: 0,
  greeting: 'React-TypeScript-Redux Example',
};

export default defaultState;

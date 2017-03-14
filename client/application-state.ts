class ApplicationState {
  greeting: string
  count: number;

  constructor() {
    this.greeting = 'React-TypeScript-Redux Example';
    this.count = 0;
  }

  static getDefault() {
    return new ApplicationState();
  }
}

export default ApplicationState;

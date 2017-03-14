class ApplicationState {
  static getDefault() {
    return new ApplicationState();
  }

  greeting: string
  count: number;

  constructor() {
    this.greeting = 'React-TypeScript-Redux Example';
    this.count = 0;
  }
}

export default ApplicationState;

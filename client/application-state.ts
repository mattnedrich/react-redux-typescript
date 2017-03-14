class ApplicationState {
  greeting: string
  count: number;

  constructor(greeting: string = 'React-TypeScript-Redux Example', count: number = 0) {
    this.greeting = greeting;
    this.count = count;
  }
}

export default ApplicationState;

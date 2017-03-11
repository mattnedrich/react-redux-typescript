import * as React from "react";

import IncrementExample from "./increment-example"

class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1> React-TypeScript-Redux Example </h1>
        <IncrementExample />
      </div>
    );
  }
}

export default App;

import * as React from "react";

class IncrementExample extends React.Component<undefined, undefined> {
  constructor() {
    super();
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked() {
    /* this.props.store.dispatch({type: 'INCREMENT'});*/
  }

  render() {
    return (
      <div>
        <input ref="inputRef" type="text"></input>
        <button onClick={this.buttonClicked}>Increment</button>
      </div>
    );
  }
}

export default IncrementExample;

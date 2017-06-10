import * as React from 'react';
import * as Actions from '../action-creators/';

export interface Props {
  greeting: string;
  updateGreeting: (greeting: string) => void;
};

export default class Greeting extends React.Component<Props, {}> {
  public refs: {
    greetingInputRef: HTMLInputElement;
  };

  constructor() {
    super();
    this.updateGreetingAction = this.updateGreetingAction.bind(this);
  }

  public updateGreetingAction() {
    this.props.updateGreeting(this.refs.greetingInputRef.value);
  }

  public render() {
    return (
      <div>
        <h1> {this.props.greeting} </h1>
        <input ref='greetingInputRef' type='text'></input>
        <button onClick={this.updateGreetingAction}>Update Greeting</button>
      </div>
    );
  }
}

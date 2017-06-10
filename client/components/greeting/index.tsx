import * as React from 'react';

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
      <div id='greeting'>
        <h1 id='greeting-text'>{this.props.greeting}</h1>
        <input id='greeting-input' ref='greetingInputRef' type='text'></input>
        <button id='greeting-button' onClick={this.updateGreetingAction}>Update Greeting</button>
      </div>
    );
  }
}

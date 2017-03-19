import * as React from 'react';
import { connect } from 'react-redux';

import { ApplicationState } from '../application-state';
import * as ActionCreators from '../action-creators/index';

interface GreetingProps {greeting: string, store: any, updateGreeting: any};

class Greeting extends React.Component<GreetingProps, any> {
  refs: {
    greetingInputRef: HTMLInputElement;
  }

  constructor() {
    super();
    this.updateGreetingAction = this.updateGreetingAction.bind(this);
  }

  updateGreetingAction() {
    this.props.updateGreeting(this.refs.greetingInputRef.value);
  }

  render() {
    return (
      <div>
        <h1> {this.props.greeting} </h1>
        <input ref="greetingInputRef" type="text"></input>
        <button onClick={this.updateGreetingAction}>Update Greeting</button>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return { greeting: state.greeting };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateGreeting: (newGreeting: string) => dispatch(ActionCreators.updateGreeting(newGreeting))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);

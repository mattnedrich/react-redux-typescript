import * as React from 'react';
import { connect } from 'react-redux';
import IncrementExample from './increment-example'
import ApplicationState from '../application-state';
import {updateGreeting} from '../actions/index';

interface AppProps {greeting: string, store: any, updateGreeting: any};

class App extends React.Component<AppProps, undefined> {

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
      <div style={{textAlign: 'center'}}>
        <h1> {this.props.greeting} </h1>
        <input ref="greetingInputRef" type="text"></input>
        <button onClick={this.updateGreetingAction}>Update Greeting</button>
        <IncrementExample />
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return { greeting: state.greeting };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateGreeting: (newGreeting: string) => dispatch(updateGreeting(newGreeting))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

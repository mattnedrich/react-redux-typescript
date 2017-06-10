import * as React from 'react';
import { connect } from 'react-redux';

import * as ActionCreators from '../action-creators/index';
import ApplicationState from '../application-state';
import Greeting from '../containers/greeting';
import Increment from './increment';

class App extends React.Component<any, any> {
  public render() {
    return (
      <div style={{textAlign: 'center'}}>
        <Greeting />
        <Increment />
      </div>
    );
  }
}

export default App;

import * as React from 'react';
import { connect } from 'react-redux';

import * as ActionCreators from '../action-creators/index';
import { ApplicationState } from '../application-state';

interface IncrementProps {
  count: number;
  increment: any;
};

class Increment extends React.Component<any, any> {
  constructor() {
    super();
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  public buttonClicked() {
    this.props.increment();
  }

  public render() {
    return (
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.buttonClicked}>Increment</button>
      </div>
    );
  }
}

function mapStateToProps(state: ApplicationState) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    increment: () => dispatch(ActionCreators.increment()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Increment);

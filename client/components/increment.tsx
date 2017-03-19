import * as React from 'react';
import { connect } from 'react-redux';

import { ApplicationState } from '../application-state';
import * as ActionCreators from '../action-creators/index';

interface IncrementProps { count: number, increment: any };

class Increment extends React.Component<any, any> {
  constructor() {
    super();
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked() {
    this.props.increment();
  }

  render() {
    return (
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.buttonClicked}>Increment</button>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return { count: state.count };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: () => dispatch(ActionCreators.increment())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Increment);

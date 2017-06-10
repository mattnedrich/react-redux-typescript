import * as React from 'react';
import { connect } from 'react-redux';

import * as ActionCreators from '../action-creators/index';
import { ApplicationState } from '../application-state';

export interface Props {
  count: number;
  increment: any;
};

export default class Increment extends React.Component<Props, any> {
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


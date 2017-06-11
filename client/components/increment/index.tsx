import * as React from 'react';

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
      <div id='increment'>
        <p id='increment-value'>{this.props.count}</p>
        <button onClick={this.buttonClicked}>Increment</button>
      </div>
    );
  }
}

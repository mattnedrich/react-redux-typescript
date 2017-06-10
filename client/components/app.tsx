import * as React from 'react';

import Greeting from '../containers/greeting';
import Increment from '../containers/increment';

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

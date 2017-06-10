import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as Actions from '../action-creators/index';
import { ApplicationState } from '../application-state';
import GreetingComponent from '../components/greeting';

import { Props as GreetingProps } from '../components/greeting';

type StateProps = Pick<GreetingProps, 'greeting'>;
type DispatchProps = Pick<GreetingProps, 'updateGreeting'>;

function mapStateToProps(state: ApplicationState): StateProps {
  return { greeting: state.greeting };
};

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchProps {
  return {
    updateGreeting: (newGreeting: string) => {
      dispatch(Actions.updateGreeting(newGreeting));
    },
  };
};

const ConnectedGreeting = connect(
  mapStateToProps,
  mapDispatchToProps,
)<{}>(GreetingComponent);

export default ConnectedGreeting;

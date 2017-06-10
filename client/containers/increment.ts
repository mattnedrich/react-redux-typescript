import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as ActionCreators from '../action-creators/index';
import { ApplicationState } from '../application-state';
import { Props as IncrementProps } from '../components/increment';
import IncrementComponent from '../components/increment';

type StateProps = Pick<IncrementProps, 'count'>;
type DispatchProps = Pick<IncrementProps, 'increment'>;

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchProps {
  return {
    increment: () => dispatch(ActionCreators.increment()),
  };
}

const ConnectedIncrement = connect(
  mapStateToProps,
  mapDispatchToProps,
)<{}>(IncrementComponent);

export default ConnectedIncrement;

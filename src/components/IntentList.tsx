import React, { useEffect } from 'react';
import {
  fetchIntents,
  selectIntent,
  unselectIntent,
  selectAllIntent,
  unselectAllIntent
} from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IntentListRenderer from './IntentListRenderer';
import { IntentProps, IntentListProps } from '../interfaces/types';

/**
 * @function IntentList
 *
 * Component to fetch data for the intent list
 */
const IntentList: React.FC<IntentListProps> = (props: IntentListProps) => {
  const { fetchIntents, ...otherProps } = props;

  useEffect(() => {
    fetchIntents();
  }, []);

  return <IntentListRenderer {...otherProps} />;
};

const mapStateToProps = (state: {
  intents: IntentProps[];
  selectedIntents: { [key: string]: IntentProps };
}) => {
  return { intents: state.intents, selectedIntents: state.selectedIntents };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      fetchIntents,
      selectIntent,
      unselectIntent,
      selectAllIntent,
      unselectAllIntent
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(IntentList);

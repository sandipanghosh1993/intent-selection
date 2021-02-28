import _ from 'lodash';
import {
  SELECT_INTENT,
  UNSELECT_INTENT,
  SELECT_ALL_INTENT,
  UNSELECT_ALL_INTENT
} from '../actions/types';
import { IntentProps } from '../interfaces/types';

/**
 * Reducer to handle selected/unselected intent data
 */
export default function(
  state: { [key: string]: IntentProps } = {},
  action: {
    type: string;
    payload: {
      data: IntentProps[] | IntentProps | {};
    };
  }
) {
  switch (action.type) {
    case SELECT_INTENT:
      return {
        ...state,
        [(action.payload.data as IntentProps).id]: action.payload.data
      };
    case UNSELECT_INTENT:
      return _.omit(state, [(action.payload.data as IntentProps).id]);
    case SELECT_ALL_INTENT:
      return (action.payload.data as IntentProps[]).reduce(
        (map: { [key: string]: IntentProps }, intent: IntentProps) => {
          map[intent.id] = intent;
          return map;
        },
        {}
      );
    case UNSELECT_ALL_INTENT:
      return action.payload.data;
  }
  return state;
}

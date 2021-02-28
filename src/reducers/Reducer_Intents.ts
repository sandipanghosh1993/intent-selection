import { FETCH_INTENTS } from '../actions/types';
import { IntentProps } from '../interfaces/types';

/**
 * Reducer to handle intent list data
 */
export default function(
  state: IntentProps[] = [],
  action: {
    type: string;
    payload: {
      data: IntentProps[];
    };
  }
) {
  switch (action.type) {
    case FETCH_INTENTS:
      return action.payload.data;
  }
  return state;
}

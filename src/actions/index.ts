import {
  FETCH_INTENTS,
  SELECT_INTENT,
  UNSELECT_INTENT,
  SELECT_ALL_INTENT,
  UNSELECT_ALL_INTENT
} from './types';
import { IntentProps } from '../interfaces/types';

const intents: IntentProps[] = require('../data/intents.json');

export function fetchIntents() {
  return {
    type: FETCH_INTENTS,
    payload: {
      data: intents
    }
  };
}

export function selectIntent(intent: IntentProps) {
  return {
    type: SELECT_INTENT,
    payload: {
      data: intent
    }
  };
}

export function unselectIntent(intent: IntentProps) {
  return {
    type: UNSELECT_INTENT,
    payload: {
      data: intent
    }
  };
}

export function selectAllIntent() {
  return {
    type: SELECT_ALL_INTENT,
    payload: {
      data: intents
    }
  };
}

export function unselectAllIntent() {
  return {
    type: UNSELECT_ALL_INTENT,
    payload: {
      data: {}
    }
  };
}

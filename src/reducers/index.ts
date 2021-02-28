import { combineReducers } from 'redux';
import IntentsReducer from './Reducer_Intents';
import SelectedIntentsReducer from './Reducer_Selected_Intents';

const rootReducer = combineReducers({
  intents: IntentsReducer,
  selectedIntents: SelectedIntentsReducer
});

export default rootReducer;

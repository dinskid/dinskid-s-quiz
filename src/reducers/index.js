import { combineReducers } from 'redux';
import timerReducer from './timer';
import questionsReducer from './questions';
import appStateReducer from './appState';

const reducers = combineReducers({
  questions: questionsReducer,
  timer: timerReducer,
  appState: appStateReducer,
});

export default reducers;
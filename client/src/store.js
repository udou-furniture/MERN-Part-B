import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import configuratorReducer from './configuratorReducer';

const rootReducer = combineReducers({
  // ...Place all reducers here
  configurator: configuratorReducer,
  form: formReducer
});

export const store = createStore( rootReducer );

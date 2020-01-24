import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import configuratorReducer from './configuratorReducer';

import reviewReducer from './reviewReducer';

const rootReducer = combineReducers({
  // ...Place all reducers here
  configurator: configuratorReducer,
  review: reviewReducer,
  form: formReducer
});

export const store = createStore( rootReducer );

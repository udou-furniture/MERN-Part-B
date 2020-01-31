import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import configuratorReducer from './configuratorReducer';
import reviewReducer from './reviewReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  // ...Place all reducers here
  cart: cartReducer,
  order: orderReducer,
  configurator: configuratorReducer,
  review: reviewReducer,
  form: formReducer
});

export const store = createStore( rootReducer );

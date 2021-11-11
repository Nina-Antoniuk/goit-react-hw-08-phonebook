import { createStore, combineReducers } from 'redux';
import { formReducer } from './form/Form-reducer';
// import moduleName from './filter/Contacts-reducer';

const rootReducer = combineReducers({
  form: formReducer,
  // filter: filterContactsReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// export const store = createStore(rootReducer, composeWithDevTools());

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/сontacts-reducer';

// const myMiddleware = store => next => action => {
//   const state = store.getState();
//   console.log('store my middleware', state.contacts);
//   return next(action);
// };
const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

export const store = configureStore({
  reducer: contactsReducer,
  middleware: [logger],
});

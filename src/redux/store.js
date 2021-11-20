import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/сontacts-reducer';

export const store = configureStore({
  reducer: contactsReducer,
});

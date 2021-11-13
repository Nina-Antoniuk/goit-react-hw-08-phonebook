import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './сontacts-action';

const contacts = createReducer([], {
  [actions.addContact.type]: (state, action) => [...state, action.payload],
  [actions.deleteContact.type]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [actions.filteredContacts.type]: (state, action) => (state = action.payload),
});

export const contactsReducer = combineReducers({
  contacts,
  filter,
});

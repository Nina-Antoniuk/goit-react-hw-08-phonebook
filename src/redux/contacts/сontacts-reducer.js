import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './сontacts-action';

const contacts = createReducer([], {
  [actions.getContactsSuccsess]: (state, action) => [...action.payload],
  [actions.addContactsSuccsess]: (state, action) => [...state, action.payload],
  [actions.deleteContactSuccsess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload.id),
});

const filter = createReducer('', {
  [actions.filteredContacts]: (state, action) => (state = action.payload),
});

export const contactsReducer = combineReducers({
  contacts,
  filter,
});

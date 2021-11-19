import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './сontacts-action';

const contacts = createReducer([], {
  [actions.getContactsSuccsess]: (state, action) => [...action.payload],
  [actions.addContactsSuccsess]: (state, action) => {
    return [...state, action.payload];
  },
  [actions.deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [actions.filteredContacts]: (state, action) => (state = action.payload),
});

// const loading = createReducer(false, {
//   [actions.addContactsRequest]: () => true,
//   [actions.addContactsSuccsess]: () => false,
//   [actions.addContactsError]: () => false,
// });

export const contactsReducer = combineReducers({
  contacts,
  filter,
  // loading,
});

import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/сontacts-reducer';
import { filterContactsReducer } from './filter/filter-reducer';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filteredContacts: filterContactsReducer,
});

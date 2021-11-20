import { createAction } from '@reduxjs/toolkit';

export const getContactsRequest = createAction('contacts/getContactsRequest');
export const getContactsSuccsess = createAction('contacts/getContactsSuccsess');
export const getContactsError = createAction('contacts/getContactsError');

export const addContactsRequest = createAction('contacts/addContactsRequest');
export const addContactsSuccsess = createAction('contacts/addContactsSuccsess');
export const addContactsError = createAction('contacts/addContactsError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccsess = createAction(
  'contacts/deleteContactSuccsess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const filteredContacts = createAction('contacts/filter');

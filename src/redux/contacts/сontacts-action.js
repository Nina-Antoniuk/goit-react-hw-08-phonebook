import { createAction } from '@reduxjs/toolkit';

export const getContactsRequest = createAction('contacts/getContactsRequest');
export const getContactsSuccsess = createAction('contacts/getContactsSuccsess');
export const getContactsError = createAction('contacts/getContactsError');

export const addContactsRequest = createAction('contacts/addContactsRequest');
export const addContactsSuccsess = createAction('contacts/addContactsSuccsess');
export const addContactsError = createAction('contacts/addContactsError');

// export const addContact = createAction('contacts/add', contact => ({
//   payload: {
//     ...contact,
//     id: uuidv1(),
//   },
// }));

export const deleteContact = createAction('contacts/delete');
export const filteredContacts = createAction('contacts/filter');

import { createAction } from '@reduxjs/toolkit';
import { v1 as uuidv1 } from 'uuid';

export const addContact = createAction('contacts/add', contact => ({
  payload: {
    ...contact,
    id: uuidv1(),
  },
}));
export const deleteContact = createAction('contacts/delete');
export const filteredContacts = createAction('contacts/filter');

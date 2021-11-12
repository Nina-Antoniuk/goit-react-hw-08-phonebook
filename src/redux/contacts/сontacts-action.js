import { createAction } from '@reduxjs/toolkit';
import { v1 as uuidv1 } from 'uuid';

export const getName = createAction('contacts/getName');
export const getNumber = createAction('contacts/getNumber');
export const resetInputValue = createAction('contacts/resetInputValue');
export const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    name,
    number,
    id: uuidv1(),
  },
}));
export const deleteContact = createAction('contacts/delete');
export const filteredContacts = createAction('contacts/filter');

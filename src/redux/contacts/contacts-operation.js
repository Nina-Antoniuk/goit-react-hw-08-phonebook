import * as actions from './сontacts-action';
import axios from 'axios';

axios.defaults.baseURL =
  'https://61976b3aaf46280017e7e5ea.mockapi.io/phonebook';

export const getContacts = state => dispatch => {
  dispatch(actions.getContactsRequest());

  axios
    .get('/contacts')
    .then(res => dispatch(actions.getContactsSuccsess(res.data)))
    .catch(err => dispatch(actions.getContactsError(err)));
};

export const addContact = state => dispatch => {
  dispatch(actions.addContactsRequest());

  axios
    .post('/contacts', state)
    .then(res => dispatch(actions.addContactsSuccsess(res.data)))
    .catch(err => dispatch(actions.addContactsError(err)));
};

export const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(res => dispatch(actions.deleteContactSuccsess(res.data)))
    .catch(err => dispatch(actions.deleteContactError(err)));
};
